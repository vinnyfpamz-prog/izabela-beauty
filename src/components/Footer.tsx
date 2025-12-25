import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import izabelaLogo from "@/assets/izabela-logo-white.png";
import dornelasLogo from "@/assets/dornelas-logo.png";
import toctusLogo from "@/assets/toctus-logo.png";
import brandLogo from "@/assets/brand-logo-1.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-2 sm:gap-3 mb-4">
              <img src={izabelaLogo} alt="Izabela Mendes" className="h-10 w-10 sm:h-12 sm:w-12" />
              <img src={dornelasLogo} alt="Dornelas Cosméticos" className="h-10 w-10 sm:h-12 sm:w-12" />
              <div>
                <h3 className="font-bold text-base sm:text-lg">Izabela Mendes</h3>
                <p className="text-xs sm:text-sm text-primary-foreground/80">Consultora Dornelas</p>
              </div>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Cuidando da sua beleza e bem-estar com produtos originais e atendimento personalizado.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5594984214990" 
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Phone className="h-4 w-4" />
                (94) 9 8421-4990
              </a>
              <a 
                href="mailto:izabell.mendes13@gmail.com"
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
              >
                <Mail className="h-4 w-4" />
                izabell.mendes13@gmail.com
              </a>
              <a 
                href="https://instagram.com/izabl.x" 
                className="flex items-center gap-2 text-sm hover:text-secondary transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="h-4 w-4" />
                @izabl.x
              </a>
              <div className="flex items-center gap-2 text-sm">
                <MapPin className="h-4 w-4" />
                Pará, Brasil
              </div>
            </div>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-semibold mb-4">Marcas Parceiras</h4>
            <div className="flex flex-wrap gap-4 items-center">
              <img src={toctusLogo} alt="Toctus" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
              <img src={brandLogo} alt="Parceiro" className="h-8 opacity-80 hover:opacity-100 transition-opacity" />
            </div>
            <p className="text-xs text-primary-foreground/60 mt-4">
              Produtos oficiais com garantia de procedência
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 text-center">
          <p className="text-sm text-primary-foreground/80">
            © {new Date().getFullYear()} Izabela Mendes - Consultora Oficial Dornelas Cosméticos
          </p>
          <p className="text-xs text-primary-foreground/60 mt-2">
            Todos os direitos reservados
          </p>
        </div>
      </div>
    </footer>
  );
};
