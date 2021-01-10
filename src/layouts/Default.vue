<template>
  <div class="flex flex-col justify-between min-h-screen font-nunito-sans">
    <div>
      <AppHeader />
  
      <main class="w-11/12 mx-auto mt-16 md:w-8/12 lg:w-6/12 lg:mt-32">
        <slot />
      </main>
    </div>

    <AppFooter />
  </div>
</template>
