<template>
  <div id="content" class="my-16 md:my-18 lg:my-22">
    <AboutSection id="about" class="mb-14 md:mb-16 lg:mb-20" />
    <SkillsSection id="skills" class="mb-14 md:mb-16 lg:mb-20" />
    <RecentBlogPostsSection id="recent-blog-posts" />
  </div>
</template>

<script>
export default {
  mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 500)
    })
  },
}
</script>
