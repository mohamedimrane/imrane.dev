<template>
  <div id="content" class="my-16 md:my-18 lg:my-22 w-3/6 mx-auto">
    <h1 class="text-5xl text-gray-800 font-quicksand font-bold mb-4">
      {{ article.title }}
    </h1>
    <p class="text-sm text-gray-700 mb-4">
      <span class="font-bold">Mohamed Imrane Chehabi &bull;</span>
      {{ formatDate(article.createdAt) }}
    </p>
    <img
      v-if="article.image"
      :src="`/thumbnails/${article.image}`"
      :alt="article.imageAlt"
      class="rounded-lg mb-4"
    />
    <div class="mb-10">
      <ul>
        <li
          v-for="link of article.toc"
          :key="link.id"
          class="text-gray-900 block text-md font-quicksand font-medium"
          :class="{ 'py-2': link.depth === 2, 'ml-4 pb-2': link.depth === 3 }"
          v-scroll-to="{
            el: `#${link.id}`,
            onDone: () => {
              whenScrollignToSectionIsDone(link.id)
            },
          }"
        >
          <a>
            &bull; <span class="text-teal-600 ml-2">{{ link.text }}</span>
          </a>
        </li>
      </ul>
    </div>
    <nuxt-content :document="article" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    whenScrollignToSectionIsDone(section) {
      this.$router.push('#' + section)
    },
  },
}
</script>

<style scoped>
/** Style for the nuxt-content*/
</style>
