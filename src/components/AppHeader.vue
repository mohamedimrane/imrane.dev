<template>
  <header class="flex flex-col justify-between w-11/12 mx-auto my-6 lg:w-4/6 lg:flex-row">
    <g-image class="mx-auto mt-2 lg:mt-0 h-7 lg:h-auto lg:mx-0" src="~/assets/navbar-logo.svg" />

    <nav class="mx-auto mt-9 lg:mt-auto lg:mx-0 lg:w-3/12">
      <ul class="flex justify-between">
        <g-link to="/" tag="li" class="font-bold uppercase cursor-pointer text-natural-black">ABOUT</g-link>
        <g-link to="/#skills" class="font-bold uppercase cursor-pointer ml-7 md:ml-20 lg:ml-0 text-natural-black">SKILLS</g-link>
        <g-link to="/blog" tag="li" class="font-bold uppercase cursor-pointer ml-7 md:ml-20 lg:ml-0 text-natural-black">BLOG</g-link>
      </ul>
    </nav>
  </header>
</template>
