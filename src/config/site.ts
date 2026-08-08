/**
 * CONFIGURAÇÃO DO CLIENTE
 * ------------------------------------------------------------------
 * Este é o ÚNICO arquivo que precisa ser editado para adaptar o site
 * a uma marcenaria nova (além do conteúdo em `src/content/`:
 * serviços, trabalhos e avaliações). Nenhum componente precisa mudar.
 */

export const site = {
  /** Nome da marcenaria (menu, rodapé, metadados) */
  name: "Ofício Template",

  /** Frase principal do site: use as palavras que o cliente pesquisa no Google */
  tagline: "Móveis sob medida que duram gerações",

  /** Descrição curta: meta tag de SEO e topo da página */
  description:
    "Planejamos, fabricamos e instalamos móveis em madeira maciça para a sua casa. Peça seu orçamento pelo WhatsApp.",

  /** URL final do site (canonical, sitemap e dados estruturados) */
  /** IMPORTANTE: links de exemplo. example.com é domínio reservado (IANA) e não
      pertence a ninguém. Troque tudo antes de publicar para um cliente. */
  url: "https://oficio.cluyverth.com",

  /** WhatsApp com DDI + DDD, somente números */
  phone: "5511999999999",

  /** Telefone formatado para exibição no site */
  phoneDisplay: "(11) 99999-9999",

  /** Mensagem pré-preenchida dos botões do WhatsApp */
  whatsappMessage: "Olá! Vi o site de vocês e gostaria de fazer um orçamento.",

  email: "contato@example.com",

  /** Endereço de exemplo (Marco Zero do Recife, ponto público): o mapa no "Sobre"
      segue este endereço. Troque pelo endereço real do cliente quando vender. */
  address: {
    street: "Praça Rio Branco, s/n",
    city: "Recife",
    state: "PE",
    zip: "50030-230",
  },

  hours: "Seg a Sex, 8h às 18h · Sáb, 8h às 12h",

  instagram: "https://example.com/instagram",

  /** Link do perfil no Google (avaliações): substitua pelo do cliente */
  googleUrl: "https://example.com/avaliacoes",

  /** Cores da identidade visual do cliente (hex) */
  colors: {
    primary: "#8B5A2B", // destaques, ícones e títulos de seção
    primaryDark: "#6F4521", // hover dos destaques
    deep: "#2A1A0E", // fundos escuros (hero, rodapé, CTA)
  },

  /** Números de destaque da seção "Sobre" */
  stats: [
    { value: "15+", label: "anos de oficina" },
    { value: "500+", label: "projetos entregues" },
    { value: "100%", label: "peças sob medida" },
  ],

  /** Parágrafos da seção "Sobre" */
  about: [
    "Há mais de 15 anos transformando madeira em móveis que acompanham a vida das famílias. Cada peça é desenhada junto com o cliente, cortada, montada e finalizada na nossa própria oficina.",
    "Trabalhamos com madeira maciça e compensados de primeira linha, acabamento em verniz, laca ou cera, com prazo combinado e garantia de 1 ano no serviço.",
  ],

  /** Perguntas frequentes (viram dados estruturados para o Google) */
  faq: [
    {
      q: "Como funciona o orçamento?",
      a: "Mande uma mensagem no WhatsApp com o que você precisa (medidas, ambiente, ideia). Em até 1 dia útil você recebe o orçamento, sem compromisso.",
    },
    {
      q: "Qual o prazo de entrega?",
      a: "Depende do projeto: móveis simples levam de 2 a 3 semanas; cozinhas e projetos maiores, de 4 a 8 semanas. O prazo é combinado antes de começar e registrado no contrato.",
    },
    {
      q: "Vocês tiram medidas em domicílio?",
      a: "Sim. Depois do orçamento inicial, agendamos uma visita para tirar as medidas e alinhar os detalhes do projeto no local.",
    },
    {
      q: "Qual a garantia do serviço?",
      a: "Todos os serviços têm garantia de 1 ano contra defeitos de fabricação e instalação.",
    },
    {
      q: "Quais materiais vocês usam?",
      a: "Madeira maciça (cumaru, carvalho, freijó), compensados navais e MDF de primeira linha, com ferragens de marcas reconhecidas.",
    },
  ],
} as const;
