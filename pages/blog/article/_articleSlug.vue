<template>
  <div>
    <main class="container mt-20 mb-40">
      <div class="space-y-2">
    <!--//!-------------------------- -->
        <h1 class="text-3xl font-bold">{{ $route.params.articleSlug }}</h1>
        <p class="text-secondary-light">Last update on <time :datetime="'19/2/2020'">{{ "19/2/2020" }}</time></p>
        <div class="text-primary font-semibold">
          <!-- <NuxtLink class="uppercase text-xs hover:bg-primary hover:text-white py-1 px-4 rounded-full transition duration-100 ease-in-out" v-for="tag in $page.article.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</NuxtLink> -->
        </div>
      </div>
      <div class="markdown-body leading-9 tracking-wide">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis molestias possimus est! Hic optio incidunt, consequuntur temporibus odit tempore quae ipsa doloremque. Quis, ut vitae? Alias consequatur, atque omnis sunt modi, corrupti dignissimos, placeat incidunt deserunt ad vero hic velit. Quos odit voluptates, nobis obcaecati corporis sed exercitationem! Provident hic rem deleniti! Porro veniam, quas quis fuga, tempore repudiandae autem dolorem consequuntur culpa beatae aliquid enim quam architecto nesciunt soluta ad rem voluptatum mollitia. Omnis blanditiis, vitae nobis temporibus et soluta atque esse eius, ad labore ab veritatis, quod earum odio quibusdam distinctio laborum aliquam commodi cumque voluptas fugit. Voluptatum cum perspiciatis quod voluptates non, quaerat, odio autem veniam repellendus consequatur ipsam vero molestias provident accusantium soluta ullam quisquam sint. Ipsa eligendi sit, nulla quaerat, quis quibusdam expedita illo perferendis, maxime rem eaque suscipit doloribus iure tenetur omnis quam. Laborum accusamus recusandae modi ut ipsum quasi, nulla necessitatibus voluptate aut tempora, nihil officiis! Tenetur, et facere, omnis soluta iste ab dolorum harum odit cumque sed nihil similique cum, fugit ut amet alias earum repellat rem laboriosam. Molestias voluptates, non omnis magni dolorem sequi inventore at consequatur nulla harum exercitationem fugiat necessitatibus aliquam suscipit a neque ratione totam veritatis ut! Laboriosam.
      </div>
    </main>
  </div>
</template>

<script>
export default {
  methods: {
    stringCapitalize (str) {
      if (typeof str !== "string") return ""
      return str[0].toUpperCase() + str.slice(1)
    }
  }
}
</script>

<!-- <style src="../github-markdown.css" /> -->