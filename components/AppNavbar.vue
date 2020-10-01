<template>
  <div class="mx-4">
    <div class="mx-auto container flex flex-row justify-between items-center">
      <h1
        class="font-fredoka-one text-4xl sm:text-5xl lg:text-6xl text-teal-600"
      >
        Imrane
      </h1>
      <div>
        <ul class="hidden md:flex-row md:justify-between md:flex">
          <li
            class="mx-8 text-3xl transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
          >
            About
          </li>
          <li
            class="mx-8 text-3xl transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
          >
            Skills
          </li>
          <li
            class="mx-8 text-3xl transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
          >
            Blog
          </li>
          <li
            class="mx-8 text-3xl transition duration-300 ease-in-out hover:text-teal-600 cursor-pointer"
          >
            Contact
          </li>
        </ul>
        <div class="sm:block lg:hidden">
          <svg
            class="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
