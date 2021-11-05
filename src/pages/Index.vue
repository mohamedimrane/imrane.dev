<template>
  <Layout>
    <!-- Start About me -->
    <div class="container mt-60 mb-20 grid grid-cols-2 gap-x-20">
      <div>
        <div class="font-extrabold">
          <h1 class="text-6xl">Mohamed Imrane Chehabi</h1>
          <h2 class="mt-1 text-2xl text-primary">Full Stack Web Developer</h2>
        </div>

        <p class="mt-6 text-lg text-secondary-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas dolore ullam maiores odit explicabo dolorum velit adipisci officiis quis at.</p>
      </div>
      <g-image src="~/assets/illustrations/developer.svg"/>
    </div>
    <!-- End About me -->

    <!-- Start Skills  -->
    <div>
      <svg class="w-full text-primary fill-current" viewBox="0 0 1400 50" xmlns="http://www.w3.org/2000/svg"><path d="M0 0c309.151 33.333 542.484 50 700 50 157.516 0 390.849-16.667 700-50v50H0V0z"></path></svg>
      <div class="py-40 bg-primary text-white">
        <div class="container">
          <div class="grid grid-cols-2 gap-x-20">
            <div>
              <h2 class="text-3xl font-extrabold">Skills And Tools That I Use</h2>
              <p class="mt-6 text-lg">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellendus, nisi inventore temporibus suscipit molestias ab!</p>
            </div>

            <div class="grid grid-cols-3 gap-y-10">
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="http://laravel.com/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/laravel.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="http://vuejs.org/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/vuejs.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://octobercms.com/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/octobercms.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://nuxtjs.org/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/nuxtjs.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://tailwindcss.com/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/tailwindcss.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://gridsome.org/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/gridsome.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://golang.org/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/go.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript" target="_blanck">
                <g-image class="w-18 h-18 mx-auto" src="~/assets/logos/javascript.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://www.typescriptlang.org/" target="_blanck">
                <g-image class="w-18 h-18 mx-auto" src="~/assets/logos/typescript.svg"/>
              </a>
              <a class="transform hover:scale-110 transition-transform duration-100 ease-in-out" href="https://www.php.net/" target="_blanck">
                <g-image class="w-20 h-20 mx-auto" src="~/assets/logos/php.svg"/>
              </a>
            </div>
          </div>
        </div>
      </div>
      <svg class="w-full text-primary fill-current" viewBox="0 0 1400 50" xmlns="http://www.w3.org/2000/svg"><path d="M0 50C309.151 16.667 542.484 0 700 0c157.516 0 390.849 16.667 700 50V0H0v50z"></path></svg>
    </div>

    <!-- End Skills -->

    <!-- Start Latest blog posts -->
    <div class="container py-20 flex flex-col">
      <h2 class="text-3xl font-extrabold relative flex items-center self-start">
        <span class="absolute inline-block w-full h-4 mt-2 -ml-2 bg-primary"></span>
        <span class="z-50">Latest Blog Posts</span>
      </h2>

      <div class="mt-6 flex">
        <div class="grid grid-cols-2 gap-x-10 gap-y-10 h-full col-span-2 w-2/3 flex-1">
          <div v-for="article in $page.latestArticles.edges" :key="article.node.id" class="transform hover:scale-102 transition-transform duration-100 ease-in-out">
            <div class="bg-primary rounded-lg transform translate-x-1 translate-y-1">
              <div class="bg-white border-2 border-primary rounded-lg p-5 space-y-2 transform -translate-x-1 -translate-y-1">
                <div class="flex items-center text-lg font-bold space-x-2">
                  <g-image :src="article.node.icon.path" :alt="article.node.icon.alt" class="w-8 h-8" />
                  <g-link class="truncate" :to="article.node.path" :title="article.node.title"><h3>{{ truncate(article.node.title, 27) }}</h3></g-link>
                </div>

                <div class="space-x-2 text-primary font-semibold">
                  <g-link class="uppercase text-xs hover:bg-primary hover:text-white py-1 px-2 rounded-full transition duration-100 ease-in-out" v-for="tag in article.node.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</g-link>
                </div>

                <p class="text-secondary-light">{{ article.node.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="ml-10 -mr-230 -my-30 flex items-center justify-center">
          <g-image src="~/assets/illustrations/latest-blog-posts.svg" class="block"/>
        </div>
      </div>
    </div>
    <!-- End Latest blog posts -->

    <!-- Start Contact-->
    <div id="contact">
      <svg class="w-full text-gray-200 fill-current" viewBox="0 0 1400 74" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C87.243 11.422 173.12 5.133 257.633 5.133 468.305 5.133 578.027 74 700 74c136.015 0 290.882-96.208 481.234-68.867C1268.807 17.71 1341.73 24 1400 24v50H0V24z"></path></svg>
      <div class="py-40 bg-gray-200">
        <div class="container flex flex-col space-y-10">
          <h2 class="text-3xl font-extrabold inline-block mx-auto relative flex items-center self-start">
            <span class="absolute inline-block w-full h-4 mt-2 -ml-2 bg-primary"></span>
            <span class="z-50">Contact Me</span>
          </h2>

          <h3 class="text-xl text-secondary-light text-center">Looking to start a project?</h3>

          <div class="flex">
            <div class="w-1/2">
              <form name="contact" method="POST" ref="contactForm" data-netlify="true" class="space-y-6">
                <input type="hidden" name="form-name" value="contact" />
                <input type="text" name="full_name" id="full_name" placeholder="Full Name" required class="w-full px-6 py-2 rounded-lg border-secondary focus:ring-primary" />
                <input type="email" name="email" id="email" placeholder="Email" required class="w-full px-6 py-2 rounded-lg border-secondary focus:ring-primary" />
                <input type="text" name="subject" id="subject" placeholder="Subject" required class="w-full px-6 py-2 rounded-lg border-secondary focus:ring-primary" />
                <textarea name="message" id="message" placeholder="Message" required class="w-full px-6 py-2 rounded-lg min-h-50 border-secondary focus:ring-primary"></textarea>
                <div class="bg-secondary inline-block rounded-lg transform translate-x-1 translate-y-1">
                  <button type="submit" class="border-secondary bg-gray-200 border-2 font-bold text-lg px-6 py-3 rounded-lg transition-colors duration-100 ease-in-out hover:(bg-primary-light text-white) focus:outline-none transform -translate-x-1 -translate-y-1 focus:(-translate-x-0.5 -translate-y-0.5)">Send</button>
                </div>
              </form>
            </div>
            <div class="w-1/2 flex">
              <g-image class="mb-20" src="~/assets/illustrations/contact-me.svg" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- End Contact -->
  </Layout>
</template>

<page-query>
query Article {
  latestArticles: allArticle (limit: 4) {
    edges {
      node {
        title
        description
        id
        path
        icon {
          path
          alt
        }
        tags {
          id
          title
          path
        }
        date (format: "MMMM D, Y")
      }
    }
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Portfolio'
  },
  methods: {
    truncate (string, characters) {
      if (string.length > characters) {
        return string.split('').splice(0, characters).join('') + '...'
      }
      return string
    }
  }
}
</script>
