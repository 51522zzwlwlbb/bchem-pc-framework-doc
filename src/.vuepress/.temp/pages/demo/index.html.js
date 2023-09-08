export const data = JSON.parse("{\"key\":\"v-1473bf53\",\"path\":\"/demo/\",\"title\":\"指南\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"指南\",\"index\":false,\"icon\":\"laptop-code\",\"category\":[\"使用指南\"]},\"headers\":[{\"level\":2,\"title\":\"目录\",\"slug\":\"目录\",\"link\":\"#目录\",\"children\":[]}],\"readingTime\":{\"minutes\":0.11,\"words\":34},\"filePathRelative\":\"demo/README.md\"}")

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
