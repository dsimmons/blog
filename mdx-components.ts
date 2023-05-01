import type { MDXComponents } from "mdx/types";

import { A as a } from "app/components/a";
import { Blockquote as blockquote } from "app/components/blockquote";
import { Code as code } from "app/components/code";
import { H1 as h1 } from "app/components/h1";
import { H2 as h2 } from "app/components/h2";
import { H3 as h3 } from "app/components/h3";
import { H4 as h4 } from "app/components/h4";
import { H5 as h5 } from "app/components/h5";
import { H6 as h6 } from "app/components/h6";
import { HR as hr } from "app/components/hr";
import { LI as li } from "app/components/li";
import { OL as ol } from "app/components/ol";
import { P as p } from "app/components/p";
import { UL as ul } from "app/components/ul";
import { Snippet } from "app/components/snippet";

export function useMDXComponents(components: MDXComponents) {
  return {
    ...components,
    a,
    blockquote,
    code,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    hr,
    li,
    ol,
    p,
    pre: Snippet,
    ul,
    Snippet,
  } as MDXComponents;
}
