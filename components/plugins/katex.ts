import katex from "katex";
import { Api } from "reveal.js";

export default () => ({
  id: "katex",
  init: function (reveal: Api) {
    const revealOptions = reveal.getConfig().katex;
    const elements =
      reveal.getSlidesElement()?.querySelectorAll(".katex") ?? [];
    elements.forEach(function (element: Element) {
      katex.render(element.textContent ?? "", element as HTMLElement, {
        output: "mathml",
        throwOnError: false,
        ...revealOptions,
      });
    });
  },
});
