<template>
  <header class="flex flex-col justify-between w-11/12 mx-auto my-6 md:w-4/6 md:flex-row">
    <g-image class="mx-auto mt-2 md:mt-0 h-7 md:h-auto md:mx-0" src="~/assets/navbar-logo.svg" />

    <nav class="mx-auto mt-9 md:mt-auto md:mx-0 md:w-3/12">
      <ul class="flex justify-between">
        <g-link to="/" tag="li" class="font-bold uppercase cursor-pointer text-natural-black">ABOUT</g-link>
        <g-link to="/#skills" class="font-bold uppercase cursor-pointer ml-7 md:ml-0 text-natural-black">SKILLS</g-link>
        <g-link to="/blog" tag="li" class="font-bold uppercase cursor-pointer ml-7 md:ml-0 text-natural-black">BLOG</g-link>
      </ul>
    </nav>
  </header>
</template>
