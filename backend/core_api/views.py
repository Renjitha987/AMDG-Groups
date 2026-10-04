from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.db.models import Q
from .models import SiteConfig, VisitorStat, TeamMember, ServiceItem, Product, LegalSection, Inquiry
from .serializers import (
    SiteConfigSerializer,
    VisitorStatSerializer,
    TeamMemberSerializer,
    ServiceItemSerializer,
    ProductSerializer,
    LegalSectionSerializer,
    InquirySerializer,
)

class SiteConfigView(APIView):
    def get(self, request):
        config, _ = SiteConfig.objects.get_or_create(id=1)
        serializer = SiteConfigSerializer(config)
        return Response(serializer.data)

    def put(self, request):
        config, _ = SiteConfig.objects.get_or_create(id=1)
        serializer = SiteConfigSerializer(config, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class VisitorStatView(APIView):
    def get(self, request):
        stat, _ = VisitorStat.objects.get_or_create(id=1)
        serializer = VisitorStatSerializer(stat)
        return Response(serializer.data)

    def post(self, request):
        stat, _ = VisitorStat.objects.get_or_create(id=1)
        stat.today_visits_count += 1
        stat.save()
        serializer = VisitorStatSerializer(stat)
        return Response(serializer.data)

    def put(self, request):
        stat, _ = VisitorStat.objects.get_or_create(id=1)
        serializer = VisitorStatSerializer(stat, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class TeamMemberViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer

class ServiceItemViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ServiceItem.objects.all()
    serializer_class = ServiceItemSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        category = self.request.query_params.get('category')
        if category:
            qs = qs.filter(category=category)
        return qs

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        section = self.request.query_params.get('section')
        if section:
            qs = qs.filter(section=section)
        return qs

class LegalSectionViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = LegalSection.objects.all()
    serializer_class = LegalSectionSerializer

    def get_queryset(self):
        qs = super().get_queryset()
        doc_type = self.request.query_params.get('doc_type')
        if doc_type:
            qs = qs.filter(doc_type=doc_type)
        return qs

class InquiryViewSet(viewsets.ModelViewSet):
    queryset = Inquiry.objects.all()
    serializer_class = InquirySerializer

class GlobalSearchView(APIView):
    def get(self, request):
        query = request.query_params.get('q', '').strip()
        if not query:
            return Response({'results': []})

        results = []
        # Search services
        services = ServiceItem.objects.filter(
            Q(title__icontains=query) | Q(description__icontains=query) | Q(subtitle__icontains=query)
        )
        for s in services:
            results.append({
                'type': 'Service',
                'title': s.title,
                'snippet': s.description or s.subtitle or s.title,
                'url': s.link_url or '/what-we-do'
            })

        # Search products
        products = Product.objects.filter(
            Q(name__icontains=query) | Q(subtitle__icontains=query) | Q(description__icontains=query)
        )
        for p in products:
            results.append({
                'type': 'Product',
                'title': p.name,
                'snippet': f"Category: {p.get_section_display()} - {p.subtitle}",
                'url': '/memory-moulds'
            })

        # Search team
        team = TeamMember.objects.filter(
            Q(name__icontains=query) | Q(role__icontains=query) | Q(bio__icontains=query)
        )
        for t in team:
            results.append({
                'type': 'Team',
                'title': f"{t.name} ({t.role})",
                'snippet': t.bio[:150] + "...",
                'url': '/founder-md' if 'Founder' in t.role else '/#team'
            })

        # Search legal
        legal = LegalSection.objects.filter(
            Q(title__icontains=query) | Q(content__icontains=query)
        )
        for l in legal:
            results.append({
                'type': 'Legal',
                'title': f"{l.get_doc_type_display()} - {l.title}",
                'snippet': l.content[:150] + "...",
                'url': '/more'
            })

        return Response({'query': query, 'count': len(results), 'results': results})
