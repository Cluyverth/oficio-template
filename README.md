# oficio-template

Site profissional para negócios de serviço: marcenarias, encanadores, eletricistas,
reformas. Um template pensado para ser entregue a clientes reais: todos os dados do
negócio ficam em um único arquivo de configuração e o conteúdo (serviços, projetos,
avaliações) é editado em Markdown.

[![Astro](https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white)](https://astro.build)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Bun](https://img.shields.io/badge/Bun-1.3-F9F1E1?logo=bun&logoColor=white)](https://bun.sh)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

## Screenshots

| Home | Projetos |
| --- | --- |
| ![Home](docs/screenshot-home.webp) | ![Projetos](docs/screenshot-projetos.webp) |

## O que o site entrega

- **Conversão direta para WhatsApp**: botões flutuantes, no header, no hero e em
  cada serviço/projeto, com mensagem pré-preenchida por contexto (ex.: "Olá! Quero
  um orçamento para cozinhas planejadas."). Sem formulário, sem backend.
- **Página de projetos com galeria**: um card por projeto, cada um com várias fotos
  que abrem em um lightbox com navegação.
- **Avaliações do Google com curadoria**: só as melhores avaliações aparecem na home
  (flag `featured`), com a foto do projeto citado.
- **Sobre com mapa**: Google Maps embutido a partir do endereço da configuração.
- **Política de privacidade em conformidade com a LGPD**: página pronta, com direitos
  do titular e tratamento de imagens.
- **SEO de verdade**: dados estruturados JSON-LD (negócio local, aggregate rating,
  reviews e FAQ), sitemap.xml automático, Open Graph e meta tags.
- **Performance**: site 100% estático, quase zero JavaScript no navegador, imagens
  otimizadas automaticamente pelo Astro.

## Stack

| Camada | Tecnologia |
| --- | --- |
| Framework | Astro 7 |
| Estilo | Tailwind CSS 4 |
| Runtime/package manager | Bun |
| Build | `astro build` (saída estática em `dist/`) |
| Extras | @astrojs/sitemap |

## Como rodar

```sh
bun install
bun run dev       # desenvolvimento em http://localhost:4321
bun run build     # gera o site estático em dist/
bun run preview   # serve o build localmente
```

## Personalização para um cliente (~30 minutos)

Tudo que muda de negócio para negócio está em 2 lugares:

1. **`src/config/site.ts`** — nome, tagline, telefone/WhatsApp, endereço, horário,
   Instagram, cores da marca (3 hex), textos, estatísticas e FAQ. É o único arquivo
   que precisa de edição para adaptar o site.
2. **`src/content/`** — conteúdo em Markdown:
   - `services/` — serviços (título, ícone, foto ilustrativa, descrição);
   - `portfolio/` — projetos da galeria (várias fotos por projeto, título, tags, ano);
   - `reviews/` — avaliações do Google (nome, estrelas, data, link, `featured` e foto).

A ordem das seções da home é definida em `src/pages/index.astro`.

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
│   ├── FloatingWhatsApp.astro  ← botão fixo do WhatsApp
│   └── BackToTop.astro         ← botão voltar ao topo
├── layouts/Base.astro          ← head SEO + JSON-LD + cores do cliente
└── pages/                      ← index (home), projetos, privacidade e 404
```

## Deploy

### Coolify (VPS própria)

O repositório já inclui um [`nixpacks.toml`](nixpacks.toml) que fixa o build
(`bun install` + `bun run build`). No Coolify:

1. **Create New Resource** → **Public Repository** → cole a URL do repositório.
2. Build Pack: **Nixpacks** (padrão).
3. Marque **Is it a static site?** e defina **Publish Directory** como `/dist`
   (o Coolify serve o site com Nginx).
4. Defina o domínio e clique em **Deploy**.

A cada `git push`, o Coolify rebuila e publica automaticamente. Alternativa para
Vercel/Netlify/Cloudflare Pages: build command `bun run build`, publish directory `dist`.

### Outros provedores

- **Netlify** — build command `bun run build`, publish directory `dist`
- **Vercel** — framework preset Astro, output `dist`
- **Cloudflare Pages** — build `bun run build`, output `dist`

## LGPD

O template inclui uma [política de privacidade](src/pages/privacidade.astro) pronta:
o site não coleta dados automaticamente (sem formulários e sem cookies de
rastreamento), as conversas acontecem no WhatsApp do cliente e as fotos de projetos e
depoimentos são publicadas somente com consentimento. Antes de publicar, revise o
nome do controlador e o e-mail de contato em `src/config/site.ts`.

## Créditos das fotos de exemplo

As fotos do template vêm do [Unsplash](https://unsplash.com) (licença livre para uso
comercial, sem atribuição obrigatória). Substitua pelas fotos reais dos trabalhos do
cliente, com autorização de uso de imagem.

## Licença

[MIT](LICENSE) © 2026 Cluyverth Pereira
