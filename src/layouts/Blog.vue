<template>
  <div class="flex flex-col justify-between min-h-screen font-nunito-sans">
    <div>
      <AppHeader />
  
      <main class="w-7/12 mx-auto mt-32">
        <slot />
      </main>
    </div>

    <AppFooter />
  </div>
</template>
