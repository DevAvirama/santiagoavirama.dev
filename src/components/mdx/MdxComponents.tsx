import * as React from "react";
import type { MDXRemoteProps } from "next-mdx-remote/rsc";
import { MermaidDiagram } from "@/components/mdx/MermaidDiagram";

function extractTextFromChildren(node: React.ReactNode): string {
  if (typeof node === "string" || typeof node === "number") {
    return String(node);
  }
  if (Array.isArray(node)) {
    return node.map(extractTextFromChildren).join("");
  }
  if (React.isValidElement<{ children?: React.ReactNode }>(node)) {
    return extractTextFromChildren(node.props.children);
  }
  return "";
}

export const mdxComponents: NonNullable<MDXRemoteProps["components"]> = {
  h2: ({ children, ...props }: React.ComponentPropsWithoutRef<"h2">) => (
    <h2
      className="mt-12 mb-4 border-b border-slate-800/80 pb-3 text-2xl font-bold tracking-tight text-white first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-3 text-lg font-semibold tracking-tight text-cyan-400"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 text-base leading-relaxed text-slate-300" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-slate-300 marker:text-cyan-400"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-slate-300 marker:font-mono marker:text-cyan-400"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 leading-relaxed text-slate-300" {...props}>
      {children}
    </li>
  ),
  strong: ({
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-white" {...props}>
      {children}
    </strong>
  ),
  a: ({
    children,
    href,
    ...props
  }: React.ComponentPropsWithoutRef<"a">) => {
    const isExternal = typeof href === "string" && href.startsWith("http");
    return (
      <a
        href={href}
        {...(isExternal
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="font-mono text-sm font-medium text-cyan-400 underline decoration-cyan-500/40 underline-offset-4 transition-colors hover:text-cyan-300"
        {...props}
      >
        {children}
      </a>
    );
  },
  blockquote: ({
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"blockquote">) => (
    <blockquote
      className="my-6 rounded-r-2xl border-l-2 border-cyan-400 bg-slate-900/60 py-3 pr-4 pl-4 text-sm italic text-slate-300 backdrop-blur-md"
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }: React.ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-2xl border border-slate-800/90 bg-slate-900/45 backdrop-blur-md">
      <table className="w-full border-collapse text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.ComponentPropsWithoutRef<"thead">) => (
    <thead
      className="border-b border-slate-800 bg-slate-950/80 font-mono text-xs text-cyan-300"
      {...props}
    >
      {children}
    </thead>
  ),
  th: ({ children, ...props }: React.ComponentPropsWithoutRef<"th">) => (
    <th className="px-4 py-3 font-semibold" {...props}>
      {children}
    </th>
  ),
  td: ({ children, ...props }: React.ComponentPropsWithoutRef<"td">) => (
    <td
      className="border-t border-slate-800/70 px-4 py-3 text-slate-300"
      {...props}
    >
      {children}
    </td>
  ),
  pre: ({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) => {
    const childArray = React.Children.toArray(children);
    for (const child of childArray) {
      if (
        React.isValidElement<{ className?: string; children?: React.ReactNode }>(
          child,
        )
      ) {
        const childClassName =
          typeof child.props.className === "string"
            ? child.props.className
            : "";
        if (childClassName.includes("language-mermaid")) {
          const chartText = extractTextFromChildren(child.props.children);
          return <MermaidDiagram chart={chartText} />;
        }
      }
    }

    return (
      <pre
        className="my-6 overflow-x-auto rounded-2xl border border-slate-800/90 bg-slate-950/90 p-4 font-mono text-xs leading-relaxed text-slate-200 shadow-inner"
        {...props}
      >
        {children}
      </pre>
    );
  },
  code: ({
    className,
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"code">) => {
    const isBlockCode =
      typeof className === "string" && className.includes("language-");
    if (isBlockCode) {
      return (
        <code className={className} {...props}>
          {children}
        </code>
      );
    }

    return (
      <code
        className="rounded border border-cyan-500/25 bg-cyan-500/10 px-1.5 py-0.5 font-mono text-[0.85em] text-cyan-300"
        {...props}
      >
        {children}
      </code>
    );
  },
};
