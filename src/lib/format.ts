/** Formata data por extenso em pt-BR: "março de 2026" */
export function formatMonth(date: Date): string {
  return new Intl.DateTimeFormat("pt-BR", {
    month: "long",
    year: "numeric",
  }).format(date);
}

/** Média com 1 casa decimal em formato brasileiro: "4,9" */
export function formatRating(value: number): string {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 1,
    maximumFractionDigits: 1,
  });
}
