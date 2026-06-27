// Declaraciones para imports de hojas de estilo (CSS global y módulos).
declare module "*.css";
declare module "*.css" {
  const content: { [className: string]: string };
  export default content;
}
