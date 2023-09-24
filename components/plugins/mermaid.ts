/**
 * Must be loaded after markdown plugin
 *
 * https://github.com/zjffun/reveal.js-mermaid-plugin/blob/main/plugin/mermaid/plugin.js
 * https://github.com/reveal-plantuml/reveal-plantuml.github.io/blob/master/src/index.js
 */
import mermaid, { MermaidConfig } from "mermaid";
import { Api } from "reveal.js";

declare module "reveal.js" {
  export interface Options {
    mermaid?: MermaidConfig;
  }
}

export default () => ({
  id: "mermaid",
  init: function (reveal: Api) {
    const mermaidConfig = reveal.getConfig().mermaid;
    mermaid.initialize({
      startOnLoad: false,
      ...mermaidConfig,
    });

    const mermaidElements =
      reveal.getRevealElement()?.querySelectorAll(".reveal pre code.mermaid") ??
      [];
    mermaidElements.forEach(function (element: Element) {
      try {
        mermaid
          .render(
            `mermaid-${Math.random().toString(36).substring(2)}`,
            element.textContent?.trim() ?? ""
          )
          .then(({ svg }) => {
            const div = document.createElement("div");
            div.classList.add("mermaid");
            div.innerHTML = svg;

            const pre = element.parentElement;
            pre?.parentNode?.replaceChild(div, pre);

            window.dispatchEvent(new Event("resize"));
          });
      } catch (error) {
        element.innerHTML = error.str;
      }
    });
  },
});
