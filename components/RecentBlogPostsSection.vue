<template>
  <div>
    <div class="mx-auto my-4 container flex flex-col items-center">
      <div class="mb-4">
        <h2
          class="font-quicksand font-medium text-2xl md:text-3xl lg:text-4xl text-gray-900"
        >
          Recent Blog Posts
        </h2>
      </div>
      <div class="flex flex-col lg:flex-row lg:justify-around">
        <AppPostCard
          category="Laravel"
          cardColor="red"
          title="Lorem Ipsum Dolor Sit Amet"
          description="Say what your post is about"
          createdAt="18 August 2020"
          author="Imrane Chehabi"
        />

        <AppPostCard
          category="Vue.js"
          cardColor="green"
          title="Lorem Ipsum Dolor Sit Amet"
          description="Say what your post is about"
          createdAt="18 August 2020"
          author="Imrane Chehabi"
        />

        <AppPostCard
          category="TailwindCSS"
          cardColor="teal"
          title="Lorem Ipsum Dolor Sit Amet"
          description="Say what your post is about"
          createdAt="18 August 2020"
          author="Imrane Chehabi"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
