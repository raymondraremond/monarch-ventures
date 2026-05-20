import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { SITE } from "@/lib/site";
import { cn } from "@/lib/utils";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border"
          : "bg-transparent"
      )}
    >
      <div className="container-luxe flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <span className="grid place-items-center w-10 h-10 rounded-full bg-gradient-gold text-primary-foreground font-display text-lg font-bold shadow-gold transition-transform duration-500 group-hover:rotate-12">
            M
          </span>
          <div className="leading-tight">
            <div className="font-display text-base tracking-wide">{SITE.shortName}</div>
            <div className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Mega Ventures</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="link-underline text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-primary transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/booking"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] font-medium rounded-full shadow-gold hover:shadow-elegant transition-all duration-500 hover:-translate-y-0.5"
          >
            Book Now
          </Link>
        </div>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <nav className="container-luxe flex flex-col py-6 gap-1">
            {NAV.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm uppercase tracking-[0.2em] text-foreground/80 hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/booking"
              onClick={() => setOpen(false)}
              className="mt-4 text-center px-6 py-3 bg-gradient-gold text-primary-foreground text-xs uppercase tracking-[0.25em] rounded-full"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
