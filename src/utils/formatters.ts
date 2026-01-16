export function formatCurrency(value: number, locale = 'es-MX', currency = 'MXN') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(value)
}