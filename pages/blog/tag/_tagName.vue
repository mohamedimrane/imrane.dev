<template>
  <div>
    <div class="container mt-20 mb-40 flex flex-col">
      <h2 class="text-3xl font-extrabold relative flex items-center self-start ml-2">
        <span class="absolute inline-block w-full h-3 mt-2 -ml-2 bg-primary"></span>
        <span class="z-50">Tag: {{ stringCapitalize($route.params.tagName) }}</span>

      </h2>

      <div class="space-y-4 mt-10">
        <!-- <ArticleSnippet v-for="edge in $page.tag.belongsTo.edges" :key="edge.title" :article="edge.node" /> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    stringCapitalize (str) {
      if (typeof str !== "string") return ""
      return str[0].toUpperCase() + str.slice(1)
    }
  }
}
</script>