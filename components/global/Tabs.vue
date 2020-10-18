<template>
  <div class="tabs font-semibold rounded-md">
    <div
      class="rounded-t border-b-2 border-gray-600 px-2 bg-dark-elevatedSurface text-sm relative"
    >
      <button
        v-for="tab in tabs"
        :key="tab.name"
        @click="selectTab(tab)"
        class="px-4 py-3 text-gray-400 font-bold font-mono active focus:outline-none uppercase"
      >
        {{ tab.name }}
      </button>
    </div>
    <div class="py-6 px-3 text-gray-400">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    }
  },
  created() {
    this.tabs = this.$children
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = tab.name == selectedTab.name
      })
    },
  },
}
</script>

<style>
.tabs {
  background-color: #2f495e;
}
</style>
