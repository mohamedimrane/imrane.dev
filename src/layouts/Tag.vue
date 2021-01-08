<template>
  <div class="flex flex-col justify-between min-h-screen font-nunito-sans">
    <div>
      <AppHeader />
  
      <main class="w-11/12 mx-auto mt-16 md:w-5/12 md:mt-32">
        <slot />
      </main>
    </div>

    <AppFooter />
  </div>
</template>
