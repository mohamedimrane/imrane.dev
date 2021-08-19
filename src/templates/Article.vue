<template>
  <Layout>
    <main class="container mt-20 mb-20">
      <div class="space-y-2">
        <h1 class="text-3xl font-bold">{{ $page.article.title }}</h1>
        <p class="text-secondary-light">Last update on <time :datetime="$page.article.datetime">{{ $page.article.date }}</time></p>
        <div class="text-primary font-semibold">
          <g-link class="uppercase text-xs hover:bg-primary hover:text-white py-1 px-4 rounded-full transition duration-100 ease-in-out" v-for="tag in $page.article.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</g-link>
        </div>
      </div>
      <div class="markdown-body">
        <VueRemarkContent class="leading-9 tracking-wide" />
      </div>
    </main>
  </Layout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    title
    path
    tags {
      id
      title
      path
    }
    date (format: "MMMM DD, Y")
    datetime: date
  }
}
</page-query>

<script>
export default {
  methods: {
    stringCapitalize (str) {
      if (typeof str !== 'string') return ''
      return str[0].toUpperCase() + str.slice(1)
    }
  },
  metaInfo () {
    return {
      title: this.$page.article.title,
      meta: [
        {
          key: 'title',
          name: 'title',
          content: this.$page.article.title + ' | Mohamed Imrane Chehabi'
        },
        {
          key: 'description',
          name: 'description',
          content: ''
        },
        {
          name: 'author',
          content: 'Mohamed Imrane Chehabi'
        },
        {
          key: 'og:title',
          property: 'og:title',
          content: this.$page.article.title + ' | Mohamed Imrane Chehabi'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://www.imrane.dev' + this.$page.article.path
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: this.$page.article.title + ' | Mohamed Imrane Chehabi'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: ''
        },
        {
          key: 'twitter:url',
          name: 'twitter:url',
          content: 'https://www.imrane.dev' + this.$page.article.path
        }
      ]
    }
  }
};
</script>

<style src="../github-markdown.css" />