import type { MDXComponents } from "mdx/types";

import { A as a } from "app/components/a";
import { H1 as h1 } from "app/components/h1";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    a,
    h1,
  } as MDXComponents;
}
