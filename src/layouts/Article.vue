<template>
  <div class="flex flex-col justify-between min-h-screen font-nunito-sans">
    <div>
      <AppHeader />
  
      <slot />
    </div>

    <AppFooter />
  </div>
</template>

<style src="../github-markdown.css" />
<style>
.container-inner {
  width: 100%;
  padding-left: 2rem;
  padding-right: 2rem;
}

@media (min-width: 640px) {
  .container-inner {
    max-width: 640px;
  }
}

@media (min-width: 768px) {
  .container-inner {
    max-width: 768px;
  }
}

@media (min-width: 1024px) {
  .container-inner {
    max-width: 800px;
  }
}
</style>