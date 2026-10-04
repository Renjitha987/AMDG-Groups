from django.core.management.base import BaseCommand
from core_api.models import SiteConfig, VisitorStat, TeamMember, ServiceItem, Product, LegalSection

class Command(BaseCommand):
    help = "Seed AMDG GROUP Ltd database with authentic content from Google Sites"

    def handle(self, *args, **options):
        self.stdout.write("Seeding AMDG GROUP Ltd data...")

        # 1. SiteConfig
        config, created = SiteConfig.objects.get_or_create(id=1)
        config.company_name = "AMDG GROUP Ltd"
        config.group_name = "AMDG GROUP OF COMPANIES"
        config.tagline = "Creating Creativity"
        config.bible_verse = "“Commit to the Lord whatever you do, and he will establish your plans.” (Proverbs 16:3)"
        config.phone_primary = "+91 62822 68453"
        config.phone_founder = "+91 85905 27277"
        config.email_primary = "groupamdg.india@gmail.com"
        config.email_legal = "amdg.hub@gmail.com"
        config.address = "AMDG Digital Media · Pazhumattathil Buildings, Mar Sleeva Church, PO, Koodaranji, Calicut, Kerala 673604, India"
        config.rating_score = "★★★★★ · Media company"
        config.review_url = "https://g.page/r/CXyj8Py1eCl0EAE/review"
        config.whatsapp_orders = "916282119419"
        config.whatsapp_support = "916282268453"
        config.facebook_url = "https://facebook.com"
        config.instagram_url = "https://www.instagram.com/amdg_media.official/"
        config.official_website = "http://www.amdgmedia.co.in"
        config.joy_mart_notice = (
            "Customers please note you can click the book now option and you will be directed to "
            "Whatsapp Chat and you can order your product and complete your order. "
            "Delivery within 7 Days of confirming order. TollFree No +91 62822 68453"
        )
        config.successful_deliveries = "2204+"
        config.save()
        self.stdout.write(" - SiteConfig saved.")

        # 2. VisitorStat
        stat, _ = VisitorStat.objects.get_or_create(id=1)
        stat.total_visits_display = "10K+"
        stat.today_visits_count = 67
        stat.save()
        self.stdout.write(" - VisitorStat saved.")

        # 3. Team Members
        TeamMember.objects.all().delete()
        TeamMember.objects.create(
            name="Mr Ajin Shibu",
            role="Founder & CEO",
            image_url="/images/team/ajin_shibu.jpg",
            bio=(
                "Ajin Shibu is a visionary entrepreneur, designer, and social worker committed to "
                "transforming ideas into impactful realities. With a passion for creativity and innovation, "
                "he founded AMDG Group as a platform to bridge artistic excellence with purpose-driven solutions. "
                "His expertise in design, media, and digital works allows him to craft unique experiences that inspire, "
                "engage, and leave a lasting impact.\n\n"
                "Beyond the creative realm, Ajin's background in social work gives him a deep understanding of community "
                "needs and the power of media in driving positive change. His ability to blend creativity with social "
                "consciousness has shaped AMDG Group’s core values, ensuring that every project not only delivers "
                "excellence but also contributes to a greater good. He believes in the power of collaboration, fostering "
                "an environment where ideas thrive, and innovation flourishes.\n\n"
                "Under his leadership, AMDG Group has grown into a trusted name in the industry, known for its "
                "commitment to quality, integrity, and groundbreaking creativity. Ajin’s vision is to continue pushing "
                "the boundaries of design and digital innovation while empowering individuals and organizations to achieve "
                "their fullest potential. Through AMDG Group, he strives to create a legacy of meaningful impact, driven "
                "by the motto Creating Creativity."
            ),
            instagram_url="https://www.instagram.com/aj.in_shi.bu/",
            linkedin_url="https://www.linkedin.com/in/ajin-shibu/",
            whatsapp_url="http://wa.me/918590527277",
            facebook_url="https://www.facebook.com/ajin.shibugeorge/",
            twitter_url="https://x.com/ajinshibu",
            order=1
        )
        TeamMember.objects.create(
            name="Mr Jismon Varkey",
            role="Media Editor",
            image_url="/images/team/jismon_varkey.jpg",
            bio="Professional media editor specializing in photo, video, and audio editing with artistic precision and creative excellence.",
            order=2
        )
        self.stdout.write(" - Team members saved.")

        # 4. Service Items
        ServiceItem.objects.all().delete()
        # Home Featured Services
        ServiceItem.objects.create(
            title="Go To Shopping Site",
            category="home_service",
            subtitle="JOY MART is opened",
            description="Go To Shopping Site from there you can purchase and know more about the products. JOY MART is opened and order from your fingertip. We provide with less rate with friendly budget.",
            link_url="/memory-moulds",
            button_label="Go To Shopping Site",
            image_url="/images/services/shopping_joymart.jpg",
            order=1
        )
        ServiceItem.objects.create(
            title="Digital Works",
            category="home_service",
            subtitle="Designs & Printings",
            description="Digital Works are one our services. We provide works with less rate and printings. Customers can call and verify designs by your creation. Home Delivery of Flex, Banner, Notices are provided.",
            link_url="/designs",
            button_label="Click To Know More",
            image_url="/images/services/digital_works.jpg",
            order=2
        )
        ServiceItem.objects.create(
            title="Editings",
            category="home_service",
            subtitle="Photo, Video, Music",
            description="Editings Such as Photo, Video, Music are provided by us. You can contact via call or whatsapp to get more information. Works are done in a friendly budget. Customers can avail offers via REFER CODE.",
            link_url="/amdg-media-designs",
            button_label="Click To Know More",
            image_url="/images/services/editings.jpg",
            order=3
        )

        # What We Do (15 items)
        what_we_do_list = [
            ("Brand Identity & Logo Design", "Comprehensive brand identity creation and memorable logo designs."),
            ("Graphic Design & Creative Content", "High-impact visual communication and promotional creative assets."),
            ("Website Design & Development", "Modern, responsive, user-friendly websites tailored to your business."),
            ("Social Media Management", "Strategic social media presence management and audience engagement."),
            ("Digital Marketing", "Targeted advertising and online campaigns to expand your reach."),
            ("Photography & Videography", "High-quality professional photography and cinematic video captures."),
            ("Printing & Promotional Materials", "Flex, banners, flyers, notices, business cards with doorstep delivery."),
            ("Business Registration & Documentation Assistance", "Expert guidance and processing for business filings and compliance."),
            ("Online Application Services", "Assistance with official forms, digital portals, and submission procedures."),
            ("Content Creation & Media Production", "Engaging multi-media storytelling and brand collateral production."),
            ("Event Branding & Publicity", "Complete visual kits, stage banners, and publicity for community and corporate events."),
            ("Corporate Profile Design", "Sleek and authoritative corporate brochures and company decks."),
            ("Presentation Design", "Persuasive and beautifully laid-out slide presentations."),
            ("Business Consultancy", "Actionable advisory services to optimize strategy and growth."),
            ("Technology & Digital Solutions", "End-to-end digital tools and modern software implementations.")
        ]
        for idx, (title, desc) in enumerate(what_we_do_list, 1):
            ServiceItem.objects.create(
                title=title,
                category="what_we_do",
                description=desc,
                order=idx
            )

        # AMDG Media & Designs Core Sections (4 items)
        ServiceItem.objects.create(
            title="Graphic Design Services",
            category="media_service",
            subtitle="Creative Graphic Solutions",
            description="Complete suite of visual design services from marketing collateral to digital banners.",
            link_url="/designs",
            image_url="/images/services/digital_works.jpg",
            order=1
        )
        ServiceItem.objects.create(
            title="Editing Productions",
            category="media_service",
            subtitle="Photo, Video & Audio",
            description="High precision media editing including photo retouching, video post-production, and audio mastering.",
            link_url="/amdg-media-designs",
            image_url="/images/services/editings.jpg",
            order=2
        )
        ServiceItem.objects.create(
            title="Ads & Marketing",
            category="media_service",
            subtitle="Targeted Campaigns",
            description="Full advertising agency support, social media poster campaigns, and strategic brand visibility.",
            link_url="/designs",
            image_url="/images/services/what_we_do_hero.jpg",
            order=3
        )
        ServiceItem.objects.create(
            title="JOY Mart Online Shoppie",
            category="media_service",
            subtitle="Custom Gifting & Merchandise",
            description="Personalized gift hampers, custom wallets, and unique bespoke keychains delivered nationwide.",
            link_url="/memory-moulds",
            image_url="/images/services/shopping_joymart.jpg",
            order=4
        )

        # Designs Portfolio Items (8 items)
        design_items = [
            ("Advertising & Marketing", "Comprehensive campaigns engineered to drive brand recognition and client acquisition.", 1),
            ("Graphic Designs", "Striking visual assets tailored for social media, print, and digital brand presence.", 2),
            ("Website Creation", "Responsive, responsive, and performance-optimized websites built for high conversion.", 3),
            ("Social Media Posters", "Eye-catching custom graphics crafted for Instagram, Facebook, and WhatsApp marketing.", 4),
            ("Advertisements", "Dynamic advertising creatives suited for online media, billboards, and print.", 5),
            ("LOGO Making Service", "Unique corporate identity and emblem designs reflecting brand purpose.", 6),
            ("Ads & Marketing", "Integrated publicity strategies tailored to events, businesses, and startups.", 7),
            ("Content Creation", "Creative copywriting, photography, and multimedia production.", 8),
        ]
        for title, desc, ord_idx in design_items:
            ServiceItem.objects.create(
                title=title,
                category="design_item",
                description=desc,
                link_url="http://wa.me/916282268453",
                order=ord_idx
            )
        self.stdout.write(" - Services saved.")

        # 5. Products (Memory Moulds / Joy Mart)
        Product.objects.all().delete()
        products_data = [
            # Hampers
            ("Men's Wallet Hamper", "hampers", "All In One", "Premium curated men's hamper including customized wallet, accessories, and bespoke gift packaging.", "/images/products/mens_wallet_hamper.jpg", 1),
            ("Men's Hamper Wallet", "hampers", "Deluxe Edition", "Elegantly packaged gift box featuring a high-grade men's wallet and personalized tokens.", "/images/products/mens_hamper_wallet.jpg", 2),
            ("Men's Black Combo", "hampers", "13 in 1", "Exclusive 13-in-1 combo bundle with executive black styling and multipurpose utilities.", "/images/products/mens_black_combo.jpg", 3),
            ("Gifting Wallet", "hampers", "Special Edition", "Signature gifting package featuring custom name engraving and premium finish.", "/images/products/gifting_wallet.jpg", 4),
            # Key Chains
            ("Calender Keychain", "keychains", "Custom Date", "Personalized metallic calendar keychain highlighting your unforgettable date and memories.", "/images/products/calender_keychain.jpg", 5),
            ("Couple Keychain", "keychains", "Matching Set", "Artistic matching couple keychain set crafted with personalized initials and love motifs.", "/images/products/couple_keychain.jpg", 6),
            # Wallets
            ("Customized Men's Wallet", "wallets", "Name Engraved", "Handcrafted faux-leather men's wallet with custom embossed name tag and charm.", "/images/products/customized_mens_wallet.jpg", 7),
            ("Men's Wallet", "wallets", "Classic Bi-fold", "Durable bi-fold leather wallet with dedicated card sleeves and dual cash compartments.", "/images/products/mens_wallet.jpg", 8),
            ("Ladies Wallet", "wallets", "Clutch Style", "Chic and spacious ladies zip wallet designed for cards, mobile, and currency.", "/images/products/ladies_wallet.jpg", 9),
            ("Ladies Hand Bag", "wallets", "Designer Shoulder Bag", "Fashionable daily carry handbag crafted with premium materials and stylish accents.", "/images/products/ladies_hand_bag.jpg", 10),
            ("Customized Wallet", "wallets", "Bespoke Collection", "Customizable wallet tailored with customized text, charms, and color selection.", "/images/products/customized_wallet.jpg", 11),
            ("Customized Ladies Hand Bag", "wallets", "Monogram Edition", "Personalized ladies handbag adorned with bespoke monogramming and elegance.", "/images/products/customized_ladies_hand_bag.jpg", 12),
        ]
        for name, sec, sub, desc, img, ord_num in products_data:
            Product.objects.create(
                name=name,
                section=sec,
                subtitle=sub,
                description=desc,
                image_url=img,
                whatsapp_phone="916282119419",
                in_stock=True,
                order=ord_num
            )
        self.stdout.write(" - Products saved.")

        # 6. Legal Sections (Copyright Terms & Terms & Conditions)
        LegalSection.objects.all().delete()

        # Copyright Terms (1 to 12)
        copyright_clauses = [
            (1, "Ownership", "All content, including but not limited to text, graphics, logos, icons, images, designs, brochures, and documentation, found in AMDG Group's materials and publications (including this brochure), are the exclusive property of AMDG GROUP OF COMPANIES, unless otherwise stated."),
            (2, "Copyright Protection", "This document and all its contents are protected under Indian Copyright Law and applicable international copyright conventions. Unauthorized copying, reproduction, modification, distribution, or republication of any part of this document, in any form or by any means, is strictly prohibited without prior written permission from AMDG Group."),
            (3, "Use of Content", "The use of AMDG Group’s materials is permitted only: For informational or educational purposes; With clear and full attribution to AMDG Group; Without any alteration to the original content; And not for commercial resale, duplication, or public broadcast without permission."),
            (4, "Trademarks & Branding", "The names, logos, slogans, brand identity, and visual elements (such as 'Deliver Excellence', 'Foster Innovation', and 'Empower Growth') used within this brochure and other AMDG publications are trademarks or registered trademarks of AMDG Group. Use of these marks without prior written consent is strictly forbidden."),
            (5, "Third-Party Rights", "If any third-party content is used or referenced within AMDG materials, such use is with proper attribution and does not imply any endorsement. All rights of the respective owners are acknowledged."),
            (6, "Confidentiality", "All proprietary information shared within AMDG Group’s documents is confidential and intended for designated readers. Any unauthorized sharing, dissemination, or commercial use of this information is a breach of our confidentiality terms."),
            (7, "Reporting Violations", "To report any copyright or intellectual property violations related to AMDG Group content, please contact: Legal Affairs Team, AMDG GROUP OF COMPANIES, Email: amdg.hub@gmail.com, Phone: +91 62822 68453."),
        ]
        for sec_num, title, content in copyright_clauses:
            LegalSection.objects.create(
                doc_type="copyright",
                section_number=sec_num,
                title=title,
                content=content
            )

        # Terms and Conditions (1 to 12)
        terms_clauses = [
            (1, "Introduction", "By accessing or engaging with AMDG Group’s services, platforms, or communications—including printed brochures, digital content, or company offerings—you agree to be bound by the following Terms and Conditions. Please read them carefully."),
            (2, "Services Provided", "AMDG Group provides a range of services and solutions in the fields of media, innovation, digital design, consulting, and community development. All services are delivered with a commitment to integrity, excellence, and social impact."),
            (3, "Intellectual Property", "All materials produced by AMDG Group, including but not limited to text, graphics, branding elements, and digital media, are the intellectual property of AMDG Group. You may not use, copy, reproduce, modify, distribute, or publish any content without prior written permission."),
            (4, "User Responsibilities", "Users and clients engaging with AMDG Group: Must provide accurate and truthful information when requested; Are responsible for maintaining the confidentiality of any non-public information shared; Must not misuse or misrepresent AMDG Group’s name, brand, or services."),
            (5, "Confidentiality", "AMDG Group maintains strict confidentiality regarding all client projects, communications, and proprietary information. Likewise, clients and partners are expected to treat shared information with the same level of confidentiality."),
            (6, "Code of Conduct", "AMDG Group operates under a strong ethical framework: We uphold transparency, inclusivity, and sustainability. All stakeholders are expected to act with mutual respect and professionalism. Harassment, discrimination, or unethical conduct will not be tolerated."),
            (7, "Payment & Contracts", "All services rendered by AMDG Group must be supported by written agreement or proposal. Payment terms, cancellation policies, and delivery timelines are defined in individual project agreements. Late payments may incur interest or result in service suspension."),
            (8, "Liability Disclaimer", "AMDG Group is not liable for: Any indirect, incidental, or consequential damages arising from the use of its services; Errors caused by third-party vendors, platforms, or systems beyond AMDG’s control."),
            (9, "Termination of Service", "AMDG Group reserves the right to terminate any service or client relationship if: There is a breach of agreement or ethical code; Misuse of intellectual property is identified; Or behavior is deemed detrimental to AMDG Group’s vision and values."),
            (10, "Amendments", "These Terms and Conditions may be updated periodically. Clients and users are encouraged to review them regularly. Continued use of our services implies acceptance of the latest version."),
            (11, "Governing Law", "These Terms shall be governed by the laws of India, with jurisdiction in the State of Kerala."),
            (12, "Contact Information", "For inquiries or concerns related to these Terms and Conditions, please contact: Legal & Compliance Department, AMDG GROUP OF COMPANIES, Phone: +91 62822 68453, Email: groupamdg.india@gmail.com.")
        ]
        for sec_num, title, content in terms_clauses:
            LegalSection.objects.create(
                doc_type="terms",
                section_number=sec_num,
                title=title,
                content=content
            )

        # Privacy Policy
        LegalSection.objects.create(
            doc_type="privacy",
            section_number=1,
            title="Privacy Commitment",
            content="AMDG GROUP OF COMPANIES respects the privacy of our website visitors and clients. We collect only necessary contact and order details required to fulfill your inquiries and WhatsApp orders. We do not sell or disclose your personal data to third parties without your explicit consent."
        )
        self.stdout.write(" - Legal sections saved.")

        self.stdout.write(self.style.SUCCESS("All AMDG GROUP Ltd data seeded successfully!"))
