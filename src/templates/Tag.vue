<template>
  <TagLayout>
    <h2 class="text-3xl font-bold lg:text-4xl text-natural-black">Tag: {{ stringCapitalize($page.tag.title) }}</h2>
    <section id="articles" class="w-full mt-6 lg:mt-10">
      <ArticleSnippet v-for="edge in $page.tag.belongsTo.edges" :key="edge.title" :article="edge.node" />
    </section>
  </TagLayout>
</template>

<page-query>
query Tag ($id: ID!) {
  tag: tag (id: $id) {
    title
    path
    belongsTo {
      edges {
        node {
          ... on Article {
            title
            path
            icon {
              path
              alt
            }
            date (format: "MMMM DD, Y")
            datetime: date
          }
        }
      }
    }
  }
}
</page-query>

<script>
import ArticleSnippet from "~/components/ArticleSnippet.vue"

export default {
  methods: {
    stringCapitalize (str) {
      if (typeof str !== 'string') return ''
      return str[0].toUpperCase() + str.slice(1)
    }
  },
  components: {
    ArticleSnippet
  },
  metaInfo () {
    return {
      title: 'Tag: ' + this.stringCapitalize(this.$page.tag.title),
      meta: [
        {
          key: 'title',
          name: 'title',
          content: 'Tag: ' + this.$page.tag.title + ' | Mohamed Imrane Chehabi'
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
          content: 'Tag: ' + this.$page.tag.title + ' | Mohamed Imrane Chehabi'
        },
        {
          key: 'og:description',
          property: 'og:description',
          content: ''
        },
        {
          key: 'og:url',
          property: 'og:url',
          content: 'https://www.imrane.dev' + this.$page.tag.path
        },
        {
          key: 'twitter:title',
          name: 'twitter:title',
          content: 'Tag: ' + this.$page.tag.title + ' | Mohamed Imrane Chehabi'
        },
        {
          key: 'twitter:description',
          name: 'twitter:description',
          content: ''
        },
        {
          key: 'twitter:url',
          name: 'twitter:url',
          content: 'https://www.imrane.dev' + this.$page.tag.path
        }
      ]
    }
  }
};
</script>