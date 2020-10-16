<template>
  <div id="content" class="my-16 md:my-18 lg:my-22 w-3/6 mx-auto">
    <div
      v-for="article in articles"
      :key="article.id"
      class="border border-gray-500 rounded-lg p-5 flex flex-row justify-between items-center"
    >
      <div class="flex flex-row items-center">
        <nuxt-link
          :to="`blog/${article.slug}`"
          class="text-3xl text-teal-700 font-medium"
        >
          {{ article.title }}
        </nuxt-link>
        <p
          class="text-center mx-4 text-xs bg-teal-800 text-teal-100 px-2 py-1 rounded-full"
        >
          {{ article.category }}
        </p>
      </div>
      <p>{{ article.description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    const articles = await $content('articles').fetch()

    return { articles }
  },
}
</script>
