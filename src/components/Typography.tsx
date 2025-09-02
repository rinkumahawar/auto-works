'use client';

import React from 'react';
import { typographyStyles } from '@/styles/typography';

interface TypographyProps {
  variant?: keyof typeof typographyStyles;
  children: React.ReactNode;
  className?: string;
  color?: string;
}

const Typography: React.FC<TypographyProps> = ({ 
  variant = 'bodyLight', 
  children, 
  className = '',
  color
}) => {
  const baseStyle = typographyStyles[variant];
  const style = color ? { ...baseStyle, color } : baseStyle;

  return (
    <div style={style} className={className}>
      {children}
    </div>
  );
};

// Typography Showcase Component
export const TypographyShowcase: React.FC = () => {
  return (
    <div className="p-8 space-y-8 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Typography System Showcase</h1>
      
      {/* Hero Heading */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Hero Heading (H1)</h2>
        <Typography variant="hero">
          This is a Hero Heading
        </Typography>
      </section>

      {/* Section Headings */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Section Headings (H2/H3)</h2>
        <Typography variant="sectionHeading">
          This is a Section Heading
        </Typography>
      </section>

      {/* Body Text */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Body Text</h2>
        <div className="space-y-4">
          <Typography variant="bodyLight">
            This is body text (light) - Inter font, 300 weight, 16px
          </Typography>
          <Typography variant="bodyMedium">
            This is body text (medium) - Poppins font, 300 weight, 20px
          </Typography>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Button Labels</h2>
        <div className="space-x-4">
          <button className="bg-blue-600 px-6 py-3 rounded">
            <Typography variant="buttonLabel">
              Primary Button
            </Typography>
          </button>
          <button className="bg-gray-600 px-6 py-3 rounded">
            <Typography variant="buttonLabel">
              Secondary Button
            </Typography>
          </button>
        </div>
      </section>

      {/* Navigation */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Navigation Items</h2>
        <nav className="flex space-x-6">
          <Typography variant="navItem">Home</Typography>
          <Typography variant="navItem">About</Typography>
          <Typography variant="navItem">Services</Typography>
          <Typography variant="navItem">Contact</Typography>
        </nav>
      </section>

      {/* Location Text */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Location/Dropdown Text</h2>
        <Typography variant="locationText">
          Select your location
        </Typography>
      </section>

      {/* Subheads */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Subheads & Callouts</h2>
        <div className="space-y-4">
          <Typography variant="subhead">
            This is a subhead (24px)
          </Typography>
          <Typography variant="subheadLarge">
            This is a large subhead (25px)
          </Typography>
        </div>
      </section>

      {/* Color Variations */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Color Variations</h2>
        <div className="space-y-4">
          <div className="bg-black p-4 rounded">
            <Typography variant="bodyLight">
              White text on black background
            </Typography>
          </div>
          <div className="bg-white p-4 rounded border">
            <Typography variant="bodyLight" color="#000000">
              Black text on white background
            </Typography>
          </div>
        </div>
      </section>

      {/* Font Families */}
      <section>
        <h2 className="text-lg font-semibold mb-3">Font Families</h2>
        <div className="space-y-4">
          <div className="font-poppins text-xl">
            This text uses Poppins font family
          </div>
          <div className="font-inter text-xl">
            This text uses Inter font family
          </div>
        </div>
      </section>
    </div>
  );
};

export default Typography;
