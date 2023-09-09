/**
 * https://github.com/zjffun/reveal.js-mermaid-plugin/blob/main/plugin/mermaid/plugin.js
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
      reveal.getRevealElement()?.querySelectorAll(".mermaid") ?? [];
    mermaidElements.forEach(function (element: Element) {
      try {
        mermaid
          .render(
            `mermaid-${Math.random().toString(36).substring(2)}`,
            element.textContent?.trim() ?? ""
          )
          .then(({ svg }) => {
            element.innerHTML = svg;
          });
      } catch (error) {
        element.innerHTML = error.str;
      }
    });
  },
});
