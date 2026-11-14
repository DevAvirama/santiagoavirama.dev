"use client";

import { motion, type HTMLMotionProps } from "framer-motion";

export type MotionTag = "div" | "article" | "header" | "li" | "p" | "span";

type MotionElementProps = HTMLMotionProps<"div"> & {
  as?: MotionTag;
};

/**
 * Renderiza una etiqueta `motion.*` estática según `as` para evitar
 * componentes dinámicos durante el render y cumplir con React Compiler / ESLint.
 */
export function MotionElement({ as = "div", ...props }: MotionElementProps) {
  switch (as) {
    case "article":
      return <motion.article {...(props as HTMLMotionProps<"article">)} />;
    case "header":
      return <motion.header {...(props as HTMLMotionProps<"header">)} />;
    case "li":
      return <motion.li {...(props as HTMLMotionProps<"li">)} />;
    case "p":
      return <motion.p {...(props as HTMLMotionProps<"p">)} />;
    case "span":
      return <motion.span {...(props as HTMLMotionProps<"span">)} />;
    default:
      return <motion.div {...props} />;
  }
}
