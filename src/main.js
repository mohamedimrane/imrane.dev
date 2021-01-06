// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/Blog.vue'
import ArticleLayout from '~/layouts/Article.vue'
import TagLayout from '~/layouts/Tag.vue'
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

import "fontsource-nunito-sans/latin-400.css" // Normal
import "fontsource-nunito-sans/latin-600.css" // Semibold
import "fontsource-nunito-sans/latin-700.css" // Bold
import "fontsource-nunito-sans/latin-800.css" // Extrabold
import "fontsource-fredoka-one";

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
      name: 'title',
      content: 'Mohamed Imrane Chehabi'
    },
    {
      name: 'description',
      content: 'Web Designer and Fullstack Developer'
    }
  ])

  // Add og / facebook meta tags
  head.meta.push(...[
    {
      property: 'og:title',
      content: 'Mohamed Imrane Chehabi'
    },
    {
      property: 'og:description',
      content: 'Web Designer and Fullstack Developer'
    },
    {
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
      name: 'twitter:title',
      content: 'Mohamed Imrane Chehabi'
    },
    {
      name: 'twitter:description',
      content: 'Web Designer and Fullstack Developer'
    }, 
    {
      name: 'twitter:url',
      content: 'https://www.imrane.dev'
    }
  ])
}
