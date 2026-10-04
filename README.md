# AMDG GROUP Ltd — Full-Stack Web Application

A full-stack re-implementation of the **AMDG GROUP Ltd** web presence built from scratch using **Python Django (Django REST Framework)** on the backend and **React (Vite + Tailwind CSS)** on the frontend, delivering all original features, text, structure, and media in modern, high-performance working condition.

---

## 🌟 Pages & Features

1. **Home (`/` or `/view/amdggroup/home`)**
   - Biblical motto banner: *“Commit to the Lord whatever you do, and he will establish your plans.” (Proverbs 16:3)*
   - Dynamic real-time visitor counters: **10K+ Customer Visits** and **67 People Visited Today**.
   - Services highlights:
     - **Go To Shopping Site** (JOY MART opened, friendly budget) -> links to `/memory-moulds`.
     - **Digital Works** (Printings, Flex, Banners, Notices with doorstep delivery) -> links to `/designs`.
     - **Editings** (Photo, Video, Music with REFER CODE discounts) -> links to `/amdg-media-designs`.
   - Team spotlight: **Mr. Ajin Shibu** (Founder & CEO) & **Mr. Jismon Varkey** (Media Editor).
   - Location & Review: **AMDG Digital Media**, Koodaranji, Calicut, Kerala (`★★★★★ · Media company`) with Google Reviews integration and map preview.

2. **Founder & MD (`/founder-md`)**
   - Complete executive biography of **Ajin Shibu** (Founder & Director, AMDG Group) highlighting his entrepreneurial vision, social work commitment, and company motto *"Creating Creativity"*.
   - Direct social badges: Instagram, LinkedIn, WhatsApp (`+91 85905 27277`), Facebook, X (Twitter).

3. **What We Do (`/what-we-do`)**
   - Complete 15-item starred service matrix:
     ★ Brand Identity & Logo Design
     ★ Graphic Design & Creative Content
     ★ Website Design & Development
     ★ Social Media Management
     ★ Digital Marketing
     ★ Photography & Videography
     ★ Printing & Promotional Materials
     ★ Business Registration & Documentation Assistance
     ★ Online Application Services
     ★ Content Creation & Media Production
     ★ Event Branding & Publicity
     ★ Corporate Profile Design
     ★ Presentation Design
     ★ Business Consultancy
     ★ Technology & Digital Solutions
   - Direct WhatsApp quotation triggers on each service.

4. **AMDG Media & Designs (`/amdg-media-designs`)**
   - Featured service hubs: Graphic Design Services, Editing Productions, Ads & Marketing, and JOY Mart Online Shoppie.
   - Dedicated sections for Art & Craft Boutique and Photo / Video / Music Editings.

5. **Designs (`/designs` or `/amdg-media-designs/designs`)**
   - 8 specialized design offerings: Advertising & Marketing, Graphic Designs, Website Creation, Social Media Posters, Advertisements, LOGO Making Service, Ads & Marketing, Content Creation.
   - Doorstep delivery notice for flex, banners, and notices.

6. **Memory Moulds — JOY MART Online Shopping (`/memory-moulds`)**
   - Notice: 7 Days Delivery, Toll-free contact (+91 62822 68453), 2204+ Successful Deliveries.
   - Categorized catalog:
     - **Hampers**: Men's Wallet Hamper (All in One), Men's Hamper Wallet, Men's Black Combo (13 in 1), Gifting Wallet.
     - **Key Chains**: Calendar Keychain, Couple Keychain.
     - **Wallets & Bags**: Customized Men's Wallet, Men's Wallet, Ladies Wallet, Ladies Hand Bag, Customized Wallet, Customized Ladies Hand Bag.
   - 1-click **Instant WhatsApp Checkout** to `+91 62821 19419` with prefilled product message and custom on-site inquiry modal.

7. **More (`/more`)**
   - **Privacy Policy**: Data protection and ethical handling commitments.
   - **Copyright Terms**: 12 numbered clauses governing ownership, copyright protection under Indian law, use of content, and Legal Affairs Team contact (`amdg.hub@gmail.com`).
   - **Terms & Conditions**: 12 clauses (Effective 20 June 2025) under Kerala jurisdiction.

---

## 🛠️ Project Structure

```
AMDG GROUPS/
├── backend/
│   ├── amdg_backend/            # Django project settings & URLs
│   ├── core_api/                # API app
│   │   ├── models.py            # SiteConfig, VisitorStat, TeamMember, ServiceItem, Product, LegalSection, Inquiry
│   │   ├── serializers.py       # DRF Serializers
│   │   ├── views.py             # ViewSets, Visitor Tracker, and Global Search API
│   │   ├── urls.py              # REST routing
│   │   └── management/commands/
│   │       └── seed_amdg_data.py # Automated data seeder with 100% authentic content
│   ├── venv/                    # Python virtual environment
│   └── requirements.txt
│
└── frontend/
    ├── public/                  # Brand SVG logo, product & team images
    ├── src/
    │   ├── api.js               # Centralized REST connector
    │   ├── components/
    │   │   ├── Navbar.jsx       # Brand header, dropdowns, search trigger, mobile drawer
    │   │   ├── Footer.jsx       # Full footer with quick links, contacts & copyright 2026
    │   │   ├── SearchModal.jsx  # Live instant site search
    │   │   ├── OrderModal.jsx   # Product checkout & on-site order form
    │   │   └── FloatingWhatsApp.jsx # Floating WhatsApp support action
    │   ├── pages/               # 7 complete pages
    │   ├── App.jsx              # Routing & global layout
    │   └── index.css            # Tailwind styles & theme typography
    └── package.json
```

---

## 🚀 Running the Project in Visual Studio Code

### Method 1: One-Click Run via VS Code Tasks (Recommended)
This workspace is already pre-configured with `.vscode/tasks.json` and `.vscode/launch.json`.
1. Open the project folder in VS Code:
   - Go to **File** → **Open Folder...** → Select `D:\AMDG GROUPS`.
2. Press `Ctrl + Shift + B` (or menu **Terminal** → **Run Build Task...**).
3. Select **Start Fullstack (Django + React)**:
   - This concurrently launches both the Django backend server and the Vite dev server in separate dedicated terminal tabs.
4. Open your browser:
   - Public Website: **[http://127.0.0.1:5173/](http://127.0.0.1:5173/)**
   - Formal Admin Portal: **[http://127.0.0.1:5173/admin](http://127.0.0.1:5173/admin)**
   - Django Admin Console: **[http://127.0.0.1:8000/admin/](http://127.0.0.1:8000/admin/)** (`admin` / `admin123`)

---

### Method 2: Integrated Terminal (Step-by-Step)
You can run both servers manually in split VS Code terminals:

#### Step 1: Open VS Code Terminal
- Press `Ctrl + \`` (or menu **Terminal** → **New Terminal**).

#### Step 2: Start Django Backend (Terminal 1)
```powershell
cd "d:\AMDG GROUPS\backend"
.\venv\Scripts\activate
python manage.py runserver 127.0.0.1:8000
```
- API Base: `http://127.0.0.1:8000/api/`
- Django Admin: `http://127.0.0.1:8000/admin/` (Login: `admin` / `admin123`)

#### Step 3: Start Vite Frontend (Terminal 2)
- Click the **Split Terminal** icon (`Ctrl + Shift + 5` or `\`) or open a new terminal tab (`+`).
```powershell
cd "d:\AMDG GROUPS\frontend"
npm run dev
```
- Web Application: `http://127.0.0.1:5173/`
- Admin Dashboard: `http://127.0.0.1:5173/admin`

---

### Method 3: Debug with F5
- Press `F5` or switch to the **Run and Debug** tab (`Ctrl + Shift + D`) and select **Django: Backend Server**.
- Set breakpoints in Python views/models for step-by-step debugging.

---

### Production Build
```powershell
cd "d:\AMDG GROUPS\frontend"
npm run build
```
Build output is saved to `frontend/dist/`.
