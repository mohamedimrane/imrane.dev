<template>
  <div
    class="bg-gray-200 w-5/6 mx-auto lg:w-3/12 mb-4 rounded-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
  >
    <div class="relative">
      <img
        src="@/assets/images/thumbnails/blog1.png"
        class="mx-auto"
        alt="laravel and vue js on a desk"
      />
      <p
        class="category-badge md:text-lg lg:text-base p-2 absolute rounded-tr-lg bottom-0 left-0 font-varela-round"
      >
        {{ category }}
      </p>
    </div>
    <div class="details pb-5 pt-1 px-6 font-quicksand">
      <h2 class="text-xl md:text-2xl font-bold leading-loose">
        {{ title }}
      </h2>
      <p class="md:text-lg lg:text-lg leading-loose">
        {{ description }}
      </p>
      <span class="text-xs leading-loose">
        <span class="font-bold">{{ createdAt }} &bull; </span>
        {{ author }}
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'category',
    'cardColor',
    'title',
    'description',
    'createdAt',
    'author',
  ],
}
</script>
