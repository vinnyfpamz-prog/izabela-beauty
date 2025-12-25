import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ProductCard } from "@/components/ProductCard";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Produtos = () => {
  const [selectedCategory, setSelectedCategory] = useState("todos");

  const products = [
    {
      name: "Shampoo Quelante Orto Botanica",
      description: "Desenvolvido para remover metais pesados, impurezas e resíduos acumulados nos fios e no couro cabeludo. Limpeza profunda sem agredir a fibra capilar.",
      image: new URL("@/assets/products/produto-01.jpeg", import.meta.url).href,
      benefits: ["Quelante", "Limpeza Profunda", "Detox"],
      category: "tratamentos",
    },
    {
      name: "Pró-Resgate",
      description: "Perfeito para cabelos secos e danificados. Indicado para processos de selagem, botox, descolorações e colorações. Também ideal para cabelos secos que precisam de restauração profunda.",
      image: new URL("@/assets/products/produto-02.jpeg", import.meta.url).href,
      benefits: ["Selagem", "Botox", "Restauração"],
      category: "tratamentos",
    },
    {
      name: "Kit Monovin Completo",
      description: "Kit de força, crescimento e resistência em cada etapa! Apresentamos o Kit Monovin com shampoo, máscara, tônico e suplemento para combater a queda e estimular o crescimento.",
      image: new URL("@/assets/products/produto-03.jpeg", import.meta.url).href,
      benefits: ["Crescimento", "Anti-Queda", "Fortalecimento"],
      category: "crescimento",
    },
    {
      name: "Maria Bonita",
      description: "O segredo para cabelos saudáveis e deslumbrantes. Linha fitoativa que transforma seu tratamento capilar e revela a sua verdadeira beleza com ingredientes naturais.",
      image: new URL("@/assets/products/produto-04.jpeg", import.meta.url).href,
      benefits: ["Natural", "Fitoativos", "Saúde"],
      category: "hidratacao",
    },
    {
      name: "Shampoo e Balm Fitoativo Maria Bonita",
      description: "O shampoo fitoativo é a chave para uma limpeza profunda, diminuindo a oleosidade com ação refrescante. O balm controla oleosidade do couro cabeludo, deixando os fios leves, soltos e limpos.",
      image: new URL("@/assets/products/produto-05.jpeg", import.meta.url).href,
      benefits: ["Anti-Oleosidade", "Limpeza Profunda", "Frescor"],
      category: "hidratacao",
    },
    {
      name: "Kit Cronograma Capilar Fluence",
      description: "O tratamento completo que revitaliza seus fios da raiz às pontas. Sistema com shampoo purificante e máscaras de hidratação, nutrição e reconstrução para todos os tipos de cabelo.",
      image: new URL("@/assets/products/produto-06.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Nutrição", "Reconstrução"],
      category: "tratamentos",
    },
    {
      name: "Top Hair - Progressiva Passo Único",
      description: "Uma progressiva intensa com 0% formol, em apenas um passo. Respeito à saúde dos fios e couro cabeludo. Tratamento enquanto alisa, resultados naturais, hidratação e maleabilidade.",
      image: new URL("@/assets/products/produto-07.jpeg", import.meta.url).href,
      benefits: ["0% Formol", "Passo Único", "Hidratação"],
      category: "alisamento",
    },
    {
      name: "Plástica dos Fios",
      description: "Alinhamento perfeito e sem frizz. Tratamento termo-protetor com óleo de jojoba e D'panthenol que proporciona brilho espelhado e maciez intensa aos fios.",
      image: new URL("@/assets/products/produto-08.jpeg", import.meta.url).href,
      benefits: ["Alinhamento", "Anti-Frizz", "Brilho"],
      category: "alisamento",
    },
    {
      name: "Slick Absolute Retexturizador",
      description: "O liso perfeito não é mais um sonho, é uma realidade com Slick! Liso impecável com redução de volume absoluta e efeito iluminador que reflete a saúde dos fios.",
      image: new URL("@/assets/products/produto-09.jpeg", import.meta.url).href,
      benefits: ["Liso Perfeito", "Redução de Volume", "Iluminador"],
      category: "alisamento",
    },
    {
      name: "Slick Absolute - Fórmula Completa",
      description: "Fórmula poderosa com óleo de argan, óleo de jojoba e D-Pantenol que reestrutura a fibra capilar, garantindo resultado duradouro e cabelo visivelmente mais forte e hidratado.",
      image: new URL("@/assets/products/produto-10.jpeg", import.meta.url).href,
      benefits: ["Óleo de Argan", "Reestruturação", "Hidratação"],
      category: "alisamento",
    },
    {
      name: "Blend Vitamínico Mãe Terra",
      description: "Blend de vitaminas A, E, B5 com óleo de semente de abóbora e alecrim. Previne cabelos brancos, trata alopecia e estimula o crescimento. Tratamento altamente nutritivo e umectante.",
      image: new URL("@/assets/products/produto-11.jpeg", import.meta.url).href,
      benefits: ["Vitaminas", "Anti-Queda", "Crescimento"],
      category: "crescimento",
    },
    {
      name: "Linha Apotecário - Tratamento Completo",
      description: "Hidrata profundamente, restaura fios danificados, deixa o cabelo macio, leve e perfumado. Protege do frizz e do calor. Toque natural e brilho saudável.",
      image: new URL("@/assets/products/produto-12.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Restauração", "Proteção"],
      category: "hidratacao",
    },
    {
      name: "Murumuru - Reposição Lipídica",
      description: "Máscara bioativa para reposição lipídica. Nutritiva, elimina o ressecado e promove alinhamento capilar. Mais brilho, menos frizz. Perfeita para cabelos ressecados, secos e cutículas danificadas.",
      image: new URL("@/assets/products/produto-13.jpeg", import.meta.url).href,
      benefits: ["Reposição Lipídica", "Nutrição", "Alinhamento"],
      category: "hidratacao",
    },
    {
      name: "Patauá - Restauração CMC",
      description: "Máscara bioativa para restauração CMC. Fios mais resistentes, fortes e sem pontas duplas. Ótima para cabelos quebradiços e sem vida. Repõe massa para cabelos quimicamente tratados.",
      image: new URL("@/assets/products/produto-14.jpeg", import.meta.url).href,
      benefits: ["Restauração", "Força", "Anti-Quebra"],
      category: "tratamentos",
    },
    {
      name: "Chá Verde e Aloe Vera - Revitalizante",
      description: "Máscara bioativa revigorante e vitalizante. Aloe vera é completo para nutrição e revitalização capilar, repõe nutrientes necessários. O chá verde tonifica o couro cabeludo.",
      image: new URL("@/assets/products/produto-15.jpeg", import.meta.url).href,
      benefits: ["Revitalização", "Nutrição", "Tonificação"],
      category: "hidratacao",
    },
    {
      name: "Pequi - Nutrição e Força",
      description: "Máscara bioativa para nutrição e força. Ótima máscara anti-inflamatória que promove nutrição profunda e fortalecimento dos fios desde a raiz.",
      image: new URL("@/assets/products/produto-16.jpeg", import.meta.url).href,
      benefits: ["Nutrição", "Força", "Anti-Inflamatório"],
      category: "hidratacao",
    },
    {
      name: "Terrena - Tratamento Capilar",
      description: "Tratamento para caspa, foliculite, psoríase, dermatite, anti-queda e coceira. Shampoo energizante e condicionador fortificante com tônico laurador que revitaliza o couro cabeludo.",
      image: new URL("@/assets/products/produto-17.jpeg", import.meta.url).href,
      benefits: ["Anti-Caspa", "Anti-Queda", "Tratamento do Couro"],
      category: "tratamentos",
    },
    {
      name: "Nano Carbon System - Restauração Profissional",
      description: "Cabelos restaurados, alinhados e com brilho intenso! Sistema completo com shampoo, máscara intensive repair, repositor carbonic e finalizador para tratamento profissional.",
      image: new URL("@/assets/products/produto-18.jpeg", import.meta.url).href,
      benefits: ["Restauração", "Alinhamento", "Brilho"],
      category: "tratamentos",
    },
    {
      name: "Cauter - Sistema de Cauterização",
      description: "Tratamento profundo que sela, fortalece e devolve o brilho: isso é cauterização! Sistema completo que proporciona selagem das cutículas e recuperação da fibra capilar.",
      image: new URL("@/assets/products/produto-19.jpeg", import.meta.url).href,
      benefits: ["Cauterização", "Selagem", "Fortalecimento"],
      category: "tratamentos",
    },
    {
      name: "Top Hair - Progressiva Orgânica",
      description: "Respeito à saúde dos fios e couro cabeludo. Tratamento enquanto alisa, resultados naturais com hidratação, maleabilidade, segurança e versatilidade em passo único.",
      image: new URL("@/assets/products/produto-20.jpeg", import.meta.url).href,
      benefits: ["Orgânica", "Resultados Naturais", "Segurança"],
      category: "alisamento",
    },
    {
      name: "Transição Capilar - Ativador de Cachos",
      description: "Transforme seus cachos! Creme incrível que mantém seus cachos impecáveis, repara cabelos danificados e ajuda na retenção da umidade, deixando-os visivelmente saudáveis.",
      image: new URL("@/assets/products/produto-21.jpeg", import.meta.url).href,
      benefits: ["Definição de Cachos", "Hidratação", "Reparação"],
      category: "hidratacao",
    },
    {
      name: "Kit Home Care Mãe Terra",
      description: "Kit home care que reúne a força dos ativos amazônicos e do cerrado para nutrir, restaurar e revitalizar seus fios de forma natural com máscaras bioativas especializadas.",
      image: new URL("@/assets/products/produto-22.jpeg", import.meta.url).href,
      benefits: ["Natural", "Nutrição", "Revitalização"],
      category: "tratamentos",
    },
    {
      name: "Nano Carbon System - 5 Protocolos",
      description: "A linha Nano Carbon não é só um produto. São 5 protocolos profissionais: reposição de aminoácidos, carbox blindagem, cauterização, carboxterapia e blindagem orgânica.",
      image: new URL("@/assets/products/produto-23.jpeg", import.meta.url).href,
      benefits: ["Múltiplos Protocolos", "Profissional", "Restauração"],
      category: "tratamentos",
    },
    {
      name: "Kit Cronograma Aromacqua",
      description: "Kit cronograma com máscara de reconstrução perfeita para reconstruir e selar a fibra capilar. Reduz risco de quebra, reforça estrutura, repõe nutrientes e proporciona nutrição intensa.",
      image: new URL("@/assets/products/produto-24.jpeg", import.meta.url).href,
      benefits: ["Reconstrução", "Selagem", "Nutrição"],
      category: "tratamentos",
    },
    {
      name: "ClinicLiss - Repositor Hidrogênico",
      description: "Neutraliza, hidrata e reduz os danos causados por processos químicos. Equaliza o pH, corrige a porosidade e devolve elasticidade aos fios danificados.",
      image: new URL("@/assets/products/produto-25.jpeg", import.meta.url).href,
      benefits: ["Neutralização", "Hidratação", "Reparação"],
      category: "tratamentos",
    },
    {
      name: "Great Touch - Recuperação da Elasticidade",
      description: "Recupera a elasticidade e maciez dos fios. Reestrutura o interior da fibra capilar, promovendo cabelos mais resistentes, flexíveis e saudáveis.",
      image: new URL("@/assets/products/produto-26.jpeg", import.meta.url).href,
      benefits: ["Elasticidade", "Maciez", "Reestruturação"],
      category: "tratamentos",
    },
    {
      name: "Repositora de Carbono",
      description: "Melhor fixação da hidratação, brilho e maciez dos fios. Tratamento de recuperação hídrica profunda que sela os nutrientes e prolonga os resultados.",
      image: new URL("@/assets/products/produto-27.jpeg", import.meta.url).href,
      benefits: ["Fixação", "Hidratação", "Brilho"],
      category: "hidratacao",
    },
    {
      name: "ClinicLiss - Complexo Redutor",
      description: "Reduz o volume dos cabelos com aspecto natural. Botox capilar com óleos de castanhas do Brasil e manteiga de bacuri. Sela, nutre o córtex capilar e promove reposição lipídica.",
      image: new URL("@/assets/products/produto-28.jpeg", import.meta.url).href,
      benefits: ["Redução de Volume", "Botox", "Reposição Lipídica"],
      category: "alisamento",
    },
    {
      name: "Aromacqua Euphoria - Reconstrução",
      description: "Reconstrução profunda com aminoácidos que recuperam a elasticidade e maleabilidade. Reduz o risco de quebra e reforça a estrutura dos fios danificados.",
      image: new URL("@/assets/products/produto-29.jpeg", import.meta.url).href,
      benefits: ["Reconstrução", "Aminoácidos", "Elasticidade"],
      category: "tratamentos",
    },
    {
      name: "Aromacqua Plenitude - Nutrição",
      description: "Devolve a oleosidade natural do cabelo, formando um filme protetor ao longo dos fios. Umectação e nutrição intensa para cabelos ressecados e danificados.",
      image: new URL("@/assets/products/produto-30.jpeg", import.meta.url).href,
      benefits: ["Nutrição", "Umectação", "Proteção"],
      category: "hidratacao",
    },
    {
      name: "Aromacqua Sesence - Hidratação",
      description: "Proteção e hidratação intensa com óleos essenciais. Cabelos selados, saudáveis e com brilho intenso. Perfeita para todos os tipos de cabelo que precisam de hidratação profunda.",
      image: new URL("@/assets/products/produto-31.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Proteção", "Brilho"],
      category: "hidratacao",
    },
    {
      name: "ProResgate - Sistema Completo",
      description: "Restauração profunda para cabelos danificados e quimicamente tratados. Fios livres de pontas duplas com shampoo, máscara e finalizador. Sistema completo de reparação absoluta.",
      image: new URL("@/assets/products/produto-32.jpeg", import.meta.url).href,
      benefits: ["Restauração", "Sistema Completo", "Reparação"],
      category: "tratamentos",
    },
    {
      name: "Kit Cronograma Fluence Completo",
      description: "Um tratamento completo para o seu cabelo. Sistema de hidratação, nutrição e reconstrução que restaura a saúde dos fios. Inclui shampoo purificante e máscaras especializadas.",
      image: new URL("@/assets/products/produto-33.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Nutrição", "Reconstrução"],
      category: "tratamentos",
    },
    {
      name: "Monovin - Kit Crescimento Completo",
      description: "Ver cabelo caindo todo dia dói! É mais que estética, é autoestima. Monovin trata da raiz ao fio, devolvendo força, crescimento e segurança. Shampoo, máscara, tônico e suplemento.",
      image: new URL("@/assets/products/produto-34.jpeg", import.meta.url).href,
      benefits: ["Crescimento", "Anti-Queda", "Fortalecimento"],
      category: "crescimento",
    },
    {
      name: "Nano Carbon - Intensive Repair",
      description: "Com 21 aminoácidos essenciais e nanoqueratina, atua desde o córtex até a cutícula, reparando microlesões e combatendo a porosidade. Brilho, leveza e vitalidade restaurados.",
      image: new URL("@/assets/products/produto-35.jpeg", import.meta.url).href,
      benefits: ["21 Aminoácidos", "Nanoqueratina", "Reparação"],
      category: "tratamentos",
    },
    {
      name: "Nano Carbon System - Linha Completa",
      description: "Restauração profunda da fibra capilar desenvolvida para reconstruir, preencher e repor massa dos fios danificados por processos químicos, térmicos e agressões ambientais.",
      image: new URL("@/assets/products/produto-36.jpeg", import.meta.url).href,
      benefits: ["Restauração", "Reconstrução", "Reposição"],
      category: "tratamentos",
    },
    {
      name: "Bálsamo Serenice Aromacqua",
      description: "Um cuidado que vai além da beleza! Com óleo essencial de lavanda e óleo de coco babaçu, ele hidrata, nutre e equilibra os fios e o couro cabeludo. Deixa o cabelo macio, leve, com brilho e um aroma relaxante.",
      image: new URL("@/assets/products/produto-37.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Equilíbrio", "Aroma Relaxante"],
      category: "hidratacao",
    },
    {
      name: "Linha Mãe Terra Toctus",
      description: "A linha é rica em ativos naturais e orgânicos e conta com formulações compostas por ingredientes naturais. Vegano, natural e orgânico para o cuidado completo dos seus cabelos.",
      image: new URL("@/assets/products/produto-38.jpeg", import.meta.url).href,
      benefits: ["Natural", "Orgânico", "Vegano"],
      category: "tratamentos",
    },
    {
      name: "Shampoo e Condicionador Bioativo Mãe Terra",
      description: "Ingredientes naturais que promovem saúde e beleza aos fios. Copaíba, coco e patauá com óleos essenciais de lavanda, ylang ylang, alecrim e limão. Fórmula aromática e orgânica.",
      image: new URL("@/assets/products/produto-39.jpeg", import.meta.url).href,
      benefits: ["Bioativo", "Óleos Essenciais", "Orgânico"],
      category: "hidratacao",
    },
    {
      name: "Manteigas Corporais Mãe Terra",
      description: "Manteiga multifuncional para corpo e pele. Pequi com manteiga de cacau e óleo de abacate. Karité com manteiga de cupuaçu e óleos essenciais. Hidratação natural e intensa.",
      image: new URL("@/assets/products/produto-40.jpeg", import.meta.url).href,
      benefits: ["Corpo & Pele", "Natural", "Hidratação Intensa"],
      category: "hidratacao",
    },
    {
      name: "Shampoo Serenice Aromacqua",
      description: "Com base de óleos essenciais de lavanda e extrato de camomila, proporciona extrema hidratação aos fios, promove o bem estar, acalma e revigora no lavatório. Ação de limpeza suave e hidratante.",
      image: new URL("@/assets/products/produto-41.jpeg", import.meta.url).href,
      benefits: ["Hidratação", "Bem-Estar", "Limpeza Suave"],
      category: "hidratacao",
    },
  ];

  const filteredProducts =
    selectedCategory === "todos"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleBuyClick = (productName: string) => {
    const message = `Olá Izabela! Tenho interesse no produto: ${productName}. Pode me dar mais informações?`;
    const whatsappUrl = `https://wa.me/5594984214990?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        {/* Header */}
        <section className="hero-gradient grain-texture py-12 sm:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-primary mb-4 md:text-5xl animate-fade-in">
              Catálogo de Produtos
            </h1>
            <p className="text-base sm:text-lg text-foreground/80 max-w-2xl mx-auto animate-slide-up">
              Escolha os produtos ideais para o seu cuidado pessoal
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16">
          <div className="container mx-auto px-4">
            {/* Category Tabs */}
            <Tabs defaultValue="todos" className="mb-8 sm:mb-12" onValueChange={setSelectedCategory}>
              <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-6 sm:mb-8 h-auto gap-2">
                <TabsTrigger value="todos" className="py-2 sm:py-3 text-xs sm:text-sm">Todos</TabsTrigger>
                <TabsTrigger value="tratamentos" className="py-2 sm:py-3 text-xs sm:text-sm">Tratamentos</TabsTrigger>
                <TabsTrigger value="hidratacao" className="py-2 sm:py-3 text-xs sm:text-sm">Hidratação</TabsTrigger>
                <TabsTrigger value="alisamento" className="py-2 sm:py-3 text-xs sm:text-sm">Alisamento</TabsTrigger>
                <TabsTrigger value="crescimento" className="py-2 sm:py-3 text-xs sm:text-sm">Crescimento</TabsTrigger>
              </TabsList>

              <TabsContent value={selectedCategory}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {filteredProducts.map((product, index) => (
                    <ProductCard
                      key={index}
                      {...product}
                      onBuyClick={() => handleBuyClick(product.name)}
                    />
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground">
                      Nenhum produto encontrado nesta categoria.
                    </p>
                  </div>
                )}
              </TabsContent>
            </Tabs>

            {/* CTA */}
            <div className="mt-16 text-center bg-muted/30 rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Não encontrou o que procura?
              </h3>
              <p className="text-foreground/80 mb-6">
                Entre em contato comigo e vou te ajudar a encontrar o produto perfeito!
              </p>
              <WhatsAppButton
                phoneNumber="5594984214990"
                message="Olá Izabela! Preciso de ajuda para escolher um produto."
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

export default Produtos;
