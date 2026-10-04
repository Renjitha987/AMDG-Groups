from django.contrib import admin
from django.utils.html import format_html
from django.utils.safestring import mark_safe
from .models import SiteConfig, VisitorStat, TeamMember, ServiceItem, Product, LegalSection, Inquiry

# Custom Branding for Django Admin
admin.site.site_header = "AMDG GROUP Ltd Management Portal"
admin.site.site_title = "AMDG Admin"
admin.site.index_title = "Corporate Operations & Content Management"


class BaseAMDGAdmin(admin.ModelAdmin):
    class Media:
        css = {
            'all': ('admin/css/custom_admin.css',)
        }


@admin.register(SiteConfig)
class SiteConfigAdmin(BaseAMDGAdmin):
    list_display = ('company_name', 'phone_primary', 'whatsapp_orders', 'email_primary', 'updated_at')
    fieldsets = (
        ('General Identity', {
            'fields': ('company_name', 'group_name', 'tagline', 'bible_verse')
        }),
        ('Contact Numbers & WhatsApp', {
            'fields': ('phone_primary', 'phone_founder', 'whatsapp_orders', 'whatsapp_support')
        }),
        ('Email & Address', {
            'fields': ('email_primary', 'email_legal', 'address')
        }),
        ('Social & Web Links', {
            'fields': ('official_website', 'instagram_url', 'facebook_url', 'review_url', 'rating_score')
        }),
        ('Commerce Notices', {
            'fields': ('joy_mart_notice', 'successful_deliveries')
        }),
    )


@admin.register(VisitorStat)
class VisitorStatAdmin(BaseAMDGAdmin):
    list_display = ('total_visits_display', 'today_visits_count', 'last_increment_date')


@admin.register(TeamMember)
class TeamMemberAdmin(BaseAMDGAdmin):
    list_display = ('photo_preview', 'name', 'role', 'order')
    list_editable = ('order',)
    search_fields = ('name', 'role')

    def photo_preview(self, obj):
        if obj.image_url:
            url = obj.image_url
            if url.startswith('/'):
                url = f"http://127.0.0.1:5173{url}"
            return format_html(
                '<img src="{}" style="width: 42px; height: 42px; object-fit: cover; border-radius: 50%; border: 2px solid #38bdf8;" />',
                url
            )
        return mark_safe('<span style="color: #94a3b8; font-size: 11px;">No photo</span>')
    photo_preview.short_description = "Photo"


@admin.register(ServiceItem)
class ServiceItemAdmin(BaseAMDGAdmin):
    list_display = ('thumbnail_preview', 'title', 'category', 'order', 'link_url')
    list_filter = ('category',)
    list_editable = ('order',)
    search_fields = ('title', 'description', 'subtitle')

    def thumbnail_preview(self, obj):
        if obj.image_url:
            url = obj.image_url
            if url.startswith('/'):
                url = f"http://127.0.0.1:5173{url}"
            return format_html(
                '<img src="{}" style="width: 52px; height: 36px; object-fit: cover; border-radius: 6px; border: 1px solid #cbd5e1;" />',
                url
            )
        return mark_safe('<span style="color: #94a3b8; font-size: 11px;">No image</span>')
    thumbnail_preview.short_description = "Image"


@admin.register(Product)
class ProductAdmin(BaseAMDGAdmin):
    list_display = ('thumbnail_preview', 'name', 'section', 'subtitle', 'stock_badge', 'order', 'quick_order_button')
    list_filter = ('section', 'in_stock')
    list_editable = ('order',)
    search_fields = ('name', 'subtitle', 'description')

    def thumbnail_preview(self, obj):
        if obj.image_url:
            url = obj.image_url
            if url.startswith('/'):
                url = f"http://127.0.0.1:5173{url}"
            return format_html(
                '<img src="{}" style="width: 48px; height: 48px; object-fit: cover; border-radius: 8px; border: 1px solid #e2e8f0; box-shadow: 0 1px 3px rgba(0,0,0,0.1);" />',
                url
            )
        return mark_safe('<span style="color: #94a3b8; font-size: 11px;">No image</span>')
    thumbnail_preview.short_description = "Preview"

    def stock_badge(self, obj):
        if obj.in_stock:
            return mark_safe(
                '<span style="background: #dcfce7; color: #15803d; font-weight: bold; font-size: 11px; padding: 4px 8px; border-radius: 9999px; display: inline-block;">● In Stock</span>'
            )
        return mark_safe(
            '<span style="background: #fee2e2; color: #b91c1c; font-weight: bold; font-size: 11px; padding: 4px 8px; border-radius: 9999px; display: inline-block;">○ Sold Out</span>'
        )
    stock_badge.short_description = "Inventory"

    def quick_order_button(self, obj):
        return format_html(
            '<a href="{}" target="_blank" style="background: #0284c7; color: white; padding: 4px 10px; border-radius: 6px; text-decoration: none; font-size: 11px; font-weight: 600; display: inline-flex; align-items: center; gap: 4px;">💬 Test WhatsApp</a>',
            obj.whatsapp_link
        )
    quick_order_button.short_description = "WhatsApp Action"


@admin.register(LegalSection)
class LegalSectionAdmin(BaseAMDGAdmin):
    list_display = ('section_number', 'title', 'doc_type')
    list_filter = ('doc_type',)
    search_fields = ('title', 'content')


@admin.register(Inquiry)
class InquiryAdmin(BaseAMDGAdmin):
    list_display = ('name', 'phone', 'email', 'subject', 'created_at', 'contact_action')
    list_filter = ('created_at',)
    search_fields = ('name', 'phone', 'email', 'message')
    readonly_fields = ('created_at',)

    def contact_action(self, obj):
        clean_phone = ''.join(filter(str.isdigit, obj.phone or ''))
        wa_link = f"https://wa.me/{clean_phone}" if clean_phone else "#"
        return format_html(
            '<a href="{}" target="_blank" style="background: #22c55e; color: white; padding: 3px 8px; border-radius: 6px; text-decoration: none; font-size: 11px; font-weight: bold; margin-right: 4px;">WhatsApp</a>'
            '<a href="tel:{}" style="background: #0284c7; color: white; padding: 3px 8px; border-radius: 6px; text-decoration: none; font-size: 11px; font-weight: bold;">Call</a>',
            wa_link, obj.phone
        )
    contact_action.short_description = "Quick Contact"
