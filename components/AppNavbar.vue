<template>
  <div class="relative md:static">
    <div class="w-11/12 h-14 lg:container mx-auto">
      <div class="flex flex-row justify-between items-center">
        <h1
          class="font-fredoka-one text-4xl sm:text-5xl lg:text-6xl text-teal-600"
        >
          Imrane
        </h1>
        <div>
          <div
            class="block md:hidden"
            @click="isMenuOpen = !isMenuOpen"
            v-on-clickaway="closeMenu"
          >
            <svg
              class="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            class="hidden -mx-0 text-2xl text-gray-700 md:flex md:flex-row md:justify-between"
          >
            <li
              v-scroll-to="{
                el: '#about',
                onDone: () => {
                  whenScrollignToSectionIsDone('about');
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
                  whenScrollignToSectionIsDone('skills');
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
                  whenScrollignToSectionIsDone('recent-blog-posts');
                },
              }"
              tag="li"
              class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
            >
              Blog
            </li>
          </ul>
          <ul
            class="navlinks-group z-50 absolute top-0 left-0 mt-14 w-full bg-white shadow-xl py-5 text-xl md:hidden"
            :class="{ hidden: !isMenuOpen }"
          >
            <li
              v-scroll-to="{
                el: '#about',
                onDone: () => {
                  whenScrollignToSectionIsDone('about');
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
                  whenScrollignToSectionIsDone('skills');
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
                  whenScrollignToSectionIsDone('recent-blog-posts');
                },
              }"
              tag="li"
              class="mx-8 transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
            >
              Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { directive as onClickaway } from "vue-clickaway";

export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  directives: {
    onClickaway: onClickaway,
  },
  methods: {
    closeMenu() {
      this.isMenuOpen = false;
    },
    whenScrollignToSectionIsDone(section) {
      this.$router.push("/#" + section);
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 767px) {
  .navlinks-group li {
    border-bottom: 1px solid #718096;
    padding: 0.5rem;
  }
  .navlinks-group li:nth-last-child(1) {
    border-bottom: none;
  }
}
</style>
