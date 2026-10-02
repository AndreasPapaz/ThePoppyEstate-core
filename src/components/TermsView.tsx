"use client";

import { useEffect, useState } from "react";
import type { TermsContent } from "@/content/terms";

export function TermsView({ content }: { content: TermsContent }) {
  const { eyebrow, title, notice, sections } = content;
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShowBackToTop(window.scrollY > 400);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToSection(id: string) {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  }

  return (
    <div className="px-10 lg:px-16 max-w-4xl mx-auto py-16 lg:py-24">
      {/* Header */}
      <div className="mb-12">
        <p className="text-label-big font-dm-sans text-burgundy mb-2">
          {eyebrow}
        </p>
        <h1 className="text-display-3 font-seriff-condensed font-light text-burgundy mb-6">
          {title}
        </h1>
        <p className="text-label-medium font-dm-sans font-bold text-ground mb-8">
          {notice}
        </p>
      </div>

      {/* Table of Contents */}
      <div className="mb-16 p-8 bg-light-gold rounded-md">
        <h2 className="text-display-6 font-seriff-condensed font-light text-burgundy mb-4">
          Table of Contents
        </h2>
        <ol className="space-y-2">
          {sections.map((section, index) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="text-label-medium font-dm-sans text-burgundy hover:underline text-left transition-colors"
              >
                {index + 1}. {section.title}
              </button>
            </li>
          ))}
        </ol>
      </div>

      {/* Sections */}
      <div className="space-y-12">
        {sections.map((section, index) => (
          <section key={section.id} id={section.id} className="scroll-mt-24">
            <h2 className="text-display-5 font-seriff-condensed font-light text-burgundy mb-4">
              {index + 1}. {section.title}
            </h2>
            <div className="text-body-small font-seriff text-ground leading-relaxed">
              {section.content.split('\n\n').map((paragraph, i) => {
                // Check if paragraph contains the email in section 17
                if (paragraph.includes('hello@thepoppyestate.com')) {
                  const parts = paragraph.split('hello@thepoppyestate.com');
                  return (
                    <p key={i} className={i > 0 ? "mt-4" : undefined}>
                      {parts[0]}
                      <a href="mailto:hello@thepoppyestate.com" className="text-burgundy hover:underline">
                        hello@thepoppyestate.com
                      </a>
                      {parts[1]}
                    </p>
                  );
                }
                // Check if paragraph contains <strong> tag for run-in bold label
                if (paragraph.includes('<strong>')) {
                  const match = paragraph.match(/^<strong>(.*?)<\/strong>\s*(.*)/);
                  if (match) {
                    return (
                      <p key={i} className={i > 0 ? "mt-4" : undefined}>
                        <strong>{match[1]}</strong> {match[2]}
                      </p>
                    );
                  }
                }
                return (
                  <p key={i} className={i > 0 ? "mt-4" : undefined}>
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </section>
        ))}
      </div>

      {/* Back to Top */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-burgundy text-white rounded-full p-4 shadow-lg hover:bg-ground transition-colors"
          aria-label="Back to top"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m18 15-6-6-6 6" />
          </svg>
        </button>
      )}
    </div>
  );
}
