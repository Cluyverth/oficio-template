import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

/** Serviços oferecidos pela marcenaria (src/content/services/*.md) */
const services = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/services" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      icon: z.enum([
        "moveis",
        "cozinha",
        "armarios",
        "portas",
        "escadas",
        "restauro",
      ]),
      /** foto ilustrativa do serviço (opcional) */
      image: image().optional(),
    }),
});

/** Trabalhos realizados (src/content/portfolio/*.md) */
const portfolio = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/portfolio" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** fotos do projeto (a 1ª é a capa do card) */
      images: z.array(image()).min(1),
      tags: z.array(z.string()).default([]),
      year: z.number().int().min(1900).max(2100),
    }),
});

/** Avaliações do Google (src/content/reviews/*.md) */
const reviews = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/reviews" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      stars: z.number().int().min(1).max(5),
      date: z.coerce.date(),
      googleUrl: z.string().url(),
      /** true = aparece na página inicial (escolha os melhores) */
      featured: z.boolean().default(false),
      /** foto do projeto (opcional); use com consentimento do cliente */
      image: image().optional(),
    }),
});

export const collections = { services, portfolio, reviews };
