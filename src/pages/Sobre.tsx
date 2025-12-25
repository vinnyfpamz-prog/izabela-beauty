import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { AboutSection } from "@/components/AboutSection";
import { Heart, Sparkles, Target, Award } from "lucide-react";
import izabelaPhoto from "@/assets/izabela-photo.png";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Header */}
        <section className="hero-gradient grain-texture py-12 sm:py-16">
          <div className="container mx-auto px-4">
            <div className="grid items-center gap-8 sm:gap-12 lg:grid-cols-2">
              {/* Text */}
              <div className="animate-fade-in">
                <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 sm:mb-6 md:text-5xl">
                  Conheça a
                  <br />
                  <span className="text-secondary">Izabela Mendes</span>
                </h1>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed mb-4 sm:mb-6">
                  Apaixonada por beleza, bem-estar e por ajudar pessoas a se sentirem 
                  mais confiantes e felizes consigo mesmas.
                </p>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  Como consultora oficial <strong>Dornelas Cosméticos</strong>, 
                  tenho o compromisso de oferecer apenas produtos originais, 
                  atendimento personalizado e dicas que realmente fazem a diferença 
                  na vida das minhas clientes.
                </p>
              </div>

              {/* Image */}
              <div className="relative animate-slide-up">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-secondary/20 to-accent/20 blur-3xl"></div>
                <img
                  src={izabelaPhoto}
                  alt="Izabela Mendes"
                  className="relative rounded-3xl card-shadow object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        <AboutSection />

        {/* Mission & Vision */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
              {/* Mission */}
              <div className="bg-secondary/10 rounded-2xl p-6 sm:p-8 card-shadow">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-secondary/20 flex items-center justify-center mb-4 sm:mb-6">
                  <Target className="h-6 w-6 sm:h-7 sm:w-7 text-secondary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Missão</h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  Proporcionar uma experiência única de compra, oferecendo produtos 
                  de alta qualidade e atendimento personalizado, ajudando cada cliente 
                  a encontrar o melhor para sua beleza e bem-estar.
                </p>
              </div>

              {/* Vision */}
              <div className="bg-accent/10 rounded-2xl p-6 sm:p-8 card-shadow">
                <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-accent/20 flex items-center justify-center mb-4 sm:mb-6">
                  <Sparkles className="h-6 w-6 sm:h-7 sm:w-7 text-accent" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">Visão</h3>
                <p className="text-sm sm:text-base text-foreground/80 leading-relaxed">
                  Ser referência em consultoria de cosméticos na região, conhecida 
                  pela confiabilidade, qualidade dos produtos e pelo carinho com que 
                  cada cliente é atendido.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Differentials */}
        <section className="py-12 sm:py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-8 sm:mb-12 md:text-4xl">
              Por que comprar comigo?
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
              <div className="bg-background rounded-xl p-6 card-shadow text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">
                  Produtos Originais
                </h3>
                <p className="text-sm text-muted-foreground">
                  Garantia de procedência e qualidade em todos os itens
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 card-shadow text-center">
                <div className="h-16 w-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">
                  Atendimento Humanizado
                </h3>
                <p className="text-sm text-muted-foreground">
                  Escuto suas necessidades e indico o melhor para você
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 card-shadow text-center">
                <div className="h-16 w-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-2">
                  Dicas Personalizadas
                </h3>
                <p className="text-sm text-muted-foreground">
                  Orientações sobre uso e cuidados específicos
                </p>
              </div>

              <div className="bg-background rounded-xl p-6 card-shadow text-center">
                <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-primary mb-2">
                  Compromisso
                </h3>
                <p className="text-sm text-muted-foreground">
                  Seu bem-estar e satisfação são minha prioridade
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 md:text-4xl">
                Vamos conversar?
              </h2>
              <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8">
                Estou aqui para te ajudar a encontrar os produtos perfeitos.
                Entre em contato pelo WhatsApp!
              </p>
              <WhatsAppButton
                phoneNumber="5594984214990"
                message="Olá Izabela! Gostaria de conhecer mais sobre os produtos."
                className="text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 w-full sm:w-auto"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton phoneNumber="5594984214990" variant="floating" />
    </div>
  );
};

export default Sobre;
