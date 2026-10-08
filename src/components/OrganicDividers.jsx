import React from 'react';

/**
 * AMB Design Organic Curve Dividers
 * Handcrafted SVG bezier curves providing seamless, luxurious transitions between sections.
 */

// Transition from Dark Hero/Section to Warm Sand Section
export const CurveDarkToSand = ({ className = "", style = {} }) => {
  return (
    <div className={`organic-divider-wrapper ${className}`} style={{ ...style }} aria-hidden="true">
      <svg
        className="organic-divider-svg"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Subtle accent shadow layer */}
        <path
          d="M0,32 C320,110 480,10 720,65 C960,120 1180,20 1440,80 L1440,120 L0,120 Z"
          fill="rgba(212, 175, 55, 0.12)"
        />
        {/* Secondary wood warmth curve */}
        <path
          d="M0,50 C280,115 540,25 800,85 C1060,140 1260,35 1440,90 L1440,120 L0,120 Z"
          fill="rgba(234, 225, 211, 0.6)"
        />
        {/* Main Sand Fill */}
        <path
          d="M0,60 C320,125 580,30 860,95 C1120,145 1300,45 1440,100 L1440,120 L0,120 Z"
          fill="#F6F1EA"
        />
      </svg>
    </div>
  );
};

// Transition from Sand Section to Dark Wood Section
export const CurveSandToDark = ({ className = "", style = {} }) => {
  return (
    <div className={`organic-divider-wrapper ${className}`} style={{ backgroundColor: '#F6F1EA', ...style }} aria-hidden="true">
      <svg
        className="organic-divider-svg"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        {/* Accent gold hint */}
        <path
          d="M0,80 C360,10 680,110 1020,40 C1220,5 1360,60 1440,30 L1440,120 L0,120 Z"
          fill="rgba(212, 175, 55, 0.15)"
        />
        {/* Secondary deep tone */}
        <path
          d="M0,70 C400,20 720,105 1060,45 C1240,15 1360,70 1440,40 L1440,120 L0,120 Z"
          fill="#1E1612"
        />
        {/* Main Dark Fill */}
        <path
          d="M0,60 C420,15 780,110 1100,35 C1260,0 1380,50 1440,25 L1440,120 L0,120 Z"
          fill="#120D0B"
        />
      </svg>
    </div>
  );
};

// Flowing Asymmetric Organic Curve (Dark to Sand)
export const CurveOrganicFluid = ({ className = "" }) => {
  return (
    <div className={`organic-divider-wrapper ${className}`} aria-hidden="true">
      <svg
        className="organic-divider-svg"
        viewBox="0 0 1440 130"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C220,120 460,-20 740,70 C1020,150 1260,10 1440,75 L1440,130 L0,130 Z"
          fill="rgba(184, 115, 51, 0.15)"
        />
        <path
          d="M0,55 C240,125 500,5 780,85 C1060,155 1280,25 1440,85 L1440,130 L0,130 Z"
          fill="#F6F1EA"
        />
      </svg>
    </div>
  );
};

// Flowing Transition into CTA Banner (Sand to Deep Luxury Wood)
export const CurveSandToCta = ({ className = "" }) => {
  return (
    <div className={`organic-divider-wrapper ${className}`} aria-hidden="true">
      <svg
        className="organic-divider-svg"
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0,90 C340,15 720,120 1080,30 C1260,-15 1380,60 1440,20 L1440,120 L0,120 Z"
          fill="rgba(212, 175, 55, 0.2)"
        />
        <path
          d="M0,75 C360,5 740,105 1100,20 C1280,-25 1390,45 1440,10 L1440,120 L0,120 Z"
          fill="#1C1512"
        />
      </svg>
    </div>
  );
};
