# AURA SEA Maritime Crewing Website - Design Guidelines

## Design Approach
**Reference-Based with Custom Brand Identity**: Drawing inspiration from modern maritime/tech brands while establishing a unique "Fresh Vision" glassmorphism aesthetic that positions AURA SEA as a technology-forward crewing company.

---

## Core Design Principles

### 1. Glassmorphism Aesthetic
- **Primary Design Pattern**: Large frosted glass panels with blur effects, transparency, and light borders
- **Visual Metaphor**: Semi-transparent "cards" or "stickers" floating above water gradient backgrounds
- **Implementation**: Content sections housed in glassmorphic containers with backdrop-filter blur, 60-80% opacity backgrounds, and subtle 1px light borders

### 2. Maritime Gradient Background System
- **Base Gradient**: Light blue (top) transitioning to deeper blue/turquoise (bottom), mimicking calm water meeting sky horizon
- **Hero Accent**: Large gradient circle (blue-violet to blue-cyan) positioned behind main glass cards
- **Application**: Full viewport background gradients with glass cards layered on top

### 3. Animation Philosophy
- **Subtle & Professional**: Lightweight CSS/vanilla JS animations only
- **Hero Elements**: 
  - Minimalistic ship icons that gently float/drift horizontally in background
  - Slow-moving or glowing gradient circle animation
- **Scroll Interactions**: Sections fade/slide in using Intersection Observer
- **Button Hovers**: Slight growth (scale 1.05) with soft glow or gradient border

---

## Typography System

### Font Families
- **Headlines**: Strong, clean sans-serif (bold, uppercase for H1/H2)
- **Body Text**: Highly readable medium-weight sans-serif
- **Recommended**: Google Fonts - Montserrat (headlines), Inter or Open Sans (body)

### Hierarchy
- **H1**: Hero tagline - "CREWING WITH CARE" (48-72px, bold, uppercase)
- **H2**: Section titles (32-48px, bold)
- **H3**: Subsection headings (24-32px, semi-bold)
- **Body**: 16-18px, medium weight, line-height 1.6

---

## Color Palette

### Primary Colors
- **Navy Blue**: Dark anchor color for text and strong accents
- **Royal Blue**: Mid-tone for interactive elements
- **Cyan/Turquoise**: Lighter accent for highlights

### Accent Gradients
- **Primary Gradient**: Blue-violet to blue-pink (hero circle, CTAs, key elements)
- **Background Gradient**: Light blue (#E3F2FD) to deeper blue/turquoise (#4FC3F7)

### Neutrals
- **White**: Primary text on dark backgrounds, glass card highlights
- **Light Gray/White Tints**: For secondary text and borders on glass elements

---

## Layout System

### Spacing Primitives (Tailwind Units)
- **Primary Scale**: 4, 8, 12, 16, 24, 32, 48, 64 units
- **Section Padding**: py-16 to py-24 (desktop), py-12 (mobile)
- **Card Padding**: p-8 to p-12
- **Element Gaps**: gap-6 to gap-12 for grids

### Grid Strategy
- **Hero Section**: Centered single column with glass card, max-width 1200px
- **Feature Sections**: 3-column grid (desktop), 2-column (tablet), 1-column (mobile)
- **Experience/Numbers**: 3-4 column blocks with counters in glass cards
- **Vacancies**: 2-3 column grid for job cards

---

## Component Library

### Navigation Header
- **Layout**: Logo left, nav links center-right, "Contact Us" CTA button far right
- **Background**: Slightly transparent glass effect with backdrop blur
- **Links**: Clean, spaced navigation with hover underline or glow
- **Mobile**: Hamburger menu with slide-in glass panel

### Glassmorphic Cards
- **Structure**: Rounded corners (16-24px radius), soft drop shadows
- **Background**: 60-80% opacity white/light blue with backdrop-filter blur
- **Border**: 1px solid rgba(255,255,255,0.3)
- **Hover State**: Subtle lift (translateY -4px) with increased shadow

### Call-to-Action Buttons
- **Primary**: Gradient background (blue-violet to blue-pink), white text, rounded-full
- **Secondary**: Glass effect with gradient border
- **Hover**: Scale 1.05, soft glow effect (box-shadow with gradient color)
- **States**: No hover/active modifications for buttons on hero images (glass background with blur already applied)

### Forms (Vacancies & Contact)
- **Container**: Glass card with increased blur
- **Inputs**: Light glass effect, 1px border, rounded corners, focus state with gradient glow
- **Labels**: Above inputs, clear hierarchy
- **Submit Button**: Primary gradient CTA style
- **Success Message**: Inline glass card with check icon and "Thank you for your submission"
- **GDPR Checkbox**: Small text with link to Privacy Policy

### Vacancy Cards
- **Structure**: Glass card with position title, vessel type, salary range, contract length
- **Visual Hierarchy**: Bold title, lighter descriptive text, prominent "Apply" button
- **Layout**: Consistent height, image placeholder or icon at top

### Animated Elements
- **Floating Ships**: 3-5 minimalistic ship icons in hero area, subtle horizontal drift animation (10-15s duration)
- **Gradient Circle**: Slow pulsing glow or gentle rotation/movement (20-30s duration)
- **Scroll Reveals**: FadeIn + SlideUp (20-30px) on section entry

---

## Page-Specific Layouts

### Home Page Structure
1. **Hero**: Full-viewport glass card with tagline, dual CTAs, animated background
2. **Fresh Vision**: 3-column glass cards explaining concept
3. **Ship-Owners Benefits**: Icon + text blocks in glass cards
4. **Seafarers Benefits**: Similar layout with supportive tone
5. **Experience Numbers**: Animated counter blocks (10+ years, 500+ seafarers, tanker/bulk specialization)
6. **CTA Strip**: Centered glass banner with contact button

### Multi-Page Consistency
- **About**: Timeline/vertical steps showing evolution, leadership blocks in glass cards
- **For Ship-Owners**: Process overview (5-step horizontal cards), compliance section, benefits grid
- **For Seafarers**: Career path visualization, process steps, highlighted note in glass banner
- **Vacancies**: Job cards grid, application form popup/section
- **Contacts**: Split layout - form (left) + contact details (right), map placeholder

---

## Images Strategy

### Hero Section
- **NO large background image**: Use gradient background with glass cards and animated elements instead
- **Ship Icons**: Simple, minimalistic vector icons (not photographs)

### Supporting Imagery
- **Placeholder Icons**: For benefits, process steps, features (use Font Awesome or Heroicons)
- **Team Section**: Placeholder avatar circles in About page
- **Map**: Static placeholder or simple frame in Contacts page

---

## Responsive Behavior

### Breakpoints
- **Mobile**: <768px - Single column, stacked elements, reduced padding
- **Tablet**: 768-1024px - 2-column grids, maintained glass effects
- **Desktop**: >1024px - Full multi-column layouts, enhanced animations

### Mobile Adaptations
- Hero glass card fills 90% viewport width with reduced padding
- Navigation collapses to hamburger menu
- Form inputs stack vertically with full width
- Animated ships reduce in number or pause animation for performance

---

## Accessibility & SEO Integration

### Accessibility
- High contrast text on glass backgrounds (ensure WCAG AA compliance)
- Focus states with visible gradient borders on all interactive elements
- Semantic HTML structure with proper heading hierarchy
- Alt text for all decorative ship icons and imagery

### SEO Elements
- Unique meta titles/descriptions per page with maritime keywords
- JSON-LD structured data (Organization, JobPosting schemas)
- Semantic heading structure maintained across all pages
- Clear visual hierarchy supporting content scanability

---

## Footer Design
- **Layout**: Multi-column glass card (company info, links, social, legal)
- **Background**: Slightly darker glass effect than page sections
- **Content**: Contact details, Privacy Policy link, experience highlights, social media icon placeholders
- **Spacing**: Generous padding (py-12 to py-16)