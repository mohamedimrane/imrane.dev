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
