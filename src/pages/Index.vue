<template>
  <Layout>
    <!-- Start About me -->
    <div class="container mt-60 mb-20 grid grid-cols-2 gap-x-20">
      <div>
        <div class="font-extrabold">
          <h1 class="text-6xl">Mohamed Imrane Chehabi</h1>
          <h2 class="mt-1 text-2xl text-primary">Full Stack Web Developer</h2>
        </div>

        <p class="mt-6 text-lg text-secondary-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolore ullam maiores odit explicabo dolorum velit adipisci officiis quis at.</p>
      </div>
      <g-image src="~/assets/illustrations/developer.svg"/>
    </div>
    <!-- End About me -->

    <!-- Start Skills  -->
    <div>
      <svg class="w-full text-primary fill-current" viewBox="0 0 1400 50" xmlns="http://www.w3.org/2000/svg"><path d="M0 0c309.151 33.333 542.484 50 700 50 157.516 0 390.849-16.667 700-50v50H0V0z"></path></svg>
      <div class="py-40 bg-primary text-white">
        <div class="container">
          <div class="grid grid-cols-2 gap-x-20">
            <div>
              <h2 class="text-3xl font-extrabold">Skills And Tools That I Use</h2>
              <p class="mt-6 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi inventore temporibus suscipit molestias ab!</p>
            </div>

            <div class="grid grid-cols-3 gap-y-10">
              <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/laravel.svg"/>
              <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/vuejs.svg"/>
              <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/octobercms.svg"/>
              <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/nuxtjs.svg"/>
              <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/tailwindcss.svg"/>
              <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/gridsome.svg"/>
            </div>
          </div>
        </div>
      </div>
      <svg class="w-full text-primary fill-current" viewBox="0 0 1400 50" xmlns="http://www.w3.org/2000/svg"><path d="M0 50C309.151 16.667 542.484 0 700 0c157.516 0 390.849 16.667 700 50V0H0v50z"></path></svg>
    </div>

    <!-- End Skills -->

    <!-- Start Latest blog posts -->
    <div class="container py-20 flex flex-col">
      <h2 class="text-3xl font-extrabold relative flex items-center self-start">
        <span class="absolute inline-block w-full h-4 mt-2 -ml-2 bg-primary"></span>
        <span class="z-50">Latest Blog Posts</span>
      </h2>

      <div class="mt-6 flex">
        <div class="grid grid-cols-2 gap-x-10 col-span-2 w-2/3 flex-1">
          <div v-for="article in $page.articles.edges" :key="article.node.id">
            <div class="bg-primary rounded-lg transform translate-x-1 translate-y-1">
              <div class="bg-white border-2 border-primary rounded-lg p-5 space-y-2 transform -translate-x-1 -translate-y-1">
                <div class="flex items-center text-lg font-bold space-x-2">
                  <g-image :src="article.node.icon.path" :alt="article.node.icon.alt" class="w-8 h-8" />
                  <g-link class="hover:underline" :to="article.node.path"><h3>{{ article.node.title }}</h3></g-link>
                </div>

                <div class="space-x-2 text-primary font-semibold">
                  <g-link class="uppercase text-xs hover:underline" v-for="tag in article.node.tags" :key="tag.id" :to="tag.path">{{ tag.title }} </g-link>
                </div>

                <p class="text-secondary-light">{{ article.node.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="ml-10 -mr-230 -my-30 flex items-center justify-center">
          <g-image src="~/assets/illustrations/latest-blog-posts.svg" class="block"/>
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
        description
        id
        path
        icon {
          path
          alt
        }
        tags {
          id
          title
          path
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
