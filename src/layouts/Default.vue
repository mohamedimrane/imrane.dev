<template>
  <div class="text-secondary" :class="{ 'dark': theme === 'dark' }">
    <AppHeader @themeSwitched="switchTheme" />
    <slot />
    <AppFooter />
  </div>
</template>

<script>
export default {
  data () {
    return {
      theme: 'light'
    }
  },
  created () {
    if (typeof window !== 'undefined') {
      if (!window.localStorage.getItem('theme')) {
        window.localStorage.setItem('theme', 'light')
      }
    }
  },
  mounted () {
    if (typeof window !== `undefined`) {
      this.theme = window.localStorage.getItem('theme')
    }
  },
  updated () {
    if (typeof window !== `undefined`) {
      this.theme = window.localStorage.getItem('theme')
    }
  },
  methods: {
    switchTheme () {
      if (typeof window !== `undefined`) {
        this.theme = window.localStorage.getItem('theme')
      }
    }
  }
};
</script>
