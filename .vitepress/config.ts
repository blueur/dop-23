import { defineConfig } from "vitepress";
import { fileURLToPath, URL } from "node:url";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DevOps",
  description: "DevOps class at HEIG-VD",
  cleanUrls: true,
  lastUpdated: true,
  srcExclude: ["**/README.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      copyright:
        'Copyright © 2023-present <a href="https://github.com/blueur" target="_blank">David Tang</a>',
    },
    lastUpdated: {
      formatOptions: {
        dateStyle: "full",
        hourCycle: "h23",
        timeStyle: "short",
      },
    },
    nav: [{ text: "Home", link: "/" }],
    outline: {
      level: "deep",
    },
    search: {
      provider: "local",
    },
    sidebar: [
      {
        text: "Lessons",
        items: [{ text: "Introduction", link: "/lessons/introduction" }],
      },
      {
        text: "Labs",
        items: [{ text: "Tools", link: "/labs/tools" }],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/blueur" }],
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("..", import.meta.url)),
      },
    },
  },
});
