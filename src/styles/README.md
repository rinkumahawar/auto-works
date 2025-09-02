# Typography System

This directory contains the complete typography system for the Auto-Works project, based on Figma design specifications.

## 📁 Files

- `typography.ts` - TypeScript typography system with all variants and utilities
- `typography.css` - CSS classes and Google Fonts imports
- `README.md` - This documentation file

## 🎨 Font Families

### Primary Fonts
- **Poppins** - Used for headings, navigation, titles, and medium body text
- **Inter** - Used for body text, buttons, and utility text

### Fallback Fonts
- `-apple-system` (macOS)
- `BlinkMacSystemFont` (macOS)
- `'Segoe UI'` (Windows)
- `Roboto` (Android/Linux)
- `sans-serif` (Generic fallback)

## 🎯 Typography Variants

### Headings

#### Hero Heading (H1)
- **Font:** Poppins
- **Weight:** 700 (Bold)
- **Size:** 64px
- **Line Height:** 76px
- **Color:** #FFFFFF (White)
- **Usage:** Main page titles, hero sections

#### Section Headings (H2/H3)
- **Font:** Poppins
- **Weight:** 700 (Bold)
- **Size:** 35px
- **Line Height:** 52px
- **Color:** #000000 (Black)
- **Usage:** Section titles, page headings

### Body Text

#### Paragraph (Light)
- **Font:** Inter
- **Weight:** 300 (Light)
- **Size:** 16px
- **Line Height:** 19px
- **Color:** #FFFFFF or #000000 (context-dependent)
- **Usage:** General body text, descriptions

#### Paragraph (Medium)
- **Font:** Poppins
- **Weight:** 300 (Light)
- **Size:** 20px
- **Line Height:** 30px
- **Color:** #000000 (Black)
- **Usage:** Larger body text, emphasis

### Interactive Elements

#### Button Label
- **Font:** Inter
- **Weight:** 700 (Bold)
- **Size:** 14px
- **Line Height:** 17px
- **Color:** #FFFFFF (White)
- **Usage:** Button text, call-to-action labels

#### Navigation Items
- **Font:** Poppins
- **Weight:** 400 (Regular)
- **Size:** 12px
- **Line Height:** 18px
- **Color:** #0C0C0C (Dark Gray)
- **Usage:** Navigation menu items

#### Location/Dropdown Text
- **Font:** Poppins
- **Weight:** 400 (Regular)
- **Size:** 13px
- **Line Height:** 20px
- **Color:** #0C0C0C (Dark Gray)
- **Usage:** Location selectors, dropdown menus

### Callouts

#### Subhead
- **Font:** Inter
- **Weight:** 700 (Bold)
- **Size:** 24px
- **Line Height:** 29px
- **Color:** #000000 (Black)
- **Usage:** Subheadings, callout text

#### Subhead Large
- **Font:** Inter
- **Weight:** 700 (Bold)
- **Size:** 25px
- **Line Height:** 30px
- **Color:** #000000 (Black)
- **Usage:** Larger subheadings, emphasis

## 🚀 Usage

### 1. Import the Typography System

```typescript
import { typography, typographyStyles } from '@/styles/typography';
```

### 2. Use Typography Variants

```typescript
// Direct usage with styles
const heroStyle = typography.variants.hero;

// Pre-defined style objects
const sectionStyle = typographyStyles.sectionHeading;
```

### 3. Use the Typography Component

```tsx
import Typography from '@/components/Typography';

// Basic usage
<Typography variant="hero">
  Welcome to Auto-Works
</Typography>

// With custom color
<Typography variant="bodyLight" color="#000000">
  This text will be black
</Typography>

// With additional classes
<Typography variant="sectionHeading" className="mb-4">
  Our Services
</Typography>
```

### 4. Use CSS Classes

```tsx
// Import the CSS file in your component or global styles
import '@/styles/typography.css';

// Use the utility classes
<h1 className="text-hero">Hero Title</h1>
<h2 className="text-section-heading">Section Title</h2>
<p className="text-body-light">Body text</p>
<button className="text-button-label">Click Me</button>
```

### 5. Dynamic Color Based on Background

```typescript
import { typography } from '@/styles/typography';

// Get body text color based on background
const lightTextStyle = typography.getBodyColor(true);  // White text
const darkTextStyle = typography.getBodyColor(false);  // Black text
```

## 📱 Responsive Typography

The typography system includes responsive variants for key text elements:

### Hero Heading
- **Mobile (≤768px):** 48px / 56px line-height
- **Tablet (769px-1024px):** 56px / 66px line-height
- **Desktop (>1024px):** 64px / 76px line-height

### Section Headings
- **Mobile (≤768px):** 28px / 40px line-height
- **Tablet (769px-1024px):** 32px / 46px line-height
- **Desktop (>1024px):** 35px / 52px line-height

## 🎨 Color System

### Primary Colors
- **White:** #FFFFFF
- **Black:** #000000
- **Dark Gray:** #0C0C0C

### Usage Guidelines
- Use white text on dark backgrounds
- Use black text on light backgrounds
- Dark gray (#0C0C0C) for secondary text elements

## 🔧 Customization

### Adding New Variants

```typescript
// In typography.ts
variants: {
  // ... existing variants
  customVariant: {
    fontFamily: typography.fonts.poppins,
    fontWeight: 600,
    fontSize: '18px',
    lineHeight: '24px',
    color: '#333333',
  },
}
```

### Modifying Existing Variants

```typescript
// Override specific properties
const customHero = {
  ...typography.variants.hero,
  color: '#FF0000', // Custom red color
  fontSize: '72px', // Larger size
};
```

## 📋 Best Practices

1. **Consistency:** Always use the defined typography variants
2. **Hierarchy:** Maintain clear visual hierarchy with appropriate heading levels
3. **Accessibility:** Ensure sufficient contrast ratios between text and background
4. **Responsiveness:** Use responsive typography for mobile-first design
5. **Performance:** Google Fonts are loaded with `display=swap` for better performance

## 🧪 Testing

Use the `TypographyShowcase` component to visualize all typography variants:

```tsx
import { TypographyShowcase } from '@/components/Typography';

// In your page or component
<TypographyShowcase />
```

This will display all typography variants with examples and usage patterns.
