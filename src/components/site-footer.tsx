import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import footerBg from "@/assets/Across/footer/image.png";

const QUICK_LINKS = [
  { label: "Home", to: "/", hash: "top" },
  { label: "About Us", to: "/", hash: "about" },
  { label: "Products & Services", to: "/", hash: "services" },
  { label: "Activities", to: "/", hash: "activities" },
  { label: "Special Packages", to: "/packages" },
  { label: "Contact Us", to: "/", hash: "quote" },
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
    <footer className="relative text-white">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${footerBg})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-brand-blue/70 via-brand-blue/90 to-ink/95" aria-hidden />

      <div className="relative">
        {/* Top strip: logo + contact quick */}
        <div className="container-x pt-16 pb-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <img src="/logos/across-tour.svg" alt="Across Tour" className="h-20 w-auto brightness-0 invert" />
          </div>

          <div className="flex items-center gap-2">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-accent hover:border-accent transition"
                aria-label="Social"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/15" />

        {/* Main columns */}
        <div className="container-x py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h4 className="eyebrow !text-white mb-5">Need Help?</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3">
                <span className="w-9 h-9 rounded-full border border-white/30 flex-shrink-0 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </span>
                <span className="pt-1.5">Av. Tomás Nduda, No. 942, 1st floor · Maputo, Mozambique</span>
              </li>
              <li className="flex gap-3">
                <span className="w-9 h-9 rounded-full border border-white/30 flex-shrink-0 flex items-center justify-center mt-1">
                  <Phone className="w-4 h-4" />
                </span>
                <span>
                  Office: +258 21 487 399<br />
                  Mobile: +258 82 940 7360
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <span className="w-9 h-9 rounded-full border border-white/30 flex-shrink-0 flex items-center justify-center">
                  <Mail className="w-4 h-4" />
                </span>
                <a href="mailto:reservations@acrosstour.com" className="hover:text-accent">
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
                    className="text-white/80 hover:text-accent transition"
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
                    className="text-white/80 hover:text-accent transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="eyebrow !text-white mb-5">Emergency & Certification</h4>
            <p className="text-sm text-white/80 mb-4">
              24/7 Emergency Support Line for our travellers currently on the ground.
            </p>
            <div className="text-lg font-bold">+258 87 402 6625 (emergency)</div>
            <div className="mt-6 flex items-center gap-4">
              <img src="/logos/iata.svg" alt="IATA Certified" className="h-16 w-auto" />
              <div className="text-xs text-white/60 leading-relaxed">
                Officially<br />IATA accredited<br />agency
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/15">
          <div className="container-x py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/60">
            <div>© {new Date().getFullYear()} Across Tour DMC. All rights reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent">Privacy Policy</a>
              <a href="#" className="hover:text-accent">Terms & Conditions</a>
              <a href="#" className="hover:text-accent">Cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
