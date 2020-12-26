<template>

  <article class="relative flex justify-start pt-6 pb-5 border border-t-0 first:border-t first:rounded-t-md last:rounded-b-md border-light-text-100 hover:bg-light-text-100 article">

    <div v-if="article.icon" class="w-24 pt-1">
      <img class="w-8 mx-auto" :src="article.icon.path" :alt="article.icon.alt" />
    </div>
    <div class="w-full">
      <g-link class="" :to="article.path">
        <h4 class="font-semibold sm:text-lg text-blue30">
          {{ article.title }}
        </h4>
      </g-link>

      <time class="block mt-1 text-sm font-light text-blue40" :datetime="article.datetime">{{ article.date }}</time>
    </div>
  </article>

</template>

<script>
export default {
  props: ['article'],
}
</script>

<style>
.article:hover::after {
  content: '';
  width: 100%;
  height: 1px;
  border: solid 1px rgba(4, 25, 50);
  background-color: rgb(4, 25, 50);
  position: absolute;
  left: 0px;
  bottom: 0px;
  box-shadow: rgba(4, 25, 50, 0.7) 3px 0px 22px;
  margin: 0px 0px 0px -1px;
  box-sizing: content-box;
}
.article::after {
  content: '';
  width: 0%;
  height: 0;
  border: solid 1px rgba(4, 25, 50, 0, 0);
  background-color: rgb(4, 25, 50, 0);
  position: absolute;
  left: 0px;
  bottom: 0px;
  margin: 0px 0px 0px -1px;
  box-sizing: content-box;
  transition: all 300ms ease-in-out;
}
</style>