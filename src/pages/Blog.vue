<template>
  <BlogLayout>
    <h2 class="text-3xl font-bold md:text-4xl text-natural-black">Articles</h2>
    <div class="flex flex-col justify-between mt-6 md:mt-10 md:flex-row">
      <div class="relative w-full mr-8 md:w-1/3">
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

      <section id="articles" class="w-full mt-4 md:mt-0 md:w-2/3">
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
import ArticleSnippet from "~/components/ArticleSnippet.vue";

export default {
  components: {
    ArticleSnippet
  },
  metaInfo: {
    title: "Blog",
    meta: [
      {
        key: 'title',
        name: 'title',
        content: 'Blog | Mohamed Imrane Chehabi'
      },
      {
        key: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'author',
        content: ''
      }
    ]
  }
};
</script>