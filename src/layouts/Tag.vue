<template>
  <div :class="{ 'dark': theme === 'dark' }">
    <div class="flex flex-col justify-between min-h-screen font-nunito-sans dark:bg-darkmode-teal">
      <div>
        <AppHeader @themeSwitched="switchTheme" />
    
        <main class="w-11/12 mx-auto mt-16 md:w-9/12 lg:w-5/12 lg:mt-32">
          <slot />
        </main>
      </div>
  
      <AppFooter />
    </div>
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
