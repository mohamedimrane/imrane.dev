<template>
  <ul
    class="absolute w-full top-14 -z-1 bg-white text-2xl shadow-xl text-gray-700"
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
        Recent Blog Posts
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
        <a>Recent Blog Posts</a>
      </nuxt-link>
    </template>
    <nuxt-link
      tag="li"
      to="/blog"
      class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
    >
      <a>Blog</a>
    </nuxt-link>
  </ul>
</template>

<script>
export default {
  props: ['shown'],
}
</script>

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

<style scoped>
@media screen and (max-width: 767px) {
  li {
    border-bottom: 1px solid #718096;
    padding: 0.5rem 0.2rem;
  }
  li:nth-last-child(1) {
    border-bottom: none;
  }
}
</style>
