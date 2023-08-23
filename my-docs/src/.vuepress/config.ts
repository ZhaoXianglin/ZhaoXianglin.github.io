import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Xianglin's Blog",
      description: "Xianglin's Blog",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "Xianglin's Blog",
      description: "Xianglin's Blog",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
