import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DevOps",
  description: "DevOps class at HEIG-VD",
  cleanUrls: true,
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  srcExclude: ["**/README.md"],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    footer: {
      copyright:
        '<a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank"><img alt="CC BY-NC-SA 4.0" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" /></a>2023-present © <a href="https://davidtang.ch" target="_blank">David Tang</a>',
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
        text: "Outils",
        collapsed: true,
        items: [{ text: "Kubernetes", link: "/tools/kubernetes" }],
      },
      {
        text: "Cours",
        collapsed: true,
        items: [
          { text: "Introduction", link: "/lessons/introduction" },
          { text: "Code", link: "/lessons/code" },
          { text: "Artefact", link: "/lessons/artefact" },
          { text: "Développement", link: "/lessons/dev" },
          { text: "Test automatisé", link: "/lessons/test" },
          { text: "CI/CD", link: "/lessons/cicd" },
          {
            text: "Orchestration",
            link: "/lessons/orchestration",
          },
          { text: "Déploiement", link: "/lessons/deploy" },
          { text: "Terraform", link: "/lessons/terraform" },
          { text: "GitOps", link: "/lessons/gitops" },
          { text: "Observabilité", link: "/lessons/observability" },
          { text: "Télémesure", link: "/lessons/telemetry" },
          { text: "DevSecOps", link: "/lessons/devsecops" },
          { text: "Ingénierie du chaos", link: "/lessons/chaos" },
          {
            text: "Ingénierie de la fiabilité des sites",
            link: "/lessons/sre",
          },
          { text: "Présentation", link: "/lessons/presentation" },
        ],
      },
      {
        text: "Laboratoires",
        collapsed: true,
        items: [
          { text: "01 Outils", link: "/labs/tools" },
          { text: "02 Docker", link: "/labs/docker" },
          { text: "03 Compose", link: "/labs/compose" },
          { text: "04 CI/CD", link: "/labs/cicd" },
          { text: "05 Kubernetes", link: "/labs/kubernetes" },
          { text: "06 CI/CD Java", link: "/labs/cicd-java" },
          { text: "07 Kubernetes & Helm", link: "/labs/kubernetes-helm" },
          { text: "08 Release", link: "/labs/release" },
          { text: "09 Logs", link: "/labs/logs" },
          { text: "10 Métriques", link: "/labs/metrics" },
          { text: "11 Traces", link: "/labs/traces" },
          { text: "12 Observabilité", link: "/labs/observability" },
        ],
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
      {
        icon: "linkedin",
        link: "https://www.linkedin.com/in/davidtangch/",
      },
      {
        icon: {
          // https://icon-sets.iconify.design/ic/baseline-email/
          svg: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Email</title><path fill="currentColor" d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5l-8-5V6l8 5l8-5v2z"/></svg>',
        },
        link: "mailto:david.tang@heig-vd.ch",
      },
    ],
  },
});
