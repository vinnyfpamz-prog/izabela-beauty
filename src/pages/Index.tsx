import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { ProductCard } from "@/components/ProductCard";
import { WhatsAppTestimonials } from "@/components/WhatsAppTestimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import produto2 from "@/assets/products/produto-02.jpeg";

const Index = () => {
  const featuredProducts = [
    {
      name: "Pró-Resgate",
      description: "Perfeito para cabelos secos e danificados. Indicado para processos de selagem, botox, descolorações e colorações. Também ideal para cabelos secos que precisam de restauração profunda.",
      image: produto2,
      benefits: ["Selagem", "Botox", "Restauração"],
      category: "Tratamento",
    },
    {
      name: "Terrena",
      description: "Tratamento para caspa, foliculite, psoríase, dermatite, anti-queda e coceira. Shampoo energizante e condicionador fortificante com tônico laurador que revitaliza o couro cabeludo.",
      image: new URL("@/assets/products/produto-17.jpeg", import.meta.url).href,
      benefits: ["Anti-Caspa", "Anti-Queda", "Tratamento do Couro"],
      category: "Tratamento",
    },
    {
      name: "Blend Vitamínico Mãe Terra",
      description: "Blend de vitaminas A, E, B5 com óleo de semente de abóbora e alecrim. Previne cabelos brancos, trata alopecia e estimula o crescimento. Tratamento altamente nutritivo e umectante.",
      image: new URL("@/assets/products/produto-11.jpeg", import.meta.url).href,
      benefits: ["Vitaminas", "Anti-Queda", "Crescimento"],
      category: "Crescimento",
    },
  ];


  const handleBuyClick = (productName: string) => {
    const message = `Olá Izabela! Tenho interesse no produto: ${productName}. Pode me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5594984214990?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />

        <AboutSection />

        {/* Featured Products */}
        <section className="py-12 sm:py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 md:text-4xl">
                Produtos em Destaque
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground">
                Seleção especial dos produtos mais procurados
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {featuredProducts.map((product, index) => (
                <ProductCard
                  key={index}
                  {...product}
                  onBuyClick={() => handleBuyClick(product.name)}
                />
              ))}
            </div>

            <div className="text-center">
              <NavLink to="/produtos">
                <Button size="lg" variant="outline" className="text-primary border-primary hover:bg-primary hover:text-primary-foreground w-full sm:w-auto">
                  Ver todos os produtos
                </Button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* WhatsApp Style Testimonials */}
        <WhatsAppTestimonials />

        <FAQ />
      </main>

      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton phoneNumber="5594984214990" variant="floating" />
    </div>
  );
};

export default Index;
