const formatter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

export function formatPrice(cents: number): string {
  const price = cents / 100;
  return formatter.format(price);
}
