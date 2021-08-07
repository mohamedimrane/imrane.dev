<template>
  <Layout>
    <!-- Start About me -->
    <div class="container mt-60 grid grid-cols-2 gap-x-20">
      <div>
        <div class="font-extrabold">
          <h1 class="text-6xl">Mohamed Imrane Chehabi</h1>
          <h2 class="mt-1 text-2xl text-primary">Full Stack Web Developer</h2>
        </div>
        <p class="mt-6 text-lg text-secondary-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolore ullam maiores odit explicabo dolorum velit adipisci officiis quis at.</p>
      </div>
      <g-image src="~/assets/illustrations/developer.svg"></g-image>
    </div>
    <!-- End About me -->

    <!-- Start Latest blog posts  -->
    <div>
      <svg class="w-full text-primary fill-current" viewBox="0 0 1400 50" xmlns="http://www.w3.org/2000/svg"><path d="M0 0c309.151 33.333 542.484 50 700 50 157.516 0 390.849-16.667 700-50v50H0V0z"></path></svg>
      <div class="py-20 bg-primary text-white">
        <div class="container">
          <h1 class="text-4xl font-extrabold">Latest Blog Posts</h1>
          <div class="mt-10">
            <div class="grid grid-cols-2 gap-y-4 gap-x-10">
              <a class="text-xl font-bold block hover:underline" v-for="article in $page.articles.edges" :key="article.node.id" :href="article.node.path">{{ article.node.title }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Latest blog posts -->
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
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>
