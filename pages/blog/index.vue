<template>
  <div>
    <div class="container mb-40 mt-20 flex flex-col">
      <!-- Start Title -->
      <h2 class="text-3xl font-extrabold relative flex items-center self-start ml-2">
        <span class="absolute inline-block w-full h-3 mt-2 -ml-2 bg-primary"></span>
        <span class="z-50">Blog Posts</span>
      </h2>
      <!-- End Title -->

      <div class="flex space-x-6 mt-10">
        <!-- Start Articles list -->
        <div class="w-2/3 space-y-4">
          <!--//! <ArticleSnippet v-for="edge in $page.articles.edges" :key="edge.node.id" :article="edge.node" /> -->
        </div>
        <!-- End Articles list -->

        <!-- Start Search -->
        <div class="w-1/3">
          <Search />
        </div>
        <!-- End Search -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>
