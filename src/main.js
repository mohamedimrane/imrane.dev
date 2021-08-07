// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import 'virtual:windi.css'
import "@fontsource/nunito-sans"
import "@fontsource/fredoka-one";

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/Blog.vue'
import ArticleLayout from '~/layouts/Article.vue'
import TagLayout from '~/layouts/Tag.vue'
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";


// import "@fontsource/nunito-sans/latin-400.css" // Normal
// import "@fontsource/nunito-sans/latin-600.css" // Semibold
// import "@fontsource/nunito-sans/latin-700.css" // Bold
// import "@fontsource/nunito-sans/latin-800.css" // Extrabold



export default function (Vue, { router, head, isClient }) {
  // Register layouts
  Vue.component('Layout', DefaultLayout)
  Vue.component('BlogLayout', BlogLayout)
  Vue.component('ArticleLayout', ArticleLayout)
  Vue.component('TagLayout', TagLayout)
  Vue.component('AppHeader', AppHeader)
  Vue.component('AppFooter', AppFooter)

  // Add meta tags
  head.meta.push(...[
    {
      key: 'title',
      name: 'title',
      content: 'Mohamed Imrane Chehabi'
    },
    {
      key: 'description',
      name: 'description',
      content: 'Web Designer and Fullstack Developer'
    },
    {
      name: 'theme-color',
      content: "#2397B0"
    }
  ])

  // Add og / facebook meta tags
  head.meta.push(...[
    {
      key: 'og:title',
      property: 'og:title',
      content: 'Mohamed Imrane Chehabi'
    },
    {
      key: 'og:description',
      property: 'og:description',
      content: 'Web Designer and Fullstack Developer'
    },
    {
      key: 'og:url',
      property: 'og:url',
      content: 'https://www.imrane.dev'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ])

  // Add twitter meta tags
  head.meta.push(...[
    {
      key: 'twitter:title',
      name: 'twitter:title',
      content: 'Mohamed Imrane Chehabi'
    },
    {
      key: 'twitter:description',
      name: 'twitter:description',
      content: 'Web Designer and Fullstack Developer'
    },
    {
      key: 'twitter:url',
      name: 'twitter:url',
      content: 'https://www.imrane.dev'
    },
    {
      name: 'twitter:card',
      content: 'summary'
    },
    {
      name: 'twitter:image',
      content: 'https://www.imrane.dev/assets/static/src/assets/illustrations/web-developer.svg?width=344&key=6122171'
    }
  ])
}
