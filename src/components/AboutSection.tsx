import { Heart, Award, Users } from "lucide-react";

export const AboutSection = () => {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 sm:mb-6 md:text-4xl">
            Sobre mim
          </h2>
          <p className="text-base sm:text-lg text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
            Olá! Sou a <strong>Izabela Mendes</strong>, apaixonada por beleza e bem-estar.
            Como consultora oficial <strong>Dornelas Cosméticos</strong>, tenho o prazer de 
            ajudar pessoas a encontrarem os produtos ideais para seus cuidados pessoais.
          </p>
          <p className="text-base sm:text-lg text-foreground/80 mb-8 sm:mb-12 leading-relaxed">
            Acredito que beleza vai além da aparência – é sobre autoestima, autocuidado 
            e se sentir bem consigo mesma. Meu compromisso é oferecer produtos originais, 
            atendimento personalizado e dicas que realmente fazem a diferença.
          </p>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="font-semibold text-primary">Compromisso</h3>
              <p className="text-sm text-muted-foreground">
                Produtos originais e atendimento de qualidade
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-accent/20 flex items-center justify-center">
                <Award className="h-8 w-8 text-accent" />
              </div>
              <h3 className="font-semibold text-primary">Excelência</h3>
              <p className="text-sm text-muted-foreground">
                Marcas renomadas e resultados comprovados
              </p>
            </div>

            <div className="flex flex-col items-center gap-3">
              <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-primary">Confiança</h3>
              <p className="text-sm text-muted-foreground">
                Relacionamento próximo e transparente
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
