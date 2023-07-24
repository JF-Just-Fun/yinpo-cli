import type { Choice } from "prompts"

type optionType = Omit<Choice, "title" | "value">
type ChoiceKey = "webpack" | "vite" | "react" | "vue" | "eslint" | "vuex" | "redux" | "pinia" | "vueRoute" | "reactRoute" | "typescript" | "antDesignVue" | "antDesign" | "materialUI" | "element" | "styledComponents" | "axios"
type ChoiceType = {
  [Key in ChoiceKey]: (option?: optionType) => Choice
}

const ChoiceMap: ChoiceType = {
  webpack: option => ({ title: "webpack", value: "webpack", ...option }),
  vite: option => ({ title: "vite", value: "vite", ...option }),
  react: option => ({ title: "react", value: "react", ...option }),
  vue: option => ({ title: "vue", value: "vue", ...option }),
  eslint: option => ({ title: "eslint", value: "eslint", ...option }),
  vuex: option => ({ title: "vuex", value: "vuex", ...option }),
  redux: option => ({ title: "redux", value: "redux", ...option }),
  pinia: option => ({ title: "pinia", value: "pinia", ...option }),
  vueRoute: option => ({ title: "vue-route", value: "vueRoute", ...option }),
  reactRoute: option => ({ title: "react-route", value: "reactRoute", ...option }),
  typescript: option => ({ title: "typescript", value: "typescript", ...option }),
  antDesignVue: option => ({ title: "ant-design-vue", value: "antDesignVue", ...option }),
  antDesign: option => ({ title: "ant-design", value: "antDesign", ...option }),
  materialUI: option => ({ title: "material UI", value: "mui", ...option }),
  element: option => ({ title: "element UI", value: "element", ...option }),
  styledComponents: option => ({ title: "styled-components", value: "styledComponents", ...option }),
  axios: option => ({ title: "axios", value: "axios", ...option }),
}

export default ChoiceMap
