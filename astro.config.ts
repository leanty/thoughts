import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import expressiveCode from "astro-expressive-code";

export default defineConfig({
  site: "https://leanty.github.io",
  output: "static",
  integrations: [
    sitemap(),

    //     expressiveCode({
    //   themes: ['github-light'],
    //   // 移除 plugins 数组
    // }),

    mdx({
      remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeKatex],
      shikiConfig: {
        theme: 'github-light',
      },
    }),

  ],
});


