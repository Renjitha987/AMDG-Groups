from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    SiteConfigView,
    VisitorStatView,
    TeamMemberViewSet,
    ServiceItemViewSet,
    ProductViewSet,
    LegalSectionViewSet,
    InquiryViewSet,
    GlobalSearchView,
)

router = DefaultRouter()
router.register(r'team', TeamMemberViewSet)
router.register(r'services', ServiceItemViewSet)
router.register(r'products', ProductViewSet)
router.register(r'legal', LegalSectionViewSet)
router.register(r'inquiries', InquiryViewSet)

urlpatterns = [
    path('site-config/', SiteConfigView.as_view(), name='site-config'),
    path('stats/', VisitorStatView.as_view(), name='stats'),
    path('search/', GlobalSearchView.as_view(), name='global-search'),
    path('', include(router.urls)),
]
