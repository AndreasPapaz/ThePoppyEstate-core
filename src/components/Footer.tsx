import Link from "next/link";
import { nav } from "@/lib/navigation";
import { Container } from "./Container";

export function Footer() {
  const { footer } = nav;

  const items = [
    <span key="name">{footer.name}</span>,
    <a key="phone" href={footer.phone.href} className="hover:text-pink transition-colors">
      {footer.phone.label}
    </a>,
    <span key="address">{footer.address}</span>,
    ...footer.social.map((link) => (
      <Link key={link.href} href={link.href} className="hover:text-pink transition-colors">
        {link.label}
      </Link>
    )),
  ];

  return (
    <footer className="bg-[#435245] text-white mt-24">
      <Container className="py-8">
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-label-medium font-dm-sans text-center">
          {items.map((item, i) => (
            <span key={i} className="flex items-center gap-x-3">
              {i > 0 && <span className="text-light-blue">|</span>}
              {item}
            </span>
          ))}
        </div>
      </Container>
    </footer>
  );
}
