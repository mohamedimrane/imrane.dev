<template>
  <div>
    <AppNavbar id="navbar" />
    <Nuxt />
    <AppFooter id="footer" />
    <AppThanks id="thanks" />
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
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>
