import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname });

const eslintConfig = [
  { ignores: [".next/**", "node_modules/**", "auditoria/**", "next-env.d.ts"] },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // La marca del ecosistema se escribe "//TODO Academy" (empieza con //), lo que
      // dispara falsos positivos de esta regla al usarla como texto JSX. Es intencional.
      "react/jsx-no-comment-textnodes": "off",
      // Comillas tipográficas decorativas («"») en citas/testimonios: intencionales.
      "react/no-unescaped-entities": "off",
    },
  },
];

export default eslintConfig;
