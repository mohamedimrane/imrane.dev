// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import BlogLayout from '~/layouts/Blog.vue'
import AppHeader from "~/components/AppHeader.vue";

import "fontsource-nunito-sans/latin-400.css" // Normal
import "fontsource-nunito-sans/latin-600.css" // Semibold
import "fontsource-nunito-sans/latin-700.css" // Bold
import "fontsource-nunito-sans/latin-800.css" // Extrabold
import "fontsource-fredoka-one";

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.component('BlogLayout', BlogLayout)
  Vue.component('AppHeader', AppHeader)
}
