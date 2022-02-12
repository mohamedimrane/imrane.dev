<template>
  <div>
    <main class="container mt-20 mb-40">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold">{{ article.title }}</h1>
        <p class="text-secondary-light">Last update on <time :datetime="article.updatedAt">{{ articleFormatedUpdatedAt }}</time></p>
        <div class="text-primary font-semibold">
          <!-- <NuxtLink class="uppercase text-xs hover:bg-primary hover:text-white py-1 px-4 rounded-full transition duration-100 ease-in-out" v-for="tag in $page.article.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</NuxtLink> -->
        </div>
      </div>
      <div class="markdown-body leading-9 tracking-wide">
        <nuxt-content :document="article" tag="article" />
      </div>
    </main>
  </div>
</template>

<script>
export default {

  async asyncData({ $content, route }) {
    const article = await $content(route.params.articleSlug).fetch()

    return {
      article,
    }
  },

  computed: {
    articleFormatedUpdatedAt() {
      return new Date(this.article.updatedAt).toLocaleDateString("en");
    }
  },

  methods: {
    stringCapitalize (str) {
      if (typeof str !== "string") return ""
      return str[0].toUpperCase() + str.slice(1)
    }
  }

}
</script>

<style scoped src="~/assets/github-markdown.css" />