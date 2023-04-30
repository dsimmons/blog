import type { MDXComponents } from "mdx/types";

import { A as a } from "app/components/a";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    a,
  } as MDXComponents;
}
