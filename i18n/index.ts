import { pt } from "./pt.json";
import { en } from "./en.json"
import { es } from "./es.json"

export default defineI18nConfig(() => ({
  legacy: false,
  locale: "pt",
  messages: {
    pt,
    en,
    es,
  },
}));