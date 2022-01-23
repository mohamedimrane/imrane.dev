<template>
    <div class="container py-20 flex flex-col">
      <h2 class="text-3xl font-extrabold relative flex items-center self-start">
        <span class="absolute inline-block w-full h-4 mt-2 -ml-2 bg-primary"></span>
        <span class="z-50">Latest Blog Posts</span>
      </h2>

      <div class="mt-6 flex">
        <div class="grid grid-cols-2 gap-x-10 gap-y-10 h-full col-span-2 w-2/3 flex-1">
          <div v-for="article in $static.latestArticles.edges" :key="article.node.id" class="transform hover:scale-102 transition-transform duration-100 ease-in-out">
            <div class="bg-primary rounded-lg transform translate-x-1 translate-y-1">
              <div class="bg-white border-2 border-primary rounded-lg p-5 space-y-2 transform -translate-x-1 -translate-y-1">
                <div class="flex items-center text-lg font-bold space-x-2">
                  <g-image :src="article.node.icon.path" :alt="article.node.icon.alt" class="w-8 h-8" />
                  <g-link class="truncate" :to="article.node.path" :title="article.node.title">{{ truncate(article.node.title, 27) }}</g-link>
                </div>

                <div class="space-x-2 text-primary font-semibold">
                  <g-link class="uppercase text-xs hover:bg-primary hover:text-white py-1 px-2 rounded-full transition duration-100 ease-in-out" v-for="tag in article.node.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</g-link>
                </div>

                <p class="text-sm text-secondary-light">{{ article.node.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="ml-10 -mr-230 -my-30 flex items-center justify-center">
          <g-image src="~/assets/illustrations/latest-blog-posts.svg" class="block"/>
        </div>
      </div>
    </div>
</template>

<static-query>
query Article {
  latestArticles: allArticle (limit: 4) {
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
</static-query>

<script>
export default {
  methods: {
    truncate (string, characters) {
      if (string.length > characters) {
        return string.split("").splice(0, characters).join("") + "..."
      }
      return string
    }
  }
}
</script>
