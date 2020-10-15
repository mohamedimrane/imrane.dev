<template>
  <div>
    <div class="mx-auto container flex flex-col items-center">
      <div class="mb-4">
        <h2
          class="font-quicksand font-medium text-2xl md:text-3xl lg:text-4xl text-gray-900"
        >
          Skills and Expertise
        </h2>
      </div>
      <div
        class="grid grid-cols-2 w-3/4 sm:w-full justify-items-center md:grid-cols-3 md:gap-x-64 gap-y-3 sm:gap-y-5 md:gap-y-5 lg:gap-y-10"
      >
        <img
          src="@/assets/images/technologies/laravel.svg?original"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Laravel"
        />
        <img
          src="@/assets/images/technologies/vuejs.svg?original"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Vue.js"
        />
        <img
          src="@/assets/images/technologies/tailwindcss.svg?original"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Tailwind CSS"
        />
        <img
          src="@/assets/images/technologies/nuxtjs.svg?original"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Nuxt.js"
        />
        <img
          src="@/assets/images/technologies/css3.svg?original"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="CSS 3"
        />
        <img
          src="@/assets/images/technologies/html5.svg?original"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="HTML 5"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      technologies: [
        { name: 'Laravel', image: 'laravel.svg' },
        { name: 'Vue.js', image: 'vuejs.svg' },
        { name: 'Tailwind CSS', image: 'tailwindcss.svg' },
        { name: 'Nuxt.js', image: 'nuxtjs.svg' },
        { name: 'CSS 3', image: 'css3.svg' },
        { name: 'HTML 5', image: 'html5.svg' },
      ],
    }
  },
}
</script>
