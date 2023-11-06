import katex from "katex";
import { Api } from "reveal.js";

export default () => ({
  id: "katex",
  init: function (reveal: Api) {
    const revealOptions = reveal.getConfig().katex;

    (reveal.getSlidesElement()?.querySelectorAll("code.katex") ?? []).forEach(
      function (element: Element) {
        const div = document.createElement("div");
        const pre = element.parentElement;
        pre?.parentNode?.replaceChild(div, pre);

        katex.render(element.textContent ?? "", div, {
          output: "mathml",
          throwOnError: false,
          ...revealOptions,
        });
      },
    );
  },
});
