# Design Guidelines: ICF Louisiana Mosque Website

## Design Approach: Refined Community Hub
**Foundation:** Enhance existing structure with modern polish, purposeful animations, and improved visual hierarchy while maintaining the warm, welcoming feel appropriate for a community religious center.

## Core Design Principles
- **First Paint Priority:** Immediate visual impact with smooth entrance animations
- **Respectful Enhancement:** Modern aesthetics that honor the sacred nature of the space
- **Community Focus:** Highlight prayer times and accessibility prominently
- **Trust Building:** Professional polish to encourage donations and engagement

## Typography System
- **Headings:** Inter or Poppins (600-700 weight) for section titles
- **Body:** Inter (400-500 weight) for content and prayer times
- **Arabic Text:** Use Amiri or Scheherazade for any Arabic typography
- **Hierarchy:** Text-4xl/5xl for main headings, text-2xl for section headers, text-base/lg for body

## Layout & Spacing
**Spacing Units:** Consistently use Tailwind spacing of 4, 6, 8, 12, 16, 20, 24 for padding/margins
- Sections: py-16 md:py-24 for vertical rhythm
- Container: max-w-7xl mx-auto px-4 for content containment
- Cards: p-6 md:p-8 for comfortable breathing room

## Component Library

### Hero Section
- Full-width carousel/slideshow using the 3 interior mosque images
- Smooth fade transitions between images (5-6 sec intervals)
- Centered overlay with mosque name and welcoming message
- Gradient overlay (from transparent to dark) for text readability
- Animated fade-in on initial load (mosque name slides up, subtitle fades in)
- Blurred background buttons if CTAs added over images

### Prayer Times Card
- Prominent featured card with subtle gradient background
- Auto-updating times with current prayer highlighted using accent color and subtle pulse animation
- Icon indicators for sunrise (☀️) and maghrib (🌙) as shown
- Grid layout for prayer name + time pairs
- Responsive: stacked on mobile, 2-column on tablet, full grid on desktop
- Shadow elevation: shadow-lg with hover:shadow-xl transition

### Photo Gallery ("Inside Our Masjid")
- Masonry grid layout (2 cols mobile, 3 cols tablet, 4 cols desktop)
- Smooth hover scale effect (scale-105) with overlay fade
- Click to open lightbox modal with full-size images
- Navigation arrows and close button in lightbox
- Lazy loading for performance

### Donation Section
- Two-card layout: Zelle (left) + Stripe (right)
- Card hover effects with subtle lift (hover:-translate-y-2)
- Icons for each payment method
- Clear CTAs with smooth button animations
- Stripe Buy Button embedded seamlessly

### Location Map
- Interactive Google Maps embed with custom marker
- Address card overlay on map corner
- Fade-in animation when section enters viewport
- "Get Directions" CTA button

### Navigation
- Sticky header with blur backdrop (backdrop-blur-md)
- Smooth scroll behavior to sections
- Mobile hamburger menu with slide-in drawer animation
- Logo positioned left, nav links right

## Animation Strategy
**Entry Animations (Framer Motion):**
- Hero: Fade-in + slide-up (stagger children)
- Sections: Fade-in as they enter viewport (intersection observer)
- Cards: Subtle slide-up on scroll reveal

**Micro-interactions:**
- Buttons: Scale on hover (scale-105), pressed state (scale-95)
- Cards: Lift on hover with shadow transition
- Links: Underline slide-in effect
- Prayer times: Current prayer row has gentle pulse animation

**Performance:** Use `will-change: transform` sparingly, prefer CSS transitions for simple effects, Framer Motion for complex sequences

## Visual Effects
- Backdrop blur for overlays (backdrop-blur-md)
- Gradient overlays on hero images (from-transparent via-black/50 to-black/70)
- Box shadows with color-matched tints
- Smooth color transitions on interactive elements (duration-300)

## Images
**Hero Carousel:** Use the 3 existing interior mosque images in rotation with smooth crossfade transitions. Images should span full viewport width with 60-70vh height on desktop, 50vh on mobile.

**Gallery:** Maintain existing interior photos in optimized grid. Add subtle border-radius (rounded-lg) for modern feel.

## Responsive Behavior
- Mobile-first approach
- Prayer times: Stack vertically on mobile, grid on tablet+
- Donation cards: Stack on mobile, side-by-side on desktop
- Navigation: Hamburger menu below md breakpoint
- Gallery: 1-2-3-4 column progression across breakpoints

## Accessibility
- Maintain ARIA labels on interactive elements
- Focus states with visible outlines (ring-2 ring-offset-2)
- Sufficient color contrast for text over images
- Keyboard navigation for all interactive components