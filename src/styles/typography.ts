// Typography System for Auto-Works Project
// Based on Figma design specifications

export const typography = {
  // Font Families
  fonts: {
    poppins: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    inter: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  },

  // Font Weights
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },

  // Colors
  colors: {
    white: '#FFFFFF',
    black: '#000000',
    darkGray: '#0C0C0C',
  },

  // Typography Variants
  variants: {
    // Hero Heading (H1)
    hero: {
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 700,
      fontSize: '64px',
      lineHeight: '76px',
      color: '#FFFFFF',
    },

    // Section Headings (H2/H3)
    sectionHeading: {
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 700,
      fontSize: '35px',
      lineHeight: '52px',
      color: '#000000',
    },

    // Body Text - Paragraph (light)
    bodyLight: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 300,
      fontSize: '16px',
      lineHeight: '19px',
      color: '#FFFFFF', // Can be overridden based on background
    },

    // Body Text - Paragraph (medium)
    bodyMedium: {
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 300,
      fontSize: '20px',
      lineHeight: '30px',
      color: '#000000',
    },

    // Buttons / Small Text
    buttonLabel: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 700,
      fontSize: '14px',
      lineHeight: '17px',
      color: '#FFFFFF',
    },

    // Nav Items / Small Labels
    navItem: {
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 400,
      fontSize: '12px',
      lineHeight: '18px',
      color: '#0C0C0C',
    },

    // Location / Dropdown Text
    locationText: {
      fontFamily: "'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 400,
      fontSize: '13px',
      lineHeight: '20px',
      color: '#0C0C0C',
    },

    // Subhead / Callout
    subhead: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 700,
      fontSize: '24px',
      lineHeight: '29px',
      color: '#000000',
    },

    // Alternative Subhead size (25px)
    subheadLarge: {
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontWeight: 700,
      fontSize: '25px',
      lineHeight: '30px',
      color: '#000000',
    },
  },

  // Utility functions for dynamic color based on background
  getBodyColor: (isDarkBackground: boolean = false) => ({
    ...typography.variants.bodyLight,
    color: isDarkBackground ? '#FFFFFF' : '#000000',
  }),

  // Responsive typography helpers
  responsive: {
    hero: {
      mobile: {
        fontSize: '48px',
        lineHeight: '56px',
      },
      tablet: {
        fontSize: '56px',
        lineHeight: '66px',
      },
      desktop: {
        fontSize: '64px',
        lineHeight: '76px',
      },
    },
    sectionHeading: {
      mobile: {
        fontSize: '28px',
        lineHeight: '40px',
      },
      tablet: {
        fontSize: '32px',
        lineHeight: '46px',
      },
      desktop: {
        fontSize: '35px',
        lineHeight: '52px',
      },
    },
  },
};

// CSS-in-JS style objects for direct use
export const typographyStyles = {
  hero: typography.variants.hero,
  sectionHeading: typography.variants.sectionHeading,
  bodyLight: typography.variants.bodyLight,
  bodyMedium: typography.variants.bodyMedium,
  buttonLabel: typography.variants.buttonLabel,
  navItem: typography.variants.navItem,
  locationText: typography.variants.locationText,
  subhead: typography.variants.subhead,
  subheadLarge: typography.variants.subheadLarge,
};

// Tailwind CSS custom classes (for use in tailwind.config.ts)
export const typographyTailwind = {
  'font-poppins': { fontFamily: typography.fonts.poppins },
  'font-inter': { fontFamily: typography.fonts.inter },
  'text-hero': { 
    fontSize: '64px', 
    lineHeight: '76px', 
    fontWeight: '700',
    fontFamily: typography.fonts.poppins,
  },
  'text-section': { 
    fontSize: '35px', 
    lineHeight: '52px', 
    fontWeight: '700',
    fontFamily: typography.fonts.poppins,
  },
  'text-body-light': { 
    fontSize: '16px', 
    lineHeight: '19px', 
    fontWeight: '300',
    fontFamily: typography.fonts.inter,
  },
  'text-body-medium': { 
    fontSize: '20px', 
    lineHeight: '30px', 
    fontWeight: '300',
    fontFamily: typography.fonts.poppins,
  },
  'text-button': { 
    fontSize: '14px', 
    lineHeight: '17px', 
    fontWeight: '700',
    fontFamily: typography.fonts.inter,
  },
  'text-nav': { 
    fontSize: '12px', 
    lineHeight: '18px', 
    fontWeight: '400',
    fontFamily: typography.fonts.poppins,
  },
  'text-location': { 
    fontSize: '13px', 
    lineHeight: '20px', 
    fontWeight: '400',
    fontFamily: typography.fonts.poppins,
  },
  'text-subhead': { 
    fontSize: '24px', 
    lineHeight: '29px', 
    fontWeight: '700',
    fontFamily: typography.fonts.inter,
  },
};

export default typography;
