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
      className="mt-12 mb-4 border-b border-zinc-800 pb-3 text-2xl font-bold tracking-tight text-zinc-100 first:mt-0"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: React.ComponentPropsWithoutRef<"h3">) => (
    <h3
      className="mt-8 mb-3 text-lg font-semibold tracking-tight text-emerald-400"
      {...props}
    >
      {children}
    </h3>
  ),
  p: ({ children, ...props }: React.ComponentPropsWithoutRef<"p">) => (
    <p className="my-4 text-base leading-relaxed text-zinc-300" {...props}>
      {children}
    </p>
  ),
  ul: ({ children, ...props }: React.ComponentPropsWithoutRef<"ul">) => (
    <ul
      className="my-4 list-disc space-y-2 pl-6 text-base leading-relaxed text-zinc-300 marker:text-emerald-400"
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: React.ComponentPropsWithoutRef<"ol">) => (
    <ol
      className="my-4 list-decimal space-y-2 pl-6 text-base leading-relaxed text-zinc-300 marker:font-mono marker:text-emerald-400"
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: React.ComponentPropsWithoutRef<"li">) => (
    <li className="pl-1 leading-relaxed text-zinc-300" {...props}>
      {children}
    </li>
  ),
  strong: ({
    children,
    ...props
  }: React.ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-semibold text-zinc-100" {...props}>
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
      className="my-6 rounded-r-xl border-l-2 border-emerald-400 bg-zinc-900/60 py-3 pr-4 pl-4 text-sm italic text-zinc-300"
      {...props}
    >
      {children}
    </blockquote>
  ),
  table: ({ children, ...props }: React.ComponentPropsWithoutRef<"table">) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-zinc-800">
      <table className="w-full border-collapse text-left text-sm" {...props}>
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: React.ComponentPropsWithoutRef<"thead">) => (
    <thead
      className="border-b border-zinc-800 bg-zinc-900/80 font-mono text-xs text-zinc-300"
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
      className="border-t border-zinc-800/70 px-4 py-3 text-zinc-300"
      {...props}
    >
      {children}
    </td>
  ),
  pre: ({ children, ...props }: React.ComponentPropsWithoutRef<"pre">) => {
    if (
      React.isValidElement<{ className?: string; children?: React.ReactNode }>(
        children,
      )
    ) {
      const childClassName = children.props.className ?? "";
      if (childClassName.includes("language-mermaid")) {
        const chartText = extractTextFromChildren(children.props.children);
        return <MermaidDiagram chart={chartText} />;
      }
    }

    return (
      <pre
        className="my-6 overflow-x-auto rounded-xl border border-zinc-800 bg-zinc-900/90 p-4 font-mono text-xs leading-relaxed text-zinc-200"
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
    const isMermaid =
      typeof className === "string" && className.includes("language-mermaid");
    if (isMermaid) {
      return <MermaidDiagram chart={extractTextFromChildren(children)} />;
    }

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
        className="rounded border border-zinc-800 bg-zinc-900 px-1.5 py-0.5 font-mono text-[0.85em] text-emerald-300"
        {...props}
      >
        {children}
      </code>
    );
  },
};
