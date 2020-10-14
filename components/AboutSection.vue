<template>
  <div>
    <div class="mx-auto my-4 px-4 sm:px-0 container flex flex-col items-center">
      <Avatar class="mb-5" />
      <div class="flex flex-col items-center">
        <h1 class="font-fredoka-one text-5xl lg:text-6xl text-gray-900">
          Imrane Chehabi
        </h1>
        <h3
          class="font-quicksand font-medium text-xl lg:text-2xl text-gray-600"
        >
          Web Desiner & Fullstack Developer
        </h3>
        <div class="mt-6 flex flex-col items-center">
          <div
            class="w-6 h-6 transform rotate-45 border border-gray-500 border-r-0 border-b-0 bg-white"
          ></div>
          <div
            class="-m-3 p-5 w-3/4 border border-gray-500 bg-white shadow-xl rounded-xl"
          >
            <p
              class="font-quicksand text-lg lg:text-xl text-gray-600 md:leading-6 lg:leading-8"
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet
              doloremque praesentium deleniti quidem laborum?
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from './Avatar'

export default {
  components: {
    Avatar,
  },
}
</script>
