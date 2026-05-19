import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border bg-card/40">
      <div className="shimmer-line" />
      <div className="container-luxe py-20 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3">
            <span className="grid place-items-center w-11 h-11 rounded-full bg-gradient-gold text-primary-foreground font-display text-lg font-bold">
              M
            </span>
            <div>
              <div className="font-display">{SITE.shortName}</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                Mega Resources
              </div>
            </div>
          </div>
          <p className="mt-6 text-sm text-muted-foreground leading-relaxed">
            {SITE.description}
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Instagram, href: SITE.socials.instagram },
              { Icon: Facebook, href: SITE.socials.facebook },
              { Icon: Linkedin, href: SITE.socials.linkedin },
              { Icon: Twitter, href: SITE.socials.x },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="grid place-items-center w-10 h-10 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-colors"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Services</h4>
          <ul className="space-y-3 text-sm">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  className="text-foreground/70 hover:text-primary transition-colors"
                >
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Company</h4>
          <ul className="space-y-3 text-sm">
            {[
              { to: "/about", label: "About Us" },
              { to: "/services", label: "All Services" },
              { to: "/gallery", label: "Gallery" },
              { to: "/booking", label: "Book Now" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-foreground/70 hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-[0.25em] text-primary mb-5">Contact</h4>
          <ul className="space-y-4 text-sm text-foreground/70">
            <li className="flex gap-3">
              <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <div className="space-y-2">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary/80">{SITE.headquarters.label}</div>
                  <div>{SITE.headquarters.value}</div>
                </div>
                {SITE.branches.map((b) => (
                  <div key={b.label}>
                    <div className="text-[10px] uppercase tracking-[0.25em] text-primary/80">{b.label}</div>
                    <div>{b.value}</div>
                  </div>
                ))}
              </div>
            </li>
            <li className="flex gap-3">
              <Phone className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <a href={`tel:${SITE.phone}`} className="hover:text-primary">{SITE.phone}</a>
            </li>
            <li className="flex gap-3">
              <Mail className="w-4 h-4 mt-0.5 text-primary shrink-0" />
              <a href={`mailto:${SITE.email}`} className="hover:text-primary break-all">{SITE.email}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-luxe py-6 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} {SITE.legal}. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">{SITE.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
