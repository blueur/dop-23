<template>
  <button v-if="embedded" @click="toggleOverview">Overview</button>
  <div ref="reveal" class="reveal">
    <div class="slides">
      <section
        v-if="props.markdownFile"
        data-auto-animate
        :data-markdown="withBase(props.markdownFile)"
      />
      <slot v-else />
    </div>
  </div>
  <span v-if="embedded">
    Press on F to go full screen.
    <br />
    <a :href="printPath" target="_blank">Print (on Chrome)</a>
  </span>
</template>

<script setup lang="ts">
import "reveal.js/dist/reveal.css";
import "reveal.js/dist/theme/white.css";
import "reveal.js/plugin/highlight/monokai.css";

import { useUrlSearchParams } from "@vueuse/core";
import { Api } from "reveal.js";
import RevealMarkdown from "reveal.js/plugin/markdown/markdown";
import RevealNotes from "reveal.js/plugin/notes/notes";
import { useData, withBase } from "vitepress";
import { computed, onBeforeMount } from "vue";
import Katex from "./plugins/katex";
import Mermaid from "./plugins/mermaid";

const props = withDefaults(
  defineProps<{
    markdownFile?: string;
  }>(),
  {},
);

const { page } = useData();
const urlParams = useUrlSearchParams("history");

let revealApi: Api | undefined = undefined;

const embedded = computed<boolean>(() => urlParams["print-pdf"] == null);
const printPath = computed<string>(
  () => `/${page.value.relativePath.slice(0, -3)}-full?print-pdf`,
);

onBeforeMount(() => {
  import("reveal.js").then((module) => {
    import("reveal.js/plugin/highlight/highlight").then((highlight) => {
      revealApi = new module.default({
        autoAnimateDuration: 0.25,
        embedded: embedded.value,
        hash: true,
        pdfMaxPagesPerSlide: 1,
        pdfSeparateFragments: false,
        plugins: [
          RevealMarkdown,
          highlight.default,
          RevealNotes,
          Katex,
          Mermaid,
        ],
        slideNumber: true,
        transition: "fade",
        transitionSpeed: "fast",
      });
      revealApi.initialize();
    });
  });
});

function toggleOverview() {
  revealApi?.toggleOverview();
}
</script>
