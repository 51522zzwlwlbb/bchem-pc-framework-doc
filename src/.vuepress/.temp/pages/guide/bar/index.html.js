export const data = JSON.parse("{\"key\":\"v-5d5c2d30\",\"path\":\"/guide/bar/\",\"title\":\"Bar 功能\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Bar 功能\"},\"headers\":[{\"level\":2,\"title\":\"介绍\",\"slug\":\"介绍\",\"link\":\"#介绍\",\"children\":[]}],\"readingTime\":{\"minutes\":0.03,\"words\":8},\"filePathRelative\":\"guide/bar/README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
