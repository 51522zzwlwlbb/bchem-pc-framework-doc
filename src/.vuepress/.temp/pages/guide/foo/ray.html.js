export const data = JSON.parse("{\"key\":\"v-0b6fc5f8\",\"path\":\"/guide/foo/ray.html\",\"title\":\"Ray\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Ray\"},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":7},\"filePathRelative\":\"guide/foo/ray.md\"}")

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
