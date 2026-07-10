import Image from "next/image";
import Link from "next/link";
import logo from "../../public/assets/home/The poppy estate flower-01.png";
import { nav } from "@/lib/navigation";
import { Container } from "./Container";

export function Footer() {
  const { footer } = nav;

  return (
    <footer className="bg-[#435245] text-white mt-24">
      <Container className="py-16">
        <div className="flex items-center gap-4 mb-12">
          <Image src={logo} alt="The Poppy Estate logo" width={80} height={80} className="object-contain" />
          <h2 className="text-display-6 font-seriff-condensed font-light">
            {footer.heading} <span className="text-bright-gold">{footer.headingAccent}</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <ul className="flex flex-col gap-3">
            {footer.columns[0].map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-label-big font-dm-sans hover:text-bright-gold transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col gap-3">
            {footer.columns[1].map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-label-medium font-dm-sans text-light-blue hover:text-bright-gold transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="text-label-medium font-dm-sans text-light-blue flex flex-col gap-1">
            <p>{footer.copyright}</p>
            {footer.address.map((line) => (
              <p key={line}>{line}</p>
            ))}
            {footer.phone && (
              <a href={footer.phone.href} className="hover:text-bright-gold transition-colors">
                {footer.phone.label}
              </a>
            )}
            <a href={`mailto:${footer.email}`} className="hover:text-bright-gold transition-colors">
              {footer.email}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
