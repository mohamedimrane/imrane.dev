<template>
  <BlogLayout>
    <h2 class="text-4xl font-bold text-natural-black">Articles</h2>
    <div class="flex justify-between mt-10">
      <div class="relative w-1/3 mr-8">
        <input type="text" id="search-bar" placeholder="Search" class="w-full h-10 pl-10 pr-3 text-lg border border-opacity-50 rounded focus:outline-none focus:ring-1 placeholder-blue50 border-light-text-200 text-natural-black">
        <div class="absolute stroke-current left-2 top-1.5 text-blue50">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
              stroke-width="2" stroke-linecap="round"
              stroke-linejoin="round">
            <circle cx="11" cy="11" r="8" />
            <path d="M21 21l-4.35-4.35" />
          </svg>
        </div>
      </div>

      <section id="articles" class="w-2/3">
        <ArticleSnippet v-for="edge in $page.articles.edges" :key="edge.title" :article="edge.node" />
      </section>
    </div>
  </BlogLayout>
</template>

<page-query>
query Article {
  articles: allArticle {
    edges {
      node {
        title
        id
        path
        icon {
          path
          alt
        }
        date (format: "MMMM D, Y")
        datetime: date
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