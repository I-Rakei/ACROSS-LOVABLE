import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { AcrossLogo } from "@/components/across-logo";
import footerImg from "@/assets/Across/footer/Footer.jpg";

const QUICK_LINKS = [
  { label: "Home", to: "/", hash: "top" },
  { label: "About Us", to: "/", hash: "about" },
  { label: "Products & Services", to: "/", hash: "services" },
  { label: "Activities", to: "/", hash: "activities" },
  { label: "Special Packages", to: "/packages" },
  { label: "Contact Us", to: "/", hash: "contact" },
];

const SERVICES_LINKS = [
  { label: "Corporate Travel Solutions", to: "/", hash: "services-details" },
  { label: "Transport & Logistics", to: "/", hash: "services-details" },
  { label: "Holiday Packages", to: "/packages" },
  { label: "Airport Transfers", to: "/", hash: "services-details" },
  { label: "Car Rental", to: "/", hash: "services-details" },
  { label: "Guided Tours", to: "/packages" },
];

export function SiteFooter() {
  return (
    <footer className="relative text-white overflow-hidden bg-[#0080B9] w-full min-h-[60vh] flex flex-col justify-between">
      <img
        src={footerImg}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-fill object-center pointer-events-none"
      />

      <div className="relative z-10 flex-1 flex flex-col justify-between">
        {/* Main columns */}
        <div className="container-x pt-12 pb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="eyebrow !text-white mb-5">Need Help?</h4>
            <ul className="space-y-4 text-sm text-white/90 font-medium">
              <li className="flex gap-3">
                <span className="w-9 h-9 rounded-full border-[1px] border-white/30 flex-shrink-0 flex items-center justify-center text-white">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="pt-1.5">Bairro da Sommerschield, Rua de Tchamba, N°204, 1° Andar · Maputo, Mozambique</span>
              </li>
              <li className="flex gap-3">
                <span className="w-9 h-9 rounded-full border-[1px] border-white/30 flex-shrink-0 flex items-center justify-center mt-1 text-white">
                  <Phone className="w-4 h-4" />
                </span>
                <span>
                  Mobile: +258 84 438 3501<br />
                  Emergency: +258 87 402 6626
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-9 h-9 rounded-full border-[1px] border-white/30 flex-shrink-0 flex items-center justify-center text-white">
                  <Mail className="w-4 h-4" />
                </span>
                <a href="mailto:reservations@acrosstour.com" className="text-white hover:text-white/80 transition">
                  reservations@acrosstour.com
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-white mb-5">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    hash={link.hash} 
                    className="text-white hover:text-white/80 transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-white mb-5">Services</h4>
            <ul className="space-y-3 text-sm">
              {SERVICES_LINKS.map((link) => (
                <li key={link.label}>
                  <Link 
                    to={link.to} 
                    hash={link.hash} 
                    className="text-white hover:text-white/80 transition font-medium"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-white mb-5">Emergency & Certification</h4>
            <p className="text-sm text-white/90 mb-4 font-medium">
              24/7 Emergency Support Line for our travellers currently on the ground.
            </p>
            <div className="text-sm font-medium text-white mb-6">+258 87 402 6626 (emergency)</div>
            
            {/* Logos side-by-side: Across Tour Logo next to IATA Logo */}
            <div className="flex items-center gap-3 sm:gap-4 flex-nowrap pt-2">
              <AcrossLogo className="h-12 sm:h-14 w-auto text-white shrink-0" idle={false} hoverable={false} entrance="none" />
              <div className="h-10 w-[1px] bg-white/30 shrink-0" />
              <div className="flex items-center gap-2.5 shrink-0">
                <img src="/logos/iata.svg" alt="IATA Certified" className="h-10 sm:h-12 w-auto shrink-0" loading="lazy" decoding="async" />
                <div className="text-[11px] leading-tight text-white/90 font-medium shrink-0">
                  Officially<br />IATA accredited<br />agency
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom row: Copyright + Social Icons + Privacy Policy links */}
        <div className="border-t-[1px] border-white/20">
          <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/90 font-medium">
            <div>© {new Date().getFullYear()} Across Tour DMC. All rights reserved.</div>

            {/* Social Icons in the bottom row */}
            <div className="flex items-center gap-2">
              {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border-[1px] border-white/40 flex items-center justify-center text-white hover:bg-white hover:text-accent transition"
                  aria-label="Social"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            <div className="flex gap-6">
              <a href="#" className="hover:text-white/80">Privacy Policy</a>
              <a href="#" className="hover:text-white/80">Terms & Conditions</a>
              <a href="#" className="hover:text-white/80">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
