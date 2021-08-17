<template>
  <Layout>
    <div class="container mt-20">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat earum nihil vitae fugiat harum autem error assumenda doloribus nostrum voluptates minus in voluptatibus sequi asperiores, vero facere quidem soluta quia? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non architecto expedita, labore nulla vero quis optio ratione fugiat accusantium aliquam! Quo blanditiis esse consequatur quas sapiente laborum possimus culpa nisi!
    </div>
    <!-- <h2 class="text-3xl font-bold lg:text-4xl text-natural-black dark:text-white">Articles</h2>
    <div class="flex flex-col justify-between mt-6 lg:mt-10 lg:flex-row">
      <Search />

      <section id="articles" class="w-full mt-4 lg:mt-0 lg:w-2/3">
        <ArticleSnippet v-for="edge in $page.articles.edges" :key="edge.node.title" :article="edge.node" />
      </section>
    </div> -->
  </Layout>
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
import Search from "~/components/Search.vue";

export default {
  components: {
    ArticleSnippet,
    Search
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