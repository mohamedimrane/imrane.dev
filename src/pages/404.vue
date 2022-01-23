<template>
    <Layout>
        <div class="container mt-60 mb-20">
            <h1 class="text-10xl font-extrabold text-center text-gray-800">404</h1>
            <h1 class="text-6xl font-extrabold text-center text-primary">Page Not Found</h1>
            <p class="text-lg font-extrabold text-center mt-6 text-gray-600">
                <g-link to="/" class="hover:cursor-pointer">Go back to home page</g-link>
            </p>
        </div>
    </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Blog",
    meta: [
      {
        key: "title",
        name: "title",
        content: "Not Found | Mohamed Imrane Chehabi"
      },
      {
        key: "description",
        name: "description",
        content: ""
      },
      {
        name: "author",
        content: ""
      }
    ]
  }
}
</script>
