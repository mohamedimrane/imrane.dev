<template>
  <div>
    <nuxt-link to="/test">test</nuxt-link>
    <AppNavbar id="navbar" class="my-3" />
    <div id="content" class="mb-8 md:my-16 lg:my-20">
      <AboutSection class="mb-6 sm:mb-8 md:mb-16 lg:mb-20" />
      <SkillsSection class="mb-6 sm:mb-8 md:mb-16 lg:mb-20" />
      <RecentBlogPosts />
    </div>
    <AppFooter id="footer" />
  </div>
</template>

<script>
export default {};
</script>
