<template>
  <ul
    class="hidden text-2xl text-gray-700 md:flex md:flex-row md:justify-between"
  >
    <template v-if="pageIsHome">
      <li
        v-scroll-to="{
          el: '#about',
          onDone: () => {
            whenScrollignToSectionIsDone('about')
          },
        }"
        class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
      >
        About
      </li>
      <li
        v-scroll-to="{
          el: '#skills',
          onDone: () => {
            whenScrollignToSectionIsDone('skills')
          },
        }"
        class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
      >
        Skills
      </li>
      <li
        v-scroll-to="{
          el: '#recent-blog-posts',
          onDone: () => {
            whenScrollignToSectionIsDone('recent-blog-posts')
          },
        }"
        class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
      >
        Blog
      </li>
    </template>
    <template v-if="!pageIsHome">
      <nuxt-link
        tag="li"
        to="/#about"
        class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
      >
        <a>About</a>
      </nuxt-link>
      <nuxt-link
        tag="li"
        to="/#skills"
        class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
      >
        <a>Skills</a>
      </nuxt-link>
      <nuxt-link
        tag="li"
        to="/#recent-blog-posts"
        class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
      >
        <a>Blog</a>
      </nuxt-link>
    </template>
  </ul>
</template>

<script>
export default {
  methods: {
    whenScrollignToSectionIsDone(section) {
      this.$router.push('/#' + section)
    },
  },
  computed: {
    pageIsHome() {
      return this.$route.path === '/'
    },
  },
}
</script>
