<template>
  <div>
    <div class="mx-auto container flex flex-col items-center">
      <div class="mb-4">
        <h2
          class="font-quicksand font-medium sm:text-2xl md:text-3xl lg:text-4xl text-gray-900"
        >
          Skills and Expertise
        </h2>
      </div>
      <div
        class="grid grid-cols-2 w-full justify-items-center gap-y-0 md:grid-cols-3 md:gap-x-64 md:gap-y-5"
      >
        <img
          src="@/assets/images/technologies/laravel.svg"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Laravel"
        />
        <img
          src="@/assets/images/technologies/vuejs.svg"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Vues.js"
        />
        <img
          src="@/assets/images/technologies/tailwindcss.svg"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Tailwind CSS"
        />
        <img
          src="@/assets/images/technologies/nuxtjs.svg"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="Nuxt.js"
        />
        <img
          src="@/assets/images/technologies/css3.svg"
          class="w-12 h-12 sm:w-20 sm:h-20 md:w-32 md:h-32"
          alt="CSS 3"
        />
        <img
          src="@/assets/images/technologies/html5.svg"
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
        { name: "Laravel", image: "laravel.svg" },
        { name: "Vue.js", image: "vuejs.svg" },
        { name: "Tailwind CSS", image: "tailwindcss.svg" },
        { name: "Nuxt.js", image: "nuxtjs.svg" },
        { name: "CSS 3", image: "css3.svg" },
        { name: "HTML 5", image: "html5.svg" },
      ],
    };
  },
};
</script>
