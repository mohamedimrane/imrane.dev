<template>
  <Layout>
    <div class="container mt-20 mb-40 flex flex-col">
      <h2 class="text-3xl font-extrabold relative flex items-center self-start ml-2">
        <span class="absolute inline-block w-full h-3 mt-2 -ml-2 bg-primary"></span>
        <span class="z-50">Tag: {{ stringCapitalize($page.tag.title) }}</span>
      </h2>

      <div class="space-y-4 mt-10">
        <ArticleSnippet v-for="edge in $page.tag.belongsTo.edges" :key="edge.title" :article="edge.node" />
      </div>
    </div>
  </Layout>
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
            tags {
              id
              title
              path
            }
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
import ArticleSnippet from "~/components/blog/ArticleSnippet.vue"

export default {
  methods: {
    stringCapitalize (str) {
      if (typeof str !== "string") return ""
      return str[0].toUpperCase() + str.slice(1)
    }
  },
  components: {
    ArticleSnippet
  },
  metaInfo () {
    return {
      title: "Tag: " + this.stringCapitalize(this.$page.tag.title),
      meta: [
        {
          key: "title",
          name: "title",
          content: "Tag: " + this.$page.tag.title + " | Mohamed Imrane Chehabi"
        },
        {
          key: "description",
          name: "description",
          content: ""
        },
        {
          name: "author",
          content: "Mohamed Imrane Chehabi"
        },
        {
          key: "og:title",
          property: "og:title",
          content: "Tag: " + this.$page.tag.title + " | Mohamed Imrane Chehabi"
        },
        {
          key: "og:description",
          property: "og:description",
          content: ""
        },
        {
          key: "og:url",
          property: "og:url",
          content: "https://www.imrane.dev" + this.$page.tag.path
        },
        {
          key: "twitter:title",
          name: "twitter:title",
          content: "Tag: " + this.$page.tag.title + " | Mohamed Imrane Chehabi"
        },
        {
          key: "twitter:description",
          name: "twitter:description",
          content: ""
        },
        {
          key: "twitter:url",
          name: "twitter:url",
          content: "https://www.imrane.dev" + this.$page.tag.path
        }
      ]
    }
  }
}
</script>