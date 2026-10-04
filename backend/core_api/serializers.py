from rest_framework import serializers
from .models import SiteConfig, VisitorStat, TeamMember, ServiceItem, Product, LegalSection, Inquiry

class SiteConfigSerializer(serializers.ModelSerializer):
    class Meta:
        model = SiteConfig
        fields = '__all__'

class VisitorStatSerializer(serializers.ModelSerializer):
    class Meta:
        model = VisitorStat
        fields = '__all__'

class TeamMemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = TeamMember
        fields = '__all__'

class ServiceItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceItem
        fields = '__all__'

class ProductSerializer(serializers.ModelSerializer):
    whatsapp_link = serializers.ReadOnlyField()

    class Meta:
        model = Product
        fields = '__all__'

class LegalSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = LegalSection
        fields = '__all__'

class InquirySerializer(serializers.ModelSerializer):
    class Meta:
        model = Inquiry
        fields = '__all__'
