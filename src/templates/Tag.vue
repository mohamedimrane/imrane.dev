<template>
  <TagLayout>
    <h2 class="text-4xl font-bold text-natural-black">Tag: {{ $page.tag.title }}</h2>
    <section id="articles" class="w-full mt-10">
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
  components: {
    ArticleSnippet
  }
};
</script>