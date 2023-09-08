export const data = JSON.parse("{\"key\":\"v-34c1f660\",\"path\":\"/guide/lib.html\",\"title\":\"外部模块\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"外部模块\"},\"headers\":[],\"readingTime\":{\"minutes\":0.02,\"words\":5},\"filePathRelative\":\"guide/lib.md\"}")

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
