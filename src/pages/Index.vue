<template>
  <Layout>
    <IndexAboutMe />
    <IndexSkills />
    <IndexLatestBlogPosts />
    <IndexContact />
  </Layout>
</template>

<script>
import IndexAboutMe from "~/components/index/IndexAboutMe.vue";
import IndexSkills from "~/components/index/IndexSkills.vue";
import IndexLatestBlogPosts from "~/components/index/IndexLatestBlogPosts.vue";
import IndexContact from "~/components/index/IndexContact.vue";

export default {
  components: {
    IndexAboutMe,
    IndexSkills,
    IndexLatestBlogPosts,
    IndexContact
  },
  metaInfo: {
    title: 'Portfolio'
  },

}
</script>
