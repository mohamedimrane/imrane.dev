<template>
  <div>
    <!-- Start Input -->
    <div class="bg-primary rounded-lg transform translate-x-1 translate-y-1 text-sm">
      <div class="relative">
        <input type="text" id="search-bar" placeholder="Search" v-model="searchTerm" class="w-full text-sm pr-8 pl-8 bg-white border-2 border-primary focus:border-primary rounded-lg transform -translate-x-1 -translate-y-1 focus:ring-0">
        <svg class="text-secondary-light fill-current absolute w-4 h-4 top-0 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
        <div v-if="searchTerm.length > 0" @click="reset" class="absolute top-2.5 right-2.5">
          <svg class="text-secondary-light fill-current w-4 h-4" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" width="22" height="32" preserveAspectRatio="xMidYMid meet" viewBox="0 0 352 512"><path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28L75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256L9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" fill="currentColor"></path></svg>
        </div>
      </div>
    </div>
    <!-- End Input -->

    <!-- Start Suggestions -->
    <div v-if="searchResults.length > 0" class="mt-4 bg-primary rounded-lg transform translate-x-1 translate-y-1">
      <div class="bg-white border-2 border-primary rounded-lg transform -translate-x-1 -translate-y-1 px-4">
        <div v-for="result in searchResults" :key="result.node.id" class="border-b-1 last:border-b-0 py-4">
          <g-link :to="result.node.path" class="inline-block font-bold hover:text-primary transition-colors duration-100 ease-in-out">{{ result.node.title }}</g-link>
          <p class="text-xs text-secondary-light">{{ result.node.description }}</p>
        </div>
      </div>
    </div>
    <!-- End Suggestions -->

    <!-- Start "Not Found" -->
    <div v-if="searchResults.length === 0 & searchTerm.length > 2" class="mt-1 p-4 border-b-2 text-sm">
      No results for '<strong>{{ searchTerm }}</strong>'
    </div>
    <!-- End "Not Found" -->
  </div>
</template>

<script>
import Search from 'gridsome-plugin-flexsearch/SearchMixin'

export default {
  methods: {
    reset() {
      this.searchTerm = ''
      this.highlightedIndex = 0
    },
  },
  mixins: [Search]
}
</script>
