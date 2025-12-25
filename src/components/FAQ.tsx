import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const FAQ = () => {
  const faqs = [
    {
      question: "Os produtos são originais?",
      answer: "Sim! Trabalho exclusivamente com produtos originais da Dornelas Cosméticos e marcas parceiras oficiais. Todos os itens possuem garantia de procedência.",
    },
    {
      question: "Como funciona a entrega?",
      answer: "Realizo entregas na região com prazo combinado diretamente pelo WhatsApp. Para outras localidades, trabalhamos com envio pelos Correios ou transportadora.",
    },
    {
      question: "Quais formas de pagamento aceita?",
      answer: "Aceito Pix, transferência bancária, cartão de crédito e débito. Também posso parcelar dependendo do valor da compra.",
    },
    {
      question: "Como saber qual produto é ideal para mim?",
      answer: "É só me chamar no WhatsApp! Vou te fazer algumas perguntas sobre seu tipo de pele/cabelo e indicar os produtos mais adequados para você.",
    },
    {
      question: "Tem garantia ou troca?",
      answer: "Sim! Se houver algum problema com o produto, entramos em contato com a marca para troca ou solução. Seu bem-estar é minha prioridade.",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-4 text-center md:text-4xl">
            Dúvidas Frequentes
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            Respostas rápidas para as perguntas mais comuns
          </p>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 card-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-primary hover:text-secondary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/80 pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-8 sm:mt-12 text-center">
            <p className="text-base sm:text-lg text-foreground/80 mb-4 sm:mb-6">
              Ainda tem dúvidas? Fale comigo!
            </p>
            <WhatsAppButton 
              phoneNumber="5594984214990"
              message="Olá Izabela! Tenho uma dúvida sobre os produtos."
              className="w-full sm:w-auto"
            >
              💬 Conversar agora
            </WhatsAppButton>
          </div>
        </div>
      </div>
    </section>
  );
};
