import nextMdx from "@next/mdx";

const withMdx = nextMdx();

/** @type {import("next").NextConfig} */
export default withMdx({
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
});
