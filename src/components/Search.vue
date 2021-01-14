<template>
  <div class="w-full mr-8 lg:w-1/3">
    <div class="relative">
      <input type="text" id="search-bar" placeholder="Search" v-model="searchTerm" class="w-full h-10 pl-10 pr-3 text-lg border border-opacity-50 rounded dark:text-white dark:bg-darkmode-dark-teal focus:outline-none focus:ring-1 placeholder-blue50 border-light-text-200 text-natural-black">
      <div class="absolute stroke-current left-2 top-1.5 text-blue50">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor"
            stroke-width="2" stroke-linecap="round"
            stroke-linejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.35-4.35" />
        </svg>
      </div>
      <div v-if="searchTerm.length > 0" class="absolute top-0 right-0 mr-3 text-2xl text-gray-600 cursor-pointer hover:text-gray-800" style="top:2px;" @click="reset">
        &times;
      </div>
      <div v-if="searchResults.length > 0" class="absolute left-0 right-0 z-10 mt-2 mb-4 overflow-hidden overflow-y-auto text-left normal-case bg-white border rounded shadow-sm" style="max-height: 32rem">
        <div class="flex flex-col">
          <g-link v-for="result in searchResults" :key="result.id" :to="result.path" class="p-4 font-semibold border-b cursor-pointer text-natural-black dark:bg-darkmode-dark-teal dark:text-white border-light-text10 hover:bg-light-text10">
            {{ result.title }}
            <span class="block my-1 text-sm font-normal text-blue40">{{ result.node.summary }}</span>
          </g-link>
        </div>
      </div>
      <div v-if="searchResults.length === 0 & searchTerm.length > 2" class="w-full p-4 mt-1 font-normal border-b cursor-pointer bg-light-text10 dark:text-white text-natural-black">
        <p class="my-0">
          No results for '<strong>{{ searchTerm }}</strong>'
        </p>
      </div>
    </div>
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
