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
    socialLinks: [
      { icon: "github", link: "https://github.com/blueur" },
      {
        icon: {
          // https://github.com/vuejs/vitepress/issues/1214#issuecomment-1220654629
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>GitLab</title><path d="m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z"/></svg>',
        },
        link: "https://gitlab.com/blueur",
      },
    ],
  },
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("..", import.meta.url)),
      },
    },
  },
});
