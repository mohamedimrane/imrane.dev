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
        <div
          class="bg-gray-200 w-5/6 mx-auto lg:w-3/12 mb-4 rounded-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
        >
          <div class="relative">
            <img
              src="@/assets/images/thumbnails/blog1.png"
              class="mx-auto"
              alt="laravel and vue js on a desk"
            />
            <p
              class="bg-red-600 text-red-100 md:text-lg lg:text-base p-2 absolute rounded-tr-lg bottom-0 left-0 font-varela-round"
            >
              Laravel
            </p>
          </div>
          <div class="pb-5 pt-1 px-6 bg-red-600 text-red-100 font-quicksand">
            <h2 class="text-xl md:text-2xl font-bold leading-loose">
              Lorem ipsum Dolore Sit Amet
            </h2>
            <p class="md:text-lg lg:text-lg leading-loose">
              Say what your post is about
            </p>
            <span class="text-xs leading-loose">
              <span class="font-bold">18 August 2020 &bull; </span>
              Imrane Chehabi
            </span>
          </div>
        </div>
        <div
          class="bg-gray-200 w-5/6 mx-auto lg:w-3/12 mb-4 rounded-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
        >
          <div class="relative">
            <img
              src="@/assets/images/thumbnails/blog1.png"
              class="mx-auto"
              alt="laravel and vue js on a desk"
            />
            <p
              class="bg-green-500 text-green-100 md:text-lg lg:text-base p-2 absolute rounded-tr-lg bottom-0 left-0 font-varela-round"
            >
              Vue.js
            </p>
          </div>
          <div
            class="pb-5 pt-1 px-6 bg-green-500 text-green-100 font-quicksand"
          >
            <h2 class="text-xl md:text-2xl font-bold leading-loose">
              Lorem ipsum Dolore Sit Amet
            </h2>
            <p class="md:text-lg lg:text-lg leading-loose">
              Say what your post is about
            </p>
            <span class="text-xs leading-loose">
              <span class="font-bold">18 August 2020 &bull; </span>
              Imrane Chehabi
            </span>
          </div>
        </div>
        <div
          class="bg-gray-200 w-5/6 mx-auto lg:w-3/12 mb-4 rounded-xl overflow-hidden transition duration-300 ease-in-out hover:shadow-xl"
        >
          <div class="relative">
            <img
              src="@/assets/images/thumbnails/blog1.png"
              class="mx-auto"
              alt="laravel and vue js on a desk"
            />
            <p
              class="bg-teal-600 text-teal-100 md:text-lg lg:text-base p-2 absolute rounded-tr-lg bottom-0 left-0 font-varela-round"
            >
              Tailwind CSS
            </p>
          </div>
          <div class="relative">
            <div
              class="pb-5 pt-1 px-6 bg-teal-600 text-teal-100 font-quicksand"
            >
              <h2 class="text-xl md:text-2xl font-bold leading-loose">
                Lorem ipsum Dolore Sit Amet
              </h2>
              <p class="md:text-lg lg:text-lg leading-loose">
                Say what your post is about
              </p>
              <span class="text-xs leading-loose">
                <span class="font-bold">18 August 2020 &bull;</span> Imrane
                Chehabi
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
