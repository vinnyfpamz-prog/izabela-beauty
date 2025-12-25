import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Sparkles, ShieldCheck, Truck } from "lucide-react";
import izabelaPhoto from "@/assets/izabela-photo.png";
import izabelaLogo from "@/assets/izabela-logo-green.png";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden hero-gradient grain-texture">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div className="animate-fade-in space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src={izabelaLogo} 
                alt="Logo Izabela Mendes" 
                className="h-16 w-16 object-contain animate-scale-in"
              />
              <div className="h-12 w-px bg-primary/20"></div>
              <Sparkles className="h-8 w-8 text-accent" />
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-primary md:text-5xl lg:text-6xl">
              Olá, sou a{" "}
              <span className="text-secondary">Izabela Mendes</span>
            </h1>

            <p className="text-base sm:text-lg text-foreground/80 md:text-xl">
              Consultora oficial <strong className="text-primary">Dornelas Cosméticos</strong>.
              <br />
              Vou te ajudar a cuidar da sua pele e do seu bem-estar 💚
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <WhatsAppButton 
                phoneNumber="5594984214990"
                className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto"
              >
                <span className="font-semibold">Falar com Izabela agora</span>
              </WhatsAppButton>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-1 gap-4 pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-lg bg-background/60 p-4 card-shadow">
                <Truck className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-primary">Entrega</p>
                  <p className="text-xs text-muted-foreground">Garantida</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-background/60 p-4 card-shadow">
                <ShieldCheck className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-primary">Produtos</p>
                  <p className="text-xs text-muted-foreground">Originais</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-background/60 p-4 card-shadow">
                <Sparkles className="h-8 w-8 text-secondary" />
                <div>
                  <p className="text-sm font-semibold text-primary">Atendimento</p>
                  <p className="text-xs text-muted-foreground">Personalizado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-slide-up">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 blur-3xl"></div>
            <img
              src={izabelaPhoto}
              alt="Izabela Mendes - Consultora Dornelas"
              className="relative rounded-3xl card-shadow object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 h-32 w-32 rounded-full bg-secondary/10 blur-3xl"></div>
      <div className="absolute bottom-20 left-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl"></div>
    </section>
  );
};
