import { sidebar } from "vuepress-theme-hope";

export const enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Articles",
      icon: "book",
      link: "article/",
    },
    "intro",
    "slides",
  ],
});
