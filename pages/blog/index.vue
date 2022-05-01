<template>
  <div>
    <div class="container mb-20 lg:mb-40 mt-20 flex flex-col">
      <!-- Start Title -->
      <h2 class="text-3xl font-extrabold relative flex items-center self-start ml-2">
        <span class="absolute inline-block w-full h-3 mt-2 -ml-2 bg-primary"></span>
        <span class="z-50">Blog Articles</span>
      </h2>
      <!-- End Title -->

      <div class="flex flex-col-reverse lg:flex-row lg:space-x-6 mt-10">
        <!-- Start Articles list -->
        <div class="lg:w-2/3 space-y-4 mt-6 lg:mt-0 lg:mb-0">
          <BlogArticleSnippet v-for="article in articles" :key="article.id" :article="article" />
        </div>
        <!-- End Articles list -->

        <!-- Start Search -->
        <div class="lg:w-1/3">
          <BlogSearch />
        </div>
        <!-- End Search -->
      </div>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData({ $content }) {
    const articles = await $content("").fetch()

    return {
      articles
    }
  }

}
</script>
