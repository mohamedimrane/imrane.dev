<template>
  <footer class="relative">
    <!-- <svg class="fill-current absolute bottom-full transform scale-y-70 translate-y-1 origin-bottom" viewBox="0 0 1400 74" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C87.243 11.422 173.12 5.133 257.633 5.133 468.305 5.133 578.027 74 700 74c136.015 0 290.882-96.208 481.234-68.867C1268.807 17.71 1341.73 24 1400 24v50H0V24z"></path></svg> -->
    <svg viewBox="0 0 1400 74" xmlns="http://www.w3.org/2000/svg" class="fill-current text-secondary absolute bottom-full" data-v-308e9770=""><path d="M0 24C87.243 11.422 173.12 5.133 257.633 5.133 468.305 5.133 578.027 74 700 74c136.015 0 290.882-96.208 481.234-68.867C1268.807 17.71 1341.73 24 1400 24v50H0V24z" data-v-308e9770=""></path></svg>
    <div class="pb-14 pt-6 bg-secondary">
      <div class="container flex justify-between text-white font-semibold">
        <div>
          Site built with <a class="link" href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>. Hosted on <a class="link" href="https://www.netlify.com/" target="_blank">Netlify</a> and <a class="link" href="https://www.github.com/" target="_blank">Github</a>.
        </div>
        <div class="flex space-x-6">
          <a href="https://twitter.com/ImraneChehabi">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" class="socialmedia"><path d="M17.316 6.246c.008.162.011.326.011.488 0 4.99-3.797 10.742-10.74 10.742-2.133 0-4.116-.625-5.787-1.697a7.577 7.577 0 0 0 5.588-1.562 3.779 3.779 0 0 1-3.526-2.621 3.858 3.858 0 0 0 1.705-.065 3.779 3.779 0 0 1-3.028-3.703v-.047a3.766 3.766 0 0 0 1.71.473 3.775 3.775 0 0 1-1.168-5.041 10.716 10.716 0 0 0 7.781 3.945 3.813 3.813 0 0 1-.097-.861 3.773 3.773 0 0 1 3.774-3.773 3.77 3.77 0 0 1 2.756 1.191 7.602 7.602 0 0 0 2.397-.916 3.789 3.789 0 0 1-1.66 2.088 7.55 7.55 0 0 0 2.168-.594 7.623 7.623 0 0 1-1.884 1.953z"></path></svg>
          </a>
          <a href="https://github.com/mohamedimrane">
            <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512" class="socialmedia"><path d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"></path></svg>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.link {
  @apply text-primary transition-colors duration-100 ease-in-out hover:text-primary-light cursor-pointer;
}

.socialmedia {
  @apply w-6 h-6 fill-current stroke-current hover:text-primary transition-colors duration-100 ease-in-out;
}
</style>
