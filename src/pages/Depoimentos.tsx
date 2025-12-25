import { Navbar } from "@/components/Navbar";
import { TestimonialChat } from "@/components/TestimonialChat";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Star } from "lucide-react";
import mariaSilvaAvatar from "@/assets/clients/maria-silva.jpg";
import anaCostaAvatar from "@/assets/clients/ana-costa.jpg";
import julianaSantosAvatar from "@/assets/clients/juliana-santos.jpg";
import carlaOliveiraAvatar from "@/assets/clients/carla-oliveira.jpg";
import patriciaLimaAvatar from "@/assets/clients/patricia-lima.jpg";
import fernandaSouzaAvatar from "@/assets/clients/fernanda-souza.jpg";
import beatrizAlvesAvatar from "@/assets/clients/beatriz-alves.jpg";
import renataCardosoAvatar from "@/assets/clients/renata-cardoso.jpg";
import amandaFerreiraAvatar from "@/assets/clients/amanda-ferreira.jpg";
import camilaRochaAvatar from "@/assets/clients/camila-rocha.jpg";

const Depoimentos = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      message: "Depois que comecei a usar o Shampoo Quelante Orto Botanica, meu cabelo nunca mais ficou pesado! Sinto ele super leve, com movimento e brilho de salão!",
      rating: 5,
      avatar: mariaSilvaAvatar,
    },
    {
      name: "Ana Costa",
      message: "Produtos originais, entrega rápida e preço justo. Super recomendo! A Izabela é muito atenciosa e sempre tira minhas dúvidas.",
      rating: 5,
      avatar: anaCostaAvatar,
    },
    {
      name: "Juliana Santos",
      message: "Comprei o shampoo e já vi resultados em uma semana! Meu cabelo está mais hidratado e brilhoso. Voltarei a comprar com certeza!",
      rating: 5,
      avatar: julianaSantosAvatar,
    },
    {
      name: "Carla Oliveira",
      message: "A máscara capilar é simplesmente perfeita! Meu cabelo estava muito danificado e agora está lindo, macio e com muito brilho. Obrigada, Izabela!",
      rating: 5,
      avatar: carlaOliveiraAvatar,
    },
    {
      name: "Patrícia Lima",
      message: "Usei o Pró-Resgate depois de uma descoloração e fiquei chocada! Meu cabelo parecia outro, super hidratado e com vida de novo. 🥰",
      rating: 5,
      avatar: patriciaLimaAvatar,
    },
    {
      name: "Fernanda Souza",
      message: "O Kit Monovin Completo foi a melhor coisa que já usei! Meu cabelo tá crescendo muito mais rápido e parou de cair. Resultado em menos de 15 dias!",
      rating: 5,
      avatar: fernandaSouzaAvatar,
    },
    {
      name: "Beatriz Alves",
      message: "Já sou cliente há meses e não troco por nada! Produtos de qualidade, preço justo e a Izabela sempre disponível para ajudar. ❤️",
      rating: 5,
      avatar: beatrizAlvesAvatar,
    },
    {
      name: "Renata Cardoso",
      message: "A linha Maria Bonita é simplesmente perfeita! O cabelo fica com um brilho natural e aquele toque macio que a gente ama.",
      rating: 5,
      avatar: renataCardosoAvatar,
    },
    {
      name: "Amanda Ferreira",
      message: "O Shampoo e Balm Fitoativo Maria Bonita deixaram meu cabelo soltinho e leve, sem oleosidade. E o cheiro é maravilhoso!",
      rating: 5,
      avatar: amandaFerreiraAvatar,
    },
    {
      name: "Camila Rocha",
      message: "Com o Kit Cronograma Capilar Fluence, consegui recuperar todo o meu cabelo. As máscaras são potentes e o resultado é de salão!",
      rating: 5,
      avatar: camilaRochaAvatar,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Header */}
        <section className="hero-gradient grain-texture py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold text-primary mb-4 md:text-5xl animate-fade-in">
              Depoimentos das Clientes
            </h1>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-6 animate-slide-up">
              Veja o que as pessoas estão falando sobre os produtos e atendimento
            </p>
            
            {/* Rating Summary */}
            <div className="inline-flex items-center gap-3 bg-background/60 rounded-full px-6 py-3 card-shadow animate-scale-in">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-sm font-semibold text-primary">
                5.0 • Mais de 100 avaliações
              </span>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialChat key={index} {...testimonial} />
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 md:p-12 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Quer fazer parte dessa história?
              </h3>
              <p className="text-foreground/80 mb-6">
                Entre em contato e descubra os produtos perfeitos para você!
              </p>
              <WhatsAppButton
                phoneNumber="5594984214990"
                message="Olá Izabela! Vi os depoimentos e quero conhecer os produtos!"
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

export default Depoimentos;
