<template>
  <header class="container flex justify-between items-end mt-8">
    <!-- <img src="~/assets/navbar-logo.svg" /> -->
    <nuxt-link to="/"><h1 class="text-3xl text-primary font-extrabold">Imrane</h1></nuxt-link>
    <nav class="space-x-10 font-semibold">
      <nuxt-link to="/blog" class="relative text-xl lg:text-base">Blog <div class="hidden absolute bottom-0 left-0 w-full h-1 -mb-2 bg-primary rounded-full"></div></nuxt-link>
      <nuxt-link to="/#contact" class="relative text-xl lg:text-base">Contact <div class="hidden absolute bottom-0 left-0 w-full h-1 -mb-2 bg-primary rounded-full"></div></nuxt-link>
    </nav>
  </header>
</template>

<script>
export default {

  computed: {
    theme () {
      if (typeof window !== `undefined`) {
        return window.localStorage.getItem("theme")
      }
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
        window.localStorage.setItem("theme", window.localStorage.getItem("theme") === "light" ? "dark" : "light")
        this.$emit("themeSwitched")
      }
    }
  }

}
</script>

<style>
a.active > div {
  @apply block;
}

.toggle {
   --size: 1.4rem;
   appearance: none;
   outline: none;
   cursor: pointer;
   width: var(--size);
   height: var(--size);
   box-shadow: inset calc(var(--size) * 0.33) calc(var(--size) * -0.25) 0;
   border-radius: 999px;
   color: #e6e6ff;
   transition: all 500ms;
}
 .toggle:checked {
   --ray-size: calc(var(--size) * -0.4);
   --offset-orthogonal: calc(var(--size) * 0.65);
   --offset-diagonal: calc(var(--size) * 0.45);
   transform: scale(0.75);
   color: #fa0;
   box-shadow: inset 0 0 0 var(--size), calc(var(--offset-orthogonal) * -1) 0 0 var(--ray-size), var(--offset-orthogonal) 0 0 var(--ray-size), 0 calc(var(--offset-orthogonal) * -1) 0 var(--ray-size), 0 var(--offset-orthogonal) 0 var(--ray-size), calc(var(--offset-diagonal) * -1) calc(var(--offset-diagonal) * -1) 0 var(--ray-size), var(--offset-diagonal) var(--offset-diagonal) 0 var(--ray-size), calc(var(--offset-diagonal) * -1) var(--offset-diagonal) 0 var(--ray-size), var(--offset-diagonal) calc(var(--offset-diagonal) * -1) 0 var(--ray-size);
}

 .toggle {
   z-index: 1;
}
 .toggle:checked ~ .background {
   --bg: white;
}
 .toggle:checked ~ .title {
   --color: #fa0;
}
</style>
