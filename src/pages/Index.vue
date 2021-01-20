<template>
  <Layout>
    <section id="about-me" class="flex justify-between">
      <div>
        <h1 class="text-3xl lg:text-5xl text-natural-black dark:text-white font-fredoka-one">Imrane Chehabi</h1>
        <h2 class="mt-2 text-lg font-bold text-gray-400 lg:text-2xl">Web Designer and Fullstack Developer</h2>
        <p class="mt-2 leading-loose lg:mt-6 text-natural-black dark:text-white">Hey! I'am Mohamed Imrane Chehabi, a 12 years old programmer who works with modern technologies like Laravel, October CMS, Vue.js, Nuxt.js, Gridsome and Tailwind CSS. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos earum quasi, corporis eos consequuntur molestias reprehenderit exercitationem quod tempora tempore.</p>
      </div>
      <g-image class="hidden ml-10 lg:block" src="~/assets/illustrations/web-developer.svg" alt="" />
    </section>

    <section id="skills" class="mt-12 md:mt-28">
      <h2 class="text-2xl font-bold text-center md:text-3xl lg:text-4xl text-natural-black dark:text-white">Skills and Tools</h2>
      <div class="grid grid-cols-2 mx-auto md:grid-cols-3 mt-7 place-items-center gap-y-10">
        <g-image class="w-11 md:w-16 lg:w-20" src="~/assets/logos/laravel.svg" alt="Laravel" />
        <g-image class="w-11 md:w-16 lg:w-20" src="~/assets/logos/vuejs.svg" alt="Vue.js" />
        <g-image class="w-11 md:w-16 lg:w-20" src="~/assets/logos/octobercms.svg" alt="October CMS" />
        <g-image class="w-11 md:w-16 lg:w-20" src="~/assets/logos/nuxtjs.svg" alt="Nuxt JS" />
        <g-image class="w-11 md:w-16 lg:w-20" src="~/assets/logos/tailwindcss.svg" alt="Tailwind CSS" />
        <g-image class="w-11 md:w-16 lg:w-20" src="~/assets/logos/gridsome.svg" alt="Gridsome" />
      </div>
    </section>

    <section id="contact-me" class="mt-12 md:mt-28">
      <h2 class="text-2xl font-bold text-center md:text-3xl lg:text-4xl text-natural-black dark:text-white">Contact Me</h2>
      <h3 class="mt-1 text-lg md:mt-10 md:text-xl lg:text-2xl text-natural-black dark:text-white">Looking to start a project?</h3>
      <h4 class="text-gray-400 lg:mt-2 lg:text-lg">Use the form below</h4>
      <div class="lg:grid lg:grid-cols-2">
        <form name="contact" method="POST" ref="contactForm" data-netlify="true" class="mt-5">
          <input type="hidden" name="form-name" value="contact" />
          <div class="lg:grid lg:grid-cols-2 lg:gap-x-4">
            <input type="text" name="full_name" id="full_name" placeholder="Full Name" required class="w-full p-2 text-gray-800 border border-gray-400 rounded-md shadow dark:text-white focus:outline-none focus:ring-2 placeholder-opacity-40 dark:bg-darkmode-dark-teal">
            <input type="email" name="email" id="email" placeholder="Email" required class="w-full p-2 mt-3 text-gray-800 border border-gray-400 rounded-md shadow dark:text-white md:mt-6 lg:mt-0 focus:outline-none focus:ring-2 placeholder-opacity-40 dark:bg-darkmode-dark-teal">
          </div>
          <input type="text" name="subject" id="subject" placeholder="Subject" required class="w-full p-2 mt-3 text-gray-800 border border-gray-400 rounded-md shadow dark:text-white md:mt-6 focus:outline-none focus:ring-2 placeholder-opacity-40 dark:bg-darkmode-dark-teal">
          <textarea name="message" id="message" placeholder="Message" required class="w-full h-40 p-2 mt-3 text-gray-800 border border-gray-400 rounded-md shadow dark:text-white md:mt-6 focus:outline-none focus:ring-2 placeholder-opacity-40 dark:bg-darkmode-dark-teal"></textarea>
          <button type="submit" class="flex justify-between px-6 py-2 mx-auto mt-4 text-white transition-colors duration-200 ease-in-out rounded-full focus:outline-none bg-teal hover:bg-dark-teal focus:ring-2 focus:ring-dark-teal">
            <g-image class="mt-0.5" src="~/assets/icons/send.svg" alt="" /> <span class="ml-3">Send Message</span>
          </button>
        </form>
        <g-image class="hidden my-auto lg:block" src="~/assets/illustrations/paper-plane.svg" alt="" />
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
