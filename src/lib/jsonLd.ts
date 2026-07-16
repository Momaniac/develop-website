/**
 * Serializa datos para un <script type="application/ld+json"> escapando `<`,
 * de modo que un valor que contenga `</script>` no pueda romper el contexto de
 * script (XSS). Hoy los datos son estáticos, pero esto blinda el patrón para
 * cuando algún dato editable (CMS) entre al schema.
 */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
