<template>
  <Layout>
    <section id="about-me" class="flex justify-between">
      <div>
        <h1 class="text-5xl text-natural-black font-fredoka-one">Imrane Chehabi</h1>
        <h2 class="mt-2 text-2xl font-bold text-gray-600 font-nunito-sans">Web Designer and Fullstack Developer</h2>
        <p class="mt-6 leading-relaxed text-natural-black font-nunito-sans">Hey! I'am Mohamed Imrane Chehabi, a 12 years old programmer who works with modern technologies like Laravel, October CMS, Vue.js, Nuxt.js, Gridsome and Tailwind CSS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum quasi, corporis eos consequuntur molestias reprehenderit exercitationem quod tempora tempore.</p>
      </div>
      <g-image src="~/assets/illustrations/web-developer.svg" alt=""  class="ml-10"/>
    </section>

    <section id="skills" class="mt-20">
      <h2 class="text-4xl font-bold text-center text-natural-black">Skills and Knowledge</h2>
      <div class="grid grid-cols-3 mx-auto place-items-center mt-7 gap-y-10">
        <g-image class="w-20" src="~/assets/logos/laravel.svg" alt="Laravel" />
        <g-image class="w-20" src="~/assets/logos/vuejs.svg" alt="Vue.js" />
        <g-image class="w-20" src="~/assets/logos/octobercms.svg" alt="October CMS" />
        <g-image class="w-20" src="~/assets/logos/nuxtjs.svg" alt="Nuxt JS" />
        <g-image class="w-20" src="~/assets/logos/tailwindcss.svg" alt="Tailwind CSS" />
        <g-image class="w-20" src="~/assets/logos/gridsome.svg" alt="Gridsome" />
      </div>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  }
}
</script>
