<template>
  <div class="text-secondary flex flex-col justify-between min-h-screen overflow-hidden" :class="{ 'dark': theme === 'dark' }">
    <div>
      <AppHeader @themeSwitched="switchTheme" />
      <main>
        <slot />
      </main>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "~/components/AppHeader.vue";
import AppFooter from "~/components/AppFooter.vue";

export default {
  components: { AppHeader, AppFooter },
  data () {
    return {
      theme: "light"
    }
  },
  created () {
    if (typeof window !== "undefined") {
      if (!window.localStorage.getItem("theme")) {
        window.localStorage.setItem("theme", "light")
      }
    }
  },
  mounted () {
    if (typeof window !== `undefined`) {
      this.theme = window.localStorage.getItem("theme")
    }
  },
  updated () {
    if (typeof window !== `undefined`) {
      this.theme = window.localStorage.getItem("theme")
    }
  },
  methods: {
    switchTheme () {
      if (typeof window !== `undefined`) {
        this.theme = window.localStorage.getItem("theme")
      }
    }
  }
}
</script>
