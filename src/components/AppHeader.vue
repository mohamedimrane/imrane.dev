<template>
  <header class="flex flex-col justify-between w-11/12 mx-auto my-6 lg:w-4/6 lg:flex-row">
    <g-image class="mx-auto mt-2 lg:mt-0 h-7 lg:h-auto lg:mx-0" src="~/assets/navbar-logo.svg" />

    <nav class="mx-auto mt-9 lg:mt-auto lg:mx-0 lg:w-3/12">
      <ul class="flex justify-between">
        <g-link to="/" tag="li" class="font-bold uppercase cursor-pointer text-natural-black dark:text-white">ABOUT</g-link>
        <g-link to="/#skills" class="font-bold uppercase cursor-pointer ml-7 md:ml-20 lg:ml-0 text-natural-black dark:text-white">SKILLS</g-link>
        <g-link to="/blog" tag="li" class="font-bold uppercase cursor-pointer ml-7 md:ml-20 lg:ml-0 text-natural-black dark:text-white">BLOG</g-link>
				<li class="cursor-pointer ml-7 md:ml-20 lg:ml-0"><input id="toggle" @click="switchTheme" class="toggle" type="checkbox" :checked="theme === 'light'"></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  props: {
    themeProp: String
  },
  data () {
    return {
      theme: ''
    }
  },
  mounted () {
    this.theme = this.themeProp ? this.themeProp : 'light'
  },
  methods: {
    switchTheme () {
      this.theme = this.theme === 'light' ? 'dark' : 'light'

      this.$emit('themeSwitched', this.theme)
    }
  }
};
</script>

<style>
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
