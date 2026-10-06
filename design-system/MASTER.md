# BALAJI PURE VEG — Design System & Visual Specification

**Location:** Kharadi–Hadapsar Bypass Road, Kharadi, Pune, Maharashtra 411014  
**Brand Essence:** Everyday Pure Vegetarian • Modern Casual Dining • Broad Multi-Cuisine • Kharadi Local Presence  
**Visual Identity:** Crisp White Storefront + Signature Balaji Vivid Green Signage + Dark Interior Contrast + Black/White Pattern Accents

---

## 1. Brand Philosophy & Positioning
Balaji Pure Veg is an authentic, local, family-friendly pure vegetarian destination serving Kharadi from 9:00 AM breakfast to 11:30 PM dinner. The digital experience translates the real-world recognizable storefront—vivid green signage over clean white architectural lines with black-and-white patterned interior flooring—into a fresh, appetizing, modern casual dining web interface.

**Visual Guardrails:**
- **Avoid:** Luxury fine-dining dark/gold tropes, dark maroon palettes, generic saffron iconography, startup cafe minimalism, or crowded marketplace layouts.
- **Embrace:** Freshness, cleanliness, vibrant food photography, recognizable green brand anchors, clear pricing, and rapid local utility (Click-to-Call, Get Directions, WhatsApp, Menu search).

---

## 2. Color System & Ratios

### Core Color Palette
| Token Name | Hex Code | Purpose / Usage | Hierarchy Ratio |
|---|---|---|---|
| `brand-white` | `#FFFFFF` | Primary card backgrounds, clean containers, storefront base | 40% |
| `brand-off-white` | `#F8FAF5` | Background canvas, soft warmth, subtle page rhythm | 15% |
| `brand-charcoal` | `#171917` | High-contrast footer, deep banners, primary text headings | 15% |
| `brand-soft-black`| `#0D0F0D` | Dark contrast elements, interior floor motif accents | 5% |
| `brand-green` | `#27A844` | **Primary Brand Color**: Logo, CTA buttons, active tabs, veg icon | 15% |
| `brand-green-deep`| `#147331` | Hover states, hero highlights, North Indian card accents | 6% |
| `brand-green-forest`| `#0F5127` | Deep contrast text on light green, bold accents | 2% |
| `brand-green-light`| `#EAF6EA` | Badge backgrounds, tag pills, active category nav backdrops | 5% |
| `brand-green-muted`| `#6E9D72` | Secondary borders, muted metadata icons, subtle lines | 1% |
| `brand-gold` | `#D4A63C` | Subtle rating star fill, rare signature badge dot (never overused)| 1% |

**Color Distribution Ratio Rule:**
- 55% White / Warm Off-white
- 20% Charcoal / Black
- 15% Primary Balaji Green (#27A844)
- 6% Deep Green (#147331)
- 3% Light Green (#EAF6EA)
- 1% Accent Gold (#D4A63C)

---

## 3. Typography Hierarchy

### Font Families
- **Display Serif:** `DM Serif Display` (Google Font)
  - Usage: Hero display headings, major section titles, standout dish highlights.
  - Weights: Regular 400 (italicized for subtle flair where appropriate).
- **Body & Interface Sans:** `Manrope` (Google Font)
  - Usage: Subheadings, navigation links, menu items, descriptions, prices, buttons, utility bars.
  - Weights: 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold), 800 (Extra-Bold).
- **Devanagari Font (Marathi/Hindi Context):** `Noto Sans Devanagari`
  - Usage: Local Marathi signage ("बालाजी शुध्द शाकाहारी"), authenticity marks.

### Scale & Rhythm
- `Hero Display`: 44px – 56px (Mobile: 32px – 40px), Line Height 1.15, Serif
- `Section H2`: 32px – 40px (Mobile: 26px – 30px), Line Height 1.25, Serif
- `Sub-heading H3`: 20px – 24px, Line Height 1.35, Manrope Semi-Bold
- `Dish Card Title`: 17px – 19px, Line Height 1.3, Manrope Bold
- `Body Regular`: 15px – 16px, Line Height 1.6, Manrope Regular
- `Meta / Price`: 16px – 18px, Line Height 1.2, Manrope Bold
- `Badge / Chip`: 12px – 13px, Line Height 1, Manrope Semi-Bold, Letter Spacing +0.02em

---

## 4. Spacing, Radius & Shadows

### Border Radius
- `sm`: 4px (small chips, veg indicator boxes)
- `md`: 8px (badges, inputs, filter buttons)
- `card`: 12px (dish cards, info strips, reviews)
- `full`: 9999px (floating CTA pills, category scroll chips)

### Shadows
- `shadow-soft`: `0 2px 10px rgba(23, 25, 23, 0.05)` (subtle cards, search box)
- `shadow-card`: `0 4px 20px -2px rgba(23, 25, 23, 0.08)` (menu cards, info panels)
- `shadow-hover`: `0 10px 25px -4px rgba(39, 168, 68, 0.16)` (active button hover)
- `shadow-header`: `0 2px 15px rgba(13, 15, 13, 0.06)` (sticky navigation)
- `shadow-bottom-bar`: `0 -4px 20px rgba(0, 0, 0, 0.12)` (mobile action bar)

---

## 5. Component Specifications

### 1. Logo Treatment
- Authentic representation with vivid green `BALAJI` in bold modern grotesque typeface + `PURE VEG` subtitle in high-contrast charcoal/green with green veg leaf/dot indicator.
- White storefront variant with deep green text, and Dark footer variant with pure white/vivid green text.

### 2. Buttons
- **Primary CTA:**
  - Background: `#27A844`
  - Text: `#FFFFFF`, Manrope Semi-Bold 15px
  - Padding: 12px 24px (Mobile: 12px 20px)
  - Hover: Background `#147331`, `transform: translateY(-2px)`, shadow-hover
- **Secondary CTA:**
  - Background: `#FFFFFF` or `transparent`
  - Border: 1.5px solid `#27A844`
  - Text: `#27A844`
  - Hover: Background `#EAF6EA`, border-color `#147331`, text `#147331`
- **Call-to-Action Icon Buttons:**
  - Minimum touch target: 44px x 44px (WCAG 2.2 AAA standard)

### 3. Pure Veg Symbol
- Standard Indian Vegetarian Symbol (FSSAI standard):
  - Green square border with 1.5px stroke
  - Filled green circle in center (diameter 50% of square)
  - Rendered alongside clear text label "100% PURE VEG" so accessibility does not rely purely on color recognition.

### 4. Menu Cards
- Surface: `#FFFFFF`
- Border: 1px solid rgba(23, 25, 23, 0.07)
- Padding: 16px – 20px
- Radius: 12px (`rounded-card`)
- Layout: Split flex (Image left/top, Content right/bottom with clear price in Indian Rupee format `₹XX` and veg badge)
- Tags: `Guest Favourite`, `Popular Choice`, `Jain Available`

### 5. Sticky Mobile Action Bar
- Always visible on mobile screens (< 768px)
- Fixed at viewport bottom with safe-area inset support
- Quick action tabs:
  1. Call Now (`tel:+919322141408`)
  2. View Menu (scroll to menu or link to `/menu`)
  3. Directions (Google Maps deep link)
  4. WhatsApp / Quick Inquiry

---

## 6. Real Storefront Recognition Details
- **Exterior Recognition:** Kharadi-Hadapsar Bypass Road location next to Durga Mata Mandir.
- **Physical Signage Motif:** Clean white storefront wall, bold green "BALAJI PURE VEG" lettering, green striped canopy motif, clean glass frontage, potted greenery.
- **Interior Motif:** Black-and-white tiled checkerboard or geometric floor pattern, dark charcoal walls, clean stainless steel & warm casual family dining tables.

---

## 7. Accessibility & Performance Checklist
1. **Color Contrast:** All body text maintains minimum 4.5:1 contrast against backgrounds; bold text >18px maintains minimum 3:1.
2. **Accessible Badges:** Every dietary tag uses text in addition to green icons.
3. **Screen Readers:** Semantic `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` markup with aria-labels on icon buttons.
4. **Touch Targets:** No clickable element smaller than 44px x 44px on mobile screens.
5. **Reduced Motion:** Respects `prefers-reduced-motion` for all transitions and transforms.
