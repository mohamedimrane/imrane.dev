<template>
  <div class="flex flex-col justify-between min-h-screen font-nunito-sans">
    <div>
      <AppHeader />
  
      <main class="w-7/12 mx-auto mt-32">
        <slot />
      </main>
    </div>

    <footer class="py-5 bg-gray-200 mt-28">
      <div class="flex justify-between w-4/6 mx-auto">
        <span class="font-semibold">
          Built with <a href="https://gridsome.org/" class="text-green-500 cursor-pointer">Gridsome</a>. 
          Hosted on <a href="https://www.netlify.com/" class="cursor-pointer text-teal">Netlify</a> and <a href="https://github.com/" class="cursor-pointer text-teal">Github</a>.
        </span>

        <div class="flex justify-between w-1/12">
          <a href="https://twitter.com/ImraneChehabi"><g-image src="~/assets/logos/twitter.svg" /></a>
          <a href="https://github.com/mohamedimrane"><g-image src="~/assets/logos/github.svg" /></a>
        </div>
      </div>
    </footer>
  </div>
</template>
