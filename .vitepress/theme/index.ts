// https://vitepress.dev/guide/custom-theme
import { h } from "vue";
import Theme from "vitepress/theme";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "./style.scss";

import Reveate from "../../components/Reveate.vue";

export default {
  extends: Theme,
  Layout: () => {
    return h(Theme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    });
  },
  enhanceApp({ app, router, siteData }) {
    app.component("Reveate", Reveate);
  },
};
