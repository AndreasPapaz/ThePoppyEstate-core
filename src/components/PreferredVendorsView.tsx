import Image from "next/image";
import Link from "next/link";
import { Container } from "./Container";
import {
  preferredVendorsContent,
  type PreferredVendor,
  type VendorLink,
} from "@/content/preferredVendors";

const linkLabels: Record<VendorLink["kind"], string> = {
  email: "Email",
  website: "Website",
  instagram: "Instagram",
  phone: "Phone",
};

function VendorGallery({ vendor, priority = false }: { vendor: PreferredVendor; priority?: boolean }) {
  const [featured, second, third] = vendor.images;

  return (
    <div className="grid h-[300px] grid-cols-[1.45fr_1fr] gap-1.5 sm:h-[390px] sm:gap-2 lg:h-[430px]">
      <div className="relative min-w-0 overflow-hidden">
        <Image
          src={featured.src}
          alt={featured.alt}
          fill
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
          sizes="(max-width: 767px) 60vw, (max-width: 1279px) 44vw, 560px"
        />
      </div>
      <div className={`grid min-w-0 gap-1.5 sm:gap-2 ${third ? "grid-rows-2" : "grid-rows-1"}`}>
        <div className="relative min-h-0 overflow-hidden">
          <Image
            src={second.src}
            alt={second.alt}
            fill
            priority={priority}
            className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
            sizes="(max-width: 767px) 40vw, (max-width: 1279px) 28vw, 350px"
          />
        </div>
        {third && (
          <div className="relative min-h-0 overflow-hidden">
            <Image
              src={third.src}
              alt={third.alt}
              fill
              className="object-cover transition-transform duration-700 ease-out hover:scale-[1.025]"
              sizes="(max-width: 767px) 40vw, (max-width: 1279px) 28vw, 350px"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function VendorDetails({ vendor, number }: { vendor: PreferredVendor; number: number }) {
  return (
    <div className="flex h-full flex-col justify-center py-8 lg:py-12">
      <div className="mb-6 flex items-center gap-4">
        <p className="text-label-small font-dm-sans uppercase tracking-[0.22em] text-[#435245]">
          {vendor.category}
        </p>
        <span className="h-px flex-1 bg-pink/80" aria-hidden="true" />
        <span className="text-label-small font-dm-sans text-ground/50" aria-hidden="true">
          {String(number).padStart(2, "0")}
        </span>
      </div>
      <h2 className="mb-5 text-display-4 font-seriff-condensed font-light leading-[0.98] text-burgundy sm:text-display-3">
        {vendor.name}
      </h2>
      <p className="max-w-xl text-body-small font-seriff leading-relaxed text-ground">
        {vendor.description}
      </p>
      <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
        {vendor.links.map((link) => (
          <li key={`${link.kind}-${link.href}`}>
            <Link
              href={link.href}
              target={link.kind === "website" || link.kind === "instagram" ? "_blank" : undefined}
              rel={link.kind === "website" || link.kind === "instagram" ? "noopener noreferrer" : undefined}
              aria-label={`${linkLabels[link.kind]} for ${vendor.name}: ${link.label}`}
              className="border-b border-pink pb-1 text-label-small font-dm-sans text-burgundy transition-colors hover:border-burgundy hover:text-[#435245] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-burgundy"
            >
              {linkLabels[link.kind]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function PreferredVendorsView() {
  const { eyebrow, heading, year, introduction, introductionSecondary, vendors } =
    preferredVendorsContent;
  const heroVendor = vendors[9];

  return (
    <>
      <section className="pb-16 pt-8 lg:pb-24 lg:pt-12">
        <Container>
          <div className="grid items-stretch gap-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <div className="flex flex-col justify-center lg:py-10">
              <p className="mb-7 text-label-small font-dm-sans uppercase tracking-[0.28em] text-[#435245]">
                {eyebrow} · {year}
              </p>
              <h1 className="max-w-xl text-[clamp(4rem,8vw,7.25rem)] font-seriff-condensed font-light leading-[0.82] tracking-[-0.025em] text-burgundy">
                {heading}
              </h1>
              <div className="mt-9 h-px w-24 bg-pink" aria-hidden="true" />
              <p className="mt-9 max-w-md text-body-small font-seriff leading-relaxed text-ground">
                {introduction}
              </p>
            </div>

            <div className="grid min-h-[430px] grid-cols-[1.4fr_0.85fr] gap-2 sm:min-h-[560px]">
              <div className="relative overflow-hidden">
                <Image
                  src={heroVendor.images[0].src}
                  alt={heroVendor.images[0].alt}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1023px) 65vw, 52vw"
                />
              </div>
              <div className="grid grid-rows-2 gap-2">
                <div className="relative overflow-hidden">
                  <Image
                    src={vendors[12].images[0].src}
                    alt={vendors[12].images[0].alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1023px) 35vw, 25vw"
                  />
                </div>
                <div className="relative overflow-hidden">
                  <Image
                    src={vendors[8].images[2].src}
                    alt={vendors[8].images[2].alt}
                    fill
                    priority
                    className="object-cover"
                    sizes="(max-width: 1023px) 35vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-6 border-y border-burgundy/15 py-9 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
            <p className="text-display-6 font-seriff-condensed font-light text-burgundy">
              Trusted partners,<br />thoughtfully chosen.
            </p>
            <p className="max-w-3xl text-body-small font-seriff leading-relaxed text-ground">
              {introductionSecondary}
            </p>
          </div>
        </Container>
      </section>

      <section aria-label="Preferred vendor directory">
        <Container>
          <div className="border-t border-burgundy/15">
            {vendors.map((vendor, index) => {
              const galleryFirst = index % 2 === 0;

              return (
                <article
                  key={vendor.name}
                  className="grid gap-0 border-b border-burgundy/15 py-12 lg:grid-cols-2 lg:gap-16 lg:py-20"
                >
                  <div className={galleryFirst ? "lg:order-1" : "lg:order-2"}>
                    <VendorGallery vendor={vendor} priority={index < 2} />
                  </div>
                  <div className={galleryFirst ? "lg:order-2" : "lg:order-1"}>
                    <VendorDetails vendor={vendor} number={index + 1} />
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-20 text-center lg:py-28">
        <Container className="flex flex-col items-center">
          <p className="mb-4 text-label-small font-dm-sans uppercase tracking-[0.25em] text-[#435245]">
            Ready to begin?
          </p>
          <h2 className="mb-5 max-w-3xl text-display-4 font-seriff-condensed font-light leading-tight text-[#435245] sm:text-display-3">
            Let us help bring your celebration to life.
          </h2>
          <p className="mb-9 max-w-xl text-body-small font-seriff text-ground">
            We are happy to make introductions and help you find the perfect partners for your day.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-full bg-[#435245] px-10 py-4 text-label-medium font-dm-sans text-white transition-colors hover:bg-pink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#435245]"
          >
            Inquire
          </Link>
        </Container>
      </section>
    </>
  );
}
