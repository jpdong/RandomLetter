import React from 'react';

const GlitchTextStructuredData: React.FC = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Glitch Text Generator",
    "description": "Generate glitch text effects with our free online tool. Create corrupted, distorted text using Unicode characters for social media, gaming, and creative projects.",
    "url": "https://randomletter.net/glitch-text-generator",
    "applicationCategory": "UtilitiesApplication",
    "operatingSystem": "Any",
    "permissions": "browser",
    "isAccessibleForFree": true,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "creator": {
      "@type": "Organization",
      "name": "Random Letter Generator",
      "url": "https://randomletter.net"
    },
    "featureList": [
      "Real-time glitch text preview",
      "Multiple intensity levels (light, medium, heavy)",
      "Unicode character-based text corruption",
      "One-click copy to clipboard",
      "Mobile-responsive design",
      "No registration required",
      "Multiple text variants generation",
      "Zalgo text effects",
      "Combining diacritical marks",
      "Character replacement effects"
    ],
    "screenshot": "https://randomletter.net/logo.png",
    "softwareVersion": "1.0",
    "datePublished": "2024-01-01",
    "dateModified": new Date().toISOString().split('T')[0],
    "inLanguage": "en",
    "copyrightHolder": {
      "@type": "Organization",
      "name": "Random Letter Generator"
    },
    "license": "https://randomletter.net/terms-of-use",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What is glitch text and how does it work?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Glitch text, also known as 'zalgo text' or 'corrupted text,' uses Unicode combining characters to create a distorted, chaotic appearance. Our generator applies various Unicode modifiers, diacritical marks, and special symbols to normal text to achieve this effect."
          }
        },
        {
          "@type": "Question",
          "name": "Is the generated glitch text safe to use?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, the glitch text is completely safe. It uses standard Unicode characters that are supported by most modern systems and applications. However, some platforms may have character limits or display issues with heavily distorted text."
          }
        },
        {
          "@type": "Question",
          "name": "Can I use glitch text on social media platforms?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Most social media platforms support Unicode characters, so glitch text should work on platforms like Twitter, Instagram, Discord, and Facebook. However, some platforms may have filters or character limits that could affect display."
          }
        },
        {
          "@type": "Question",
          "name": "What's the difference between light, medium, and heavy intensity?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Light intensity applies subtle character variations and basic diacritical marks. Medium intensity adds more combining characters and symbols. Heavy intensity uses the full range of Unicode modifiers, including zalgo characters, for maximum distortion."
          }
        }
      ]
    },
    "potentialAction": {
      "@type": "UseAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://randomletter.net/glitch-text-generator",
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      },
      "result": {
        "@type": "TextDigitalDocument",
        "description": "Generated glitch text with Unicode effects"
      }
    }
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://randomletter.net"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Glitch Text Generator",
        "item": "https://randomletter.net/glitch-text-generator"
      }
    ]
  };

  const howToData = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "How to Generate Glitch Text",
    "description": "Step-by-step guide to creating glitch text effects using our online generator",
    "image": "https://randomletter.net/logo.png",
    "totalTime": "PT2M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "Text to convert"
      },
      {
        "@type": "HowToSupply",
        "name": "Web browser"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "Glitch Text Generator"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "Enter Your Text",
        "text": "Type or paste any text into the input field. You can use letters, numbers, symbols, and even emoji.",
        "image": "https://randomletter.net/logo.png"
      },
      {
        "@type": "HowToStep",
        "name": "Choose Intensity",
        "text": "Select from light, medium, or heavy glitch effects. Watch the real-time preview update as you change settings.",
        "image": "https://randomletter.net/logo.png"
      },
      {
        "@type": "HowToStep",
        "name": "Generate & Copy",
        "text": "Click generate to create multiple variants, then copy your favorite one with a single click.",
        "image": "https://randomletter.net/logo.png"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToData) }}
      />
    </>
  );
};

export default GlitchTextStructuredData;