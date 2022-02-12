export { default as AppFooter } from '../../components/AppFooter.vue'
export { default as AppHeader } from '../../components/AppHeader.vue'
export { default as IndexAboutMe } from '../../components/index/IndexAboutMe.vue'
export { default as IndexContact } from '../../components/index/IndexContact.vue'
export { default as IndexLatestBlogPosts } from '../../components/index/IndexLatestBlogPosts.vue'
export { default as IndexSkills } from '../../components/index/IndexSkills.vue'
export { default as BlogArticleSnippet } from '../../components/blog/BlogArticleSnippet.vue'
export { default as BlogSearch } from '../../components/blog/BlogSearch.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
