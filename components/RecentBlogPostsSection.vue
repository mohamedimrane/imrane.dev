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
          title="Lorem Ipsum Dolor Sit Amet"
          description="Say what your post is about"
          createdAt="18 August 2020"
          author="Imrane Chehabi"
          class="card-1"
        />

        <AppPostCard
          category="Vue.js"
          title="Lorem Ipsum Dolor Sit Amet"
          description="Say what your post is about"
          createdAt="18 August 2020"
          author="Imrane Chehabi"
          class="card-2"
        />

        <AppPostCard
          category="TailwindCSS"
          title="Lorem Ipsum Dolor Sit Amet"
          description="Say what your post is about"
          createdAt="18 August 2020"
          author="Imrane Chehabi"
          class="card-3"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scroped>
.card-1 .category-badge,
.card-1 .details {
  @apply bg-red-600;
  @apply text-red-100;
}

.card-2 .category-badge,
.card-2 .details {
  @apply bg-green-600;
  @apply text-green-100;
}

.card-3 .category-badge,
.card-3 .details {
  @apply bg-teal-600;
  @apply text-teal-100;
}
</style>
