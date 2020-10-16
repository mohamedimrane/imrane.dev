<template>
  <div class="z-50 relative md:static bg-white">
    <transition name="slide">
      <NavbarLinksHiddenable
        class="hiddenable-menu"
        :shown="isMenuOpen"
        v-if="isMenuOpen"
      />
    </transition>
    <div class="h-14 w-11/12 md:container mx-auto bg-white z-50">
      <div class="flex flex-row justify-between items-center">
        <nuxt-link
          to="/"
          class="font-fredoka-one text-5xl lg:text-6xl text-teal-600"
          tag="h1"
        >
          <a>
            Imrane
          </a>
        </nuxt-link>
        <div>
          <div
            class="block md:hidden"
            @click="openMenu"
            v-on-clickaway="closeMenu"
          >
            <NavbarMenuIcon />
          </div>
          <NavbarLinks />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'

export default {
  data() {
    return {
      isMenuOpen: false,
    }
  },
  mixins: [clickaway],
  methods: {
    openMenu() {
      this.isMenuOpen = !this.isMenuOpen
    },
    closeMenu() {
      this.isMenuOpen = false
    },
  },
}
</script>

<style>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(-14rem);
}
</style>
