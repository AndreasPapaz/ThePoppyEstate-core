"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/home/The poppy estate flower-01.png";
import { nav } from "@/lib/navigation";
import { Container } from "./Container";

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="24" height="18" viewBox="0 0 37 28" fill="none" aria-hidden="true">
      <line x1="25" y1="2" x2="37" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="13" y1="14" x2="37" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <line x1="0" y1="26" x2="37" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ArrowDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center ${className}`} aria-hidden="true">
      <span className="size-[5px] rotate-45 bg-current shrink-0" />
      <span className="flex-1 h-px bg-current" />
      <span className="size-[5px] rotate-45 bg-current shrink-0" />
    </div>
  );
}

function CloseIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function Header() {
  const [atTop, setAtTop] = useState(true);
  const [navHidden, setNavHidden] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState<string | null>(null);
  const lastY = useRef(0);

  useEffect(() => {
    lastY.current = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      const delta = y - lastY.current;
      setAtTop(y < 80);
      if (y < 80) {
        setNavHidden(false);
      } else if (delta > 4) {
        setNavHidden(true);
        setOpenMenu(null);
      } else if (delta < -4) {
        setNavHidden(false);
      }
      lastY.current = y;
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpenMenu(null);
        setMobileOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const condensed = !atTop;
  const activeItem = nav.primary.find((item) => item.label === openMenu);

  function toggleMenu(label: string) {
    setOpenMenu((cur) => (cur === label ? null : label));
  }

  function closeAll() {
    setOpenMenu(null);
    setMobileOpen(false);
  }

  return (
    <>
      <div className="hidden lg:block h-navigation" />
      <div className="lg:hidden h-navigation-mobile" />

      {/* Desktop */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 h-navigation transition-all duration-300 ${
          navHidden ? "-translate-y-10 opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <Container className="h-full relative flex items-center justify-between">
          <Link href="/" className="z-50 shrink-0" onClick={closeAll}>
            <Image src={logo} alt={nav.logoAlt} width={112} height={116} className="w-28 h-auto object-contain" priority />
          </Link>

          <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
            <div className="relative flex items-center justify-center">
              <div
                className={`absolute inset-0 transition-all duration-300 rounded-full ${
                  condensed ? "bg-light-gold backdrop-blur-sm" : ""
                }`}
              />
              <div
                className={`relative transition-all duration-300 flex items-center ${
                  condensed ? "px-8 h-[70px]" : "px-0 h-20"
                }`}
              >
                <ul className="flex gap-2 xl:gap-8 h-full items-center justify-center relative z-50">
                  {nav.primary.map((item) => (
                    <li key={item.label} className="px-3 py-2 h-full flex items-center">
                      {item.megaMenu ? (
                        <button
                          type="button"
                          className="flex items-center gap-1 text-nav font-dm-sans text-burgundy hover:text-pink transition-colors cursor-pointer"
                          onClick={() => toggleMenu(item.label)}
                          aria-expanded={openMenu === item.label}
                        >
                          {item.label}
                          <ChevronIcon open={openMenu === item.label} />
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-nav font-dm-sans text-burgundy hover:text-pink transition-colors"
                          onClick={closeAll}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {!condensed && (
              <ArrowDivider className="w-full text-pink transition-opacity duration-300" />
            )}
          </div>

          <div className="z-50 shrink-0 flex items-center gap-6">
            <Link
              href={nav.cta.href}
              className="inline-block text-label-medium font-dm-sans text-white bg-[#435245] hover:bg-pink rounded-full px-6 py-3 transition-colors"
              onClick={closeAll}
            >
              {nav.cta.label}
            </Link>
          </div>
        </Container>

        {activeItem?.megaMenu && (
          <>
            <div className="fixed left-0 right-0 bottom-0 top-navigation z-40" onClick={closeAll} />
            <div className="absolute top-full left-0 right-0 bg-bark z-50">
              <Container className="py-16 flex flex-col lg:flex-row gap-16">
                <div className="grid grid-cols-2 gap-x-16 gap-y-10 lg:w-[45%] shrink-0">
                  {activeItem.megaMenu.columns.map((col) => (
                    <div key={col.label}>
                      <p className="text-label-small font-dm-sans text-white/60 mb-4">{col.label}</p>
                      <ul className="flex flex-col gap-3">
                        {col.links.map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              className="text-label-big font-seriff text-white hover:text-pink transition-colors"
                              onClick={closeAll}
                            >
                              {link.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                <div className="flex gap-6 flex-1">
                  {activeItem.megaMenu.promoCards.map((card) => (
                    <Link
                      key={card.href}
                      href={card.href}
                      className="group block w-full max-w-[300px]"
                      onClick={closeAll}
                    >
                      <div className="relative aspect-[4/3] rounded-md overflow-hidden mb-3">
                        <Image
                          src={card.image.src}
                          alt={card.image.alt}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          sizes="300px"
                        />
                      </div>
                      <p className="text-label-big font-seriff text-white">{card.title}</p>
                    </Link>
                  ))}
                </div>
              </Container>
            </div>
          </>
        )}
      </header>

      {/* Mobile */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 h-navigation-mobile">
        <Container className="h-full flex items-center justify-between">
          <Link href="/" className="shrink-0" onClick={closeAll}>
            <Image src={logo} alt={nav.logoAlt} width={88} height={92} className="w-20 h-auto object-contain" priority />
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href={nav.cta.href}
              className="inline-block text-label-medium font-dm-sans text-white bg-[#435245] rounded-full px-4 py-2 transition-colors"
            >
              {nav.cta.label}
            </Link>
            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen(true)}
              className="text-pink p-2 cursor-pointer"
            >
              <MenuIcon />
            </button>
          </div>
        </Container>
      </header>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-[60] bg-bark overflow-y-auto">
          <Container className="py-6 flex items-center justify-end">
            <button
              type="button"
              onClick={closeAll}
              className="flex items-center gap-2 text-nav font-dm-sans text-white cursor-pointer"
            >
              Close <CloseIcon />
            </button>
          </Container>

          <Container className="py-8 flex flex-col gap-2">
            {nav.primary.map((item) => (
              <div key={item.label} className="border-b border-white/10 py-4">
                {item.megaMenu ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex items-center justify-between text-display-6 font-seriff-condensed font-light text-white cursor-pointer"
                      onClick={() =>
                        setMobileAccordion((cur) => (cur === item.label ? null : item.label))
                      }
                      aria-expanded={mobileAccordion === item.label}
                    >
                      {item.label}
                      <ChevronIcon open={mobileAccordion === item.label} />
                    </button>
                    {mobileAccordion === item.label && (
                      <div className="mt-4 flex flex-col gap-5">
                        {item.megaMenu.columns.map((col) => (
                          <div key={col.label}>
                            <p className="text-label-small font-dm-sans text-white/50 mb-2">
                              {col.label}
                            </p>
                            <ul className="flex flex-col gap-2">
                              {col.links.map((link) => (
                                <li key={link.href}>
                                  <Link
                                    href={link.href}
                                    className="text-label-big font-seriff text-white/90"
                                    onClick={closeAll}
                                  >
                                    {link.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block text-display-6 font-seriff-condensed font-light text-white"
                    onClick={closeAll}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </Container>
        </div>
      )}
    </>
  );
}
