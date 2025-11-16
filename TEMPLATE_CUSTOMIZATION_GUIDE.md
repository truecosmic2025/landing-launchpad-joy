# Landing Page Template - Customization Guide

This template is designed for quick reuse. Simply update the sales copy and images - all design, animations, and styling will remain intact.

## 📝 Content Sections to Customize

### Hero Section
**File:** `src/components/Hero.tsx`
- Main headline
- Subheadline
- CTA button text
- Hero background image reference

### Problem Section
**File:** `src/components/ProblemSection.tsx`
- "Is this you?" problem statements (4 items)
- "What changes here" solution statements (4 items)
- CTA button text

### Method Section
**File:** `src/components/MethodSection.tsx`
- Section headline
- Method description text
- Three method cards (title + description each)

### Coach Section
**File:** `src/components/CoachSection.tsx`
- Coach name
- Coach bio paragraphs
- Coach credentials/experience
- Coach image reference

### Consultation Section
**File:** `src/components/ConsultSection.tsx`
- Section headline
- Consultation steps (5 items with titles and descriptions)
- Urgency messaging ("Only X spots left")
- CTA button text

### Micro Steps Section
**File:** `src/components/MicroStepsSection.tsx`
- Section headline
- Three technique cards (title + step description each)

### Use Cases Section
**File:** `src/components/UseCasesSection.tsx`
- Section headline
- Use case cards (title + description + image for each)

### Testimonials Section
**File:** `src/components/TestimonialsSection.tsx`
- Section headline
- Testimonial cards (quote + name + title + avatar for each)

### Difference Section
**File:** `src/components/DifferenceSection.tsx`
- Section headline
- Three difference cards (title + description each)
- CTA button text

### Inner Conversations Section
**File:** `src/components/InnerConversationsSection.tsx`
- Section headline
- Section description
- Three characteristic cards (title + description each)
- Feature image reference
- CTA button text

### FAQ Section
**File:** `src/components/FAQSection.tsx`
- Section headline
- FAQ items (question + answer pairs)

### Booking Section
**File:** `src/components/BookingSection.tsx`
- Booking widget/calendar integration
- Booking instructions

### CTA Section (Final)
**File:** `src/components/CTASection.tsx`
- Final headline
- Final pitch text
- Urgency messaging
- Countdown timer settings
- CTA button text
- Disclaimer text

### Back to Top
**File:** `src/components/BackToTop.tsx`
- No customization needed (automatic behavior)

---

## 🖼️ Images to Replace

All images are located in `src/assets/`:

1. **hero-background.jpg** - Hero section background
2. **cheryl-coach.jpeg** - Coach profile photo
3. **inner-peace.jpg** - Inner conversations section image
4. **method-illustration.jpg** - Method section illustration
5. **use-case-career.jpg** - Use cases section image
6. **testimonial-avatar-1.jpg** - First testimonial avatar
7. **testimonial-avatar-2.jpg** - Second testimonial avatar
8. **testimonial-avatar-3.jpg** - Third testimonial avatar

**To replace images:**
- Keep the same filenames for automatic reference
- OR update the import statements in the component files

---

## 🎨 Design System (DO NOT MODIFY)

These files control the entire design system - fonts, colors, animations, spacing. **Leave these unchanged** to maintain the template's look and feel:

### Style Configuration
**File:** `src/index.css`
- CSS variables for colors (HSL format)
- Typography settings
- Animation keyframes
- Global styles

**File:** `tailwind.config.ts`
- Tailwind theme extensions
- Color palette mapping
- Font families
- Animation utilities

### UI Components
**Folder:** `src/components/ui/`
- Pre-styled component library (buttons, cards, accordions, etc.)
- Do not modify unless you want to change the entire design system

---

## 🔄 Quick Start Workflow

1. **Remix this project** (create a copy)
2. **Update text content** in each component file listed above
3. **Replace images** in `src/assets/` folder
4. **Test the page** - all styling/animations remain intact
5. **Deploy** when ready

---

## ⚡ Countdown Timer

**File:** `src/components/CountdownTimer.tsx`

The countdown timer can be customized with:
- Target date/time
- Urgent styling (red vs normal)
- Display format

---

## 📋 Page Structure

**File:** `src/pages/Index.tsx`

This file controls the order of sections on the landing page. Current order:
1. Hero
2. Problem Section
3. Method Section
4. Coach Section
5. Consultation Section
6. Micro Steps Section
7. Use Cases Section
8. Testimonials Section
9. Difference Section
10. Inner Conversations Section
11. FAQ Section
12. Booking Section
13. CTA Section
14. Back to Top

To reorder sections, simply rearrange the component order in this file.

---

## 🎯 Tips for Best Results

- **Keep headlines punchy** - Short, benefit-driven headlines work best
- **Use social proof** - Update testimonials with real feedback
- **Maintain urgency** - Update countdown timers and "spots left" messaging
- **Professional images** - Use high-quality images that match your brand
- **Consistent tone** - Keep the same conversational, supportive tone throughout
- **Test CTAs** - Make sure all "Book" buttons scroll to the booking section

---

## 🚀 Ready to Customize?

Start with the Hero section, work your way down, and you'll have a new landing page ready in minutes!
