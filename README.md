# oficio-template

Template de site para marcenarias e oficinas: home com hero, serviços, avaliações
do Google com fotos, sobre com mapa e FAQ; página de projetos com galeria e
lightbox; política de privacidade em conformidade com a LGPD. Conversão direta
para WhatsApp.

Feito com **Astro 7 + Bun + Tailwind CSS 4 + TypeScript**. Sem banco, sem backend,
~0 JavaScript no navegador: carrega rápido e pontua forte em SEO (rich results via
JSON-LD, sitemap e meta tags automáticos).

## Rodando

```sh
bun install
bun run dev      # desenvolvimento em http://localhost:4321
bun run build    # gera o site estático em dist/
bun run preview  # serve o build localmente
```

## Como funciona o template

Tudo que muda de cliente para cliente está em **2 lugares**:

1. `src/config/site.ts`: nome, telefone, endereço, cor da marca, textos, FAQ.
2. `src/content/`: o conteúdo, em arquivos Markdown:
   - `services/`: serviços oferecidos (título, ícone, foto ilustrativa, descrição)
   - `portfolio/`: projetos (fotos, título, tags, ano, descrição)
   - `reviews/`: avaliações do Google (nome, estrelas, data, link, destaque, foto)

O código (componentes, layout, estilos) não precisa ser tocado. A ordem das seções
da página é definida em `src/pages/index.astro`: reordene movendo linhas.

### WhatsApp

Todos os botões usam `src/lib/whatsapp.ts` e abrem
`https://wa.me/<telefone>?text=<mensagem>` com a mensagem pré-preenchida de
`site.whatsappMessage`. Clicou → conversa direta com o marceneiro. Sem API, sem custo.

## Checklist: cliente novo (~30 min)

- [ ] `src/config/site.ts`: nome, tagline, descrição, URL, WhatsApp (DDI+DDD, só números),
      endereço, horário, Instagram, cores (hex), stats, textos e FAQ
- [ ] `src/content/services/`: ajustar os serviços (ou excluir/renomear arquivos)
- [ ] `src/content/portfolio/`: trocar as fotos de exemplo (Unsplash) pelas fotos
      reais dos clientes; cada projeto aceita várias fotos (`images:`), a 1ª é a capa
      do card (a imagem fica ao lado do `.md`; qualquer formato comum serve, o Astro otimiza)
- [ ] `src/content/reviews/`: colar as avaliações reais do Google; marcar
      `featured: true` apenas nas melhores (só elas aparecem na home, com a foto do
      projeto em `image:`); trocar o `googleUrl` pelo link do perfil de cada avaliador
      e o `site.googleUrl` pelo perfil da empresa
- [ ] `public/favicon.svg`: trocar pela marca do cliente (opcional)
- [ ] `public/robots.txt`: conferir a URL do sitemap
- [ ] Deploy (abaixo)

### Dicas

- `site.tagline` e `site.description` são o que o Google mostra: use as palavras que
  os clientes pesquisam ("marcenaria em <cidade>", "móveis planejados").
- As avaliações manuais alimentam o JSON-LD (`aggregateRating` + reviews) e o FAQ vira
  `FAQPage`: ambos geram rich results no Google automaticamente.
- Trocar a cor da marca = 3 hex em `site.ts`; nada de CSS.
- O cliente precisa de um **Google Business Profile** com avaliações reais para os
  links "Ver no Google" fazerem sentido.

## Deploy (grátis)

Site 100% estático. Build: `bun run build` (saída em `dist/`). Qualquer um serve:

- **Netlify**: build command `bun run build`, publish directory `dist`
- **Vercel**: framework preset Astro, output `dist`
- **Cloudflare Pages**: build `bun run build`, output `dist`

## Estrutura

```
src/
├── config/site.ts              ← dados do cliente (o que muda)
├── content.config.ts           ← schemas das collections (validação)
├── content/                    ← serviços, projetos e avaliações (md + fotos)
├── lib/                        ← helpers (WhatsApp, formatação)
├── components/
│   ├── ui/                     ← Icon, Stars, WhatsAppButton, SectionHeading
│   ├── sections/               ← Hero, Servicos, Avaliacoes, Sobre, Faq, CTA
│   ├── Navbar.astro
│   ├── Footer.astro
│   └── FloatingWhatsApp.astro  ← botão fixo no canto da tela
├── layouts/Base.astro          ← head SEO + JSON-LD + cores do cliente
└── pages/                      ← index (home), projetos, privacidade e 404
```

### Fotos de exemplo

As fotos do template vêm do [Unsplash](https://unsplash.com) (licença livre para uso
comercial, sem atribuição obrigatória). Antes de entregar ao cliente, troque pelas
fotos reais dos trabalhos, com autorização por escrito do cliente para uso de imagem
(LGPD e lei de direitos de imagem).
