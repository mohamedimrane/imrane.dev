<template>
  <ul
    class="hidden text-2xl text-gray-700 md:flex md:flex-row md:justify-between"
  >
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
  methods: {
    whenScrollignToSectionIsDone(section) {
      this.$router.push('/#' + section)
    },
  },
}
</script>
