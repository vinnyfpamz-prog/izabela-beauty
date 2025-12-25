import { NavLink } from "@/components/NavLink";
import { Menu } from "lucide-react";
import { useState } from "react";
import izabelaLogo from "@/assets/izabela-logo-green.png";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Início" },
    { to: "/produtos", label: "Produtos" },
    { to: "/depoimentos", label: "Depoimentos" },
    { to: "/sobre", label: "Sobre" },
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img src={izabelaLogo} alt="Izabela Mendes" className="h-12 w-12 object-contain" />
          <div className="flex flex-col">
            <span className="text-lg font-semibold text-primary">Izabela Mendes</span>
            <span className="text-xs text-muted-foreground">Consultora Dornelas</span>
          </div>
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeClassName="text-primary font-semibold"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <Menu className="h-6 w-6 text-foreground" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border/40 bg-background md:hidden">
          <div className="container mx-auto flex flex-col gap-4 px-4 py-6">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
                activeClassName="text-primary font-semibold"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};
