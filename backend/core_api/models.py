from django.db import models

class SiteConfig(models.Model):
    company_name = models.CharField(max_length=200, default="AMDG GROUP Ltd")
    group_name = models.CharField(max_length=200, default="AMDG GROUP OF COMPANIES")
    tagline = models.CharField(max_length=200, default="Creating Creativity")
    bible_verse = models.TextField(
        default="“Commit to the Lord whatever you do, and he will establish your plans.” (Proverbs 16:3)"
    )
    phone_primary = models.CharField(max_length=50, default="+91 62822 68453")
    phone_founder = models.CharField(max_length=50, default="+91 85905 27277")
    email_primary = models.EmailField(default="groupamdg.india@gmail.com")
    email_legal = models.EmailField(default="amdg.hub@gmail.com")
    address = models.TextField(
        default="AMDG Digital Media · Pazhumattathil Buildings, Mar Sleeva Church, PO, Koodaranji, Calicut, Kerala 673604, India"
    )
    rating_score = models.CharField(max_length=50, default="★★★★★ · Media company")
    review_url = models.URLField(
        default="https://g.page/r/CXyj8Py1eCl0EAE/review", max_length=500
    )
    whatsapp_orders = models.CharField(max_length=50, default="916282119419")
    whatsapp_support = models.CharField(max_length=50, default="916282268453")
    facebook_url = models.URLField(default="https://facebook.com", max_length=500)
    instagram_url = models.URLField(
        default="https://www.instagram.com/amdg_media.official/", max_length=500
    )
    official_website = models.URLField(default="http://www.amdgmedia.co.in", max_length=500)
    joy_mart_notice = models.TextField(
        default="Customers please note you can click the book now option and you will be directed to Whatsapp Chat and you can order your product and complete your order. Delivery within 7 Days of confirming order. TollFree No +91 62822 68453"
    )
    successful_deliveries = models.CharField(max_length=50, default="2204+")
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name = "Site Configuration"
        verbose_name_plural = "Site Configuration"

    def __str__(self):
        return self.company_name


class VisitorStat(models.Model):
    total_visits_display = models.CharField(max_length=50, default="10K+")
    today_visits_count = models.IntegerField(default=67)
    last_increment_date = models.DateField(auto_now=True)

    class Meta:
        verbose_name = "Visitor Statistic"
        verbose_name_plural = "Visitor Statistics"

    def __str__(self):
        return f"{self.total_visits_display} Total | {self.today_visits_count} Today"


class TeamMember(models.Model):
    name = models.CharField(max_length=150)
    role = models.CharField(max_length=150)
    bio = models.TextField(blank=True)
    image_url = models.CharField(max_length=500, blank=True)
    instagram_url = models.CharField(max_length=500, blank=True)
    linkedin_url = models.CharField(max_length=500, blank=True)
    whatsapp_url = models.CharField(max_length=500, blank=True)
    facebook_url = models.CharField(max_length=500, blank=True)
    twitter_url = models.CharField(max_length=500, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['order', 'id']

    def __str__(self):
        return f"{self.name} ({self.role})"


class ServiceItem(models.Model):
    CATEGORY_CHOICES = [
        ('home_service', 'Home Service Card'),
        ('what_we_do', 'What We Do List Item'),
        ('media_service', 'AMDG Media & Designs Section'),
        ('design_item', 'Design Portfolio / Offerings'),
    ]
    title = models.CharField(max_length=200)
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES, default='what_we_do')
    subtitle = models.CharField(max_length=200, blank=True)
    description = models.TextField(blank=True)
    link_url = models.CharField(max_length=300, blank=True)
    button_label = models.CharField(max_length=100, blank=True)
    image_url = models.CharField(max_length=500, blank=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['category', 'order', 'id']
        verbose_name = "Service & Design Item"
        verbose_name_plural = "Services & Design Items"

    def __str__(self):
        return f"[{self.category}] {self.title}"


class Product(models.Model):
    SECTION_CHOICES = [
        ('hampers', 'Hampers'),
        ('keychains', 'Key Chains'),
        ('wallets', 'Wallets'),
    ]
    name = models.CharField(max_length=200)
    section = models.CharField(max_length=50, choices=SECTION_CHOICES, default='wallets')
    subtitle = models.CharField(max_length=150, blank=True)
    description = models.TextField(blank=True)
    image_url = models.CharField(max_length=500, blank=True)
    whatsapp_phone = models.CharField(max_length=50, default="916282119419")
    in_stock = models.BooleanField(default=True)
    order = models.IntegerField(default=0)

    class Meta:
        ordering = ['section', 'order', 'id']
        verbose_name = "Product / Order Item"
        verbose_name_plural = "Products & Order Items"

    def __str__(self):
        return f"[{self.section.upper()}] {self.name}"

    @property
    def whatsapp_link(self):
        msg = f"Hello AMDG Memory Moulds team, I would like to order: {self.name}"
        if self.subtitle:
            msg += f" ({self.subtitle})"
        import urllib.parse
        return f"https://wa.me/{self.whatsapp_phone}?text={urllib.parse.quote(msg)}"


class LegalSection(models.Model):
    DOC_CHOICES = [
        ('copyright', 'Copyright Terms'),
        ('terms', 'Terms and Conditions'),
        ('privacy', 'Privacy Policy'),
    ]
    doc_type = models.CharField(max_length=50, choices=DOC_CHOICES)
    section_number = models.IntegerField(default=1)
    title = models.CharField(max_length=250)
    content = models.TextField()

    class Meta:
        ordering = ['doc_type', 'section_number']
        verbose_name = "Legal & Policy Section"
        verbose_name_plural = "Legal & Policy Sections"

    def __str__(self):
        return f"{self.doc_type.upper()} {self.section_number}. {self.title}"


class Inquiry(models.Model):
    name = models.CharField(max_length=150)
    email = models.EmailField(blank=True)
    phone = models.CharField(max_length=50)
    subject = models.CharField(max_length=200, blank=True)
    message = models.TextField()
    product_name = models.CharField(max_length=200, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
        verbose_name = "Inquiry & Lead"
        verbose_name_plural = "Inquiries & Leads"

    def __str__(self):
        return f"Inquiry from {self.name} ({self.phone})"
