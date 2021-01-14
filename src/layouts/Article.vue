<template>
  <div :class="{ 'dark': theme === 'dark' }">
    <div class="flex flex-col justify-between min-h-screen font-nunito-sans dark:bg-darkmode-teal">
      <div>
        <AppHeader @themeSwitched="switchTheme" />
    
        <slot />
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

<style src="../github-markdown.css" />
<style>
.container-inner {
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (min-width: 640px) {
  .container-inner {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container-inner {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container-inner {
    max-width: 800px;
  }
}
</style>