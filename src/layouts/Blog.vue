<template>
  <div class="flex flex-col justify-between min-h-screen font-nunito-sans">
    <div>
      <AppHeader />
  
      <main class="w-11/12 mx-auto mt-16 md:mt-32 md:w-7/12">
        <slot />
      </main>
    </div>

    <AppFooter />
  </div>
</template>
