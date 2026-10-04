import os
from PIL import Image, ImageDraw, ImageFont

dest_base = r"d:\AMDG GROUPS\frontend\public\images"
os.makedirs(os.path.join(dest_base, "products"), exist_ok=True)
os.makedirs(os.path.join(dest_base, "services"), exist_ok=True)
os.makedirs(os.path.join(dest_base, "team"), exist_ok=True)

# Generate stylized crisp card images
def create_styled_image(path, title, subtitle, bg_color1, bg_color2, icon_type="box"):
    width, height = 600, 450
    im = Image.new("RGB", (width, height), bg_color1)
    draw = ImageDraw.Draw(im)
    
    # Draw subtle gradient / pattern
    for y in range(height):
        ratio = y / height
        r = int(bg_color1[0] * (1 - ratio) + bg_color2[0] * ratio)
        g = int(bg_color1[1] * (1 - ratio) + bg_color2[1] * ratio)
        b = int(bg_color1[2] * (1 - ratio) + bg_color2[2] * ratio)
        draw.line([(0, y), (width, y)], fill=(r, g, b))
        
    # Draw geometric inner accent card
    draw.rounded_rectangle([30, 30, width - 30, height - 30], radius=16, outline=(255, 255, 255, 80), width=2)
    
    # Decorative motif
    draw.rounded_rectangle([width//2 - 60, height//2 - 90, width//2 + 60, height//2 + 30], radius=20, fill=(255, 255, 255, 30))
    draw.ellipse([width//2 - 30, height//2 - 60, width//2 + 30, height//2], fill=(255, 255, 255, 50))
    
    # Fallback default font
    try:
        font_title = ImageFont.truetype("arial.ttf", 26)
        font_sub = ImageFont.truetype("arial.ttf", 18)
        font_brand = ImageFont.truetype("arial.ttf", 14)
    except:
        font_title = ImageFont.load_default()
        font_sub = ImageFont.load_default()
        font_brand = ImageFont.load_default()

    # Draw texts centered
    draw.text((width//2, height - 100), title, fill=(255, 255, 255), anchor="mm", font=font_title)
    draw.text((width//2, height - 65), subtitle, fill=(240, 240, 240), anchor="mm", font=font_sub)
    draw.text((width//2, 60), "AMDG GROUP LTD • CREATIVE PRODUCTION", fill=(220, 220, 220), anchor="mm", font=font_brand)
    
    im.save(path, quality=92)
    print(f"Created: {path}")

# Product images
products = [
    ("mens_wallet_hamper.jpg", "Men's Wallet Hamper", "All In One Luxury Gift Set", (30, 58, 138), (15, 23, 42)),
    ("mens_hamper_wallet.jpg", "Men's Hamper Wallet", "Deluxe Edition Gift Box", (24, 43, 73), (12, 74, 110)),
    ("mens_black_combo.jpg", "Men's Black Combo", "13 in 1 Premium Utilities", (17, 24, 39), (55, 65, 81)),
    ("gifting_wallet.jpg", "Gifting Wallet", "Signature Custom Edition", (19, 78, 74), (13, 148, 136)),
    ("calender_keychain.jpg", "Calendar Keychain", "Personalized Memory Stamp", (88, 28, 135), (126, 34, 206)),
    ("couple_keychain.jpg", "Couple Keychain", "Matching Bespoke Set", (159, 18, 57), (225, 29, 72)),
    ("customized_mens_wallet.jpg", "Customized Men's Wallet", "Name & Charm Engraved", (67, 56, 202), (30, 58, 138)),
    ("mens_wallet.jpg", "Men's Wallet", "Classic Leather Bi-Fold", (49, 46, 129), (30, 41, 59)),
    ("ladies_wallet.jpg", "Ladies Wallet", "Designer Clutch Zipper", (136, 19, 55), (190, 24, 93)),
    ("ladies_hand_bag.jpg", "Ladies Hand Bag", "Elegance Daily Shoulder Bag", (124, 45, 18), (180, 83, 9)),
    ("customized_wallet.jpg", "Customized Wallet", "Bespoke Personalized Series", (15, 118, 110), (13, 148, 136)),
    ("customized_ladies_hand_bag.jpg", "Customized Ladies Hand Bag", "Monogram Handcrafted Bag", (112, 26, 117), (162, 28, 175)),
]

for fname, title, sub, c1, c2 in products:
    p = os.path.join(dest_base, "products", fname)
    create_styled_image(p, title, sub, c1, c2)

# Team portraits
team = [
    ("ajin_shibu.jpg", "Mr Ajin Shibu", "Founder & CEO, AMDG Group", (15, 76, 129), (30, 58, 138)),
    ("jismon_varkey.jpg", "Mr Jismon Varkey", "Media Editor, AMDG Media", (31, 41, 55), (75, 85, 99)),
]

for fname, title, sub, c1, c2 in team:
    p = os.path.join(dest_base, "team", fname)
    create_styled_image(p, title, sub, c1, c2)

# Service features
services = [
    ("shopping_joymart.jpg", "JOY MART", "Online Shopping at your Fingertips", (2, 132, 199), (14, 116, 144)),
    ("digital_works.jpg", "Digital Works", "Printing, Flex, Banners & Notices", (37, 99, 235), (29, 78, 216)),
    ("editings.jpg", "Media Productions", "Photo, Video & Music Editings", (124, 58, 237), (109, 40, 217)),
    ("what_we_do_hero.jpg", "Comprehensive Media Solutions", "End-to-End Creative Services", (30, 41, 59), (15, 23, 42)),
]

for fname, title, sub, c1, c2 in services:
    p = os.path.join(dest_base, "services", fname)
    create_styled_image(p, title, sub, c1, c2)

print("All visual assets generated successfully!")
