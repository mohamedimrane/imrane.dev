<template>
  <div>
    <!-- Start Input -->
    <div class="bg-primary rounded-lg transform translate-x-1 translate-y-1 text-sm">
      <div class="relative">
        <input type="text" id="search-bar" placeholder="Search" v-model="searchTerm" class="w-full text-sm pr-8 pl-8 bg-white border-2 border-primary focus:border-primary rounded-lg transform -translate-x-1 -translate-y-1 focus:ring-0">
        <svg class="text-secondary-light fill-current absolute w-4 h-4 top-0 left-2 top-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"/></svg>
        <svg v-if="searchTerm.length > 0" class="text-secondary-light fill-current absolute w-6 h-6 top-1.5 right-2" @click="reset" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
      </div>
    </div>
    <!-- End Input -->

    <!-- Start Suggestions -->
    <div v-if="searchResults.length > 0" class="mt-4 bg-primary rounded-lg transform translate-x-1 translate-y-1">
      <div class="bg-white border-2 border-primary rounded-lg transform -translate-x-1 -translate-y-1 px-4">
        <div v-for="result in searchResults" :key="result.node.id" class="border-b-1 last:border-b@-0 py-4">
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
  mixins: [Search],
}
</script>
