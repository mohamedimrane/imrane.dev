<template>
  <div>
    <main class="container mt-20 mb-40">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold">{{ article.title }}</h1>
        <p class="text-secondary-light">Last update on <time :datetime="article.updatedAt">{{ articleFormatedUpdatedAt }}</time></p>
        <div class="text-primary font-semibold">
          <nuxt-link v-for="tag in article.tags" :key="tag" :to="'/blog/tag/' + tag" class="uppercase text-xs hover:bg-primary hover:text-white py-1 px-4 rounded-full transition duration-100 ease-in-out">{{ tag }}</nuxt-link>
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
      let monthsNames = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "Septembre",
        10: "October",
        11: "November",
        12: "December",
      }

      let date = new Date(this.article.updatedAt)

      let formatedDate = monthsNames[date.getMonth()+1] + " " + date.getDate() + ", " + date.getFullYear()

      return formatedDate
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