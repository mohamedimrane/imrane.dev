<template>
  <Layout>
    <section id="about-me" class="flex justify-between">
      <div>
        <h1 class="text-5xl text-natural-black font-fredoka-one">Imrane Chehabi</h1>
        <h2 class="mt-2 text-2xl font-bold text-gray-400">Web Designer and Fullstack Developer</h2>
        <p class="mt-6 leading-loose text-natural-black">Hey! I'am Mohamed Imrane Chehabi, a 12 years old programmer who works with modern technologies like Laravel, October CMS, Vue.js, Nuxt.js, Gridsome and Tailwind CSS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum quasi, corporis eos consequuntur molestias reprehenderit exercitationem quod tempora tempore.</p>
      </div>
      <g-image class="ml-10" src="~/assets/illustrations/web-developer.svg" alt="" />
    </section>

    <section id="skills" class="mt-28">
      <h2 class="text-4xl font-bold text-center text-natural-black">Skills and Knowledge</h2>
      <div class="grid grid-cols-3 mx-auto mt-10 place-items-center gap-y-10">
        <g-image class="w-20" src="~/assets/logos/laravel.svg" alt="Laravel" />
        <g-image class="w-20" src="~/assets/logos/vuejs.svg" alt="Vue.js" />
        <g-image class="w-20" src="~/assets/logos/octobercms.svg" alt="October CMS" />
        <g-image class="w-20" src="~/assets/logos/nuxtjs.svg" alt="Nuxt JS" />
        <g-image class="w-20" src="~/assets/logos/tailwindcss.svg" alt="Tailwind CSS" />
        <g-image class="w-20" src="~/assets/logos/gridsome.svg" alt="Gridsome" />
      </div>
    </section>

    <section id="contact-me" class="mt-28">
      <h2 class="text-4xl font-bold text-center text-natural-black">Contact Me</h2>
      <h3 class="mt-10 text-2xl text-natural-black">Looking to start a project?</h3>
      <h4 class="mt-2 text-lg text-gray-400">Use the form below or send me an <a class="text-teal" href="mailto:imrane@chehabi.ma">email me</a></h4>
      <div class="grid grid-cols-2">
        <form @click.prevent="" class="mt-5">
          <div class="grid grid-cols-2 gap-x-4">
            <input type="text" name="full_name" id="full_name" placeholder="Full Name" class="p-2 text-gray-800 border border-gray-400 rounded-md shadow focus:outline-none focus:ring-2 placeholder-opacity-40">
            <input type="email" name="email" id="email" placeholder="Email" class="p-2 text-gray-800 border border-gray-400 rounded-md shadow focus:outline-none focus:ring-2 placeholder-opacity-40">
          </div>
          <input type="text" name="subject" id="subject" placeholder="Subject" class="w-full p-2 mt-6 text-gray-800 border border-gray-400 rounded-md shadow focus:outline-none focus:ring-2 placeholder-opacity-40">
          <textarea name="message" id="message" placeholder="Message" class="w-full h-40 p-2 mt-6 text-gray-800 border border-gray-400 rounded-md shadow focus:outline-none focus:ring-2 placeholder-opacity-40"></textarea>
          <button type="submit" class="flex justify-between px-6 py-2 mx-auto mt-4 text-white transition-colors duration-200 ease-in-out rounded-full focus:outline-none bg-teal hover:bg-dark-teal focus:ring-2 focus:ring-dark-teal">
            <g-image class="mt-0.5" src="~/assets/icons/send.svg"/> <span class="ml-3">Send Message</span>
          </button>
        </form>
        <g-image class="my-auto" src="~/assets/illustrations/paper-plane.svg" alt="" />
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
