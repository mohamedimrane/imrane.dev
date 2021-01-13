<template>
  <ArticleLayout>
    <main class="mx-auto mt-16 lg:mt-32 container-inner">
      <h1 class="text-2xl font-bold text-natural-black dark:text-white lg:text-3xl">{{ $page.article.title }}</h1>
      <p class="mt-2 text-sm lg:mt-4 lg:text-base text-blue40 dark:text-gray-500">Last update on <time :datetime="$page.article.datetime">{{ $page.article.date }}</time></p>
      <ul class="mt-2">
        <g-link tag="li" class="inline-block px-3 py-1 mr-3 text-sm bg-gray-400 bg-opacity-25 rounded cursor-pointer dark:text-white hover:bg-opacity-40" v-for="tag in $page.article.tags" :key="tag.id" :to="tag.path">{{ stringCapitalize(tag.title) }}</g-link>
      </ul>
      <div class="mt-8 markdown-body">
        <VueRemarkContent class="leading-9 tracking-wide" />
      </div>
    </main>
  </ArticleLayout>
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