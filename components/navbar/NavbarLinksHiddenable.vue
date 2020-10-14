<template>
  <ul class="absolute w-full top-14 -z-1 bg-white text-2xl text-gray-700">
    <li
      v-scroll-to="{
        el: '#about',
        onDone: () => {
          whenScrollignToSectionIsDone('about')
        },
      }"
      tag="li"
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
      tag="li"
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
      tag="li"
      class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
    >
      Blog
    </li>
  </ul>
</template>

<script>
export default {
  props: ['shown'],
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

<script>
export default {
  methods: {
    whenScrollignToSectionIsDone(section) {
      this.$router.push('/#' + section)
    },
  },
}
</script>
