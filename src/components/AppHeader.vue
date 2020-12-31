<template>
  <header class="flex justify-between w-4/6 mx-auto my-6">
    <g-image src="~/assets/navbar-logo.svg" />

    <nav class="w-3/12 mt-auto">
      <ul class="flex justify-between">
        <g-link to="/" tag="li" class="font-bold uppercase cursor-pointer text-natural-black">ABOUT</g-link>
        <g-link to="/#skills" class="font-bold uppercase cursor-pointer text-natural-black">SKILLS</g-link>
        <g-link to="/blog" tag="li" class="font-bold uppercase cursor-pointer text-natural-black">BLOG</g-link>
      </ul>
    </nav>
  </header>
</template>
