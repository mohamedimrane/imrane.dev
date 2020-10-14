<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
export default {
  created() {
    // if (this.checkDarkMode()) {
    //   document.documentElement.classList.add("mode-dark");
    // } else {
    //   document.documentElement.classList.remove("mode-dark");
    // }
  },
  methods: {
    checkDarkMode() {
      if (
        window.matchMedia &&
        window.matchMedia('(prefers-color-scheme: dark)').matches
      ) {
        return true
      }
      return false
    },
  },
}
</script>
