<template>
  <div :class="{ 'dark': theme === 'dark' }">
    <div class="flex flex-col justify-between min-h-screen font-nunito-sans dark:bg-darkmode-teal">
      <div>
        <AppHeader @themeSwitched="switchTheme" />
    
        <main class="w-11/12 mx-auto mt-16 md:w-9/12 lg:mt-32 lg:w-7/12">
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
  mounted () {
    this.theme = localStorage.getItem('theme')
  },
  updated () {
    this.theme = localStorage.getItem('theme')
  },
  methods: {
    switchTheme () {
      this.theme = localStorage.getItem('theme')
    }
  }
};
</script>