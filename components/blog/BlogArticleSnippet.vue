<template>
  <nuxt-link tag="div" :to="'blog/article' + article.path" class="group bg-primary rounded-lg transform translate-x-1 translate-y-1 transform hover:scale-102 transition-transform duration-100 ease-in-out cursor-pointer">
    <div class="flex p-6 bg-white border-2 border-primary rounded-lg transform -translate-x-1 -translate-y-1">
      <div class="w-1/12 flex items-center">
        <img :src="article.icon.path" class="w-10 h-10" />
      </div>
      <div class="w-11/12">
        <h4 class="block text-lg font-bold">{{ article.title }}</h4>
        <time class="block text-sm text-secondary-light" :datetime="article.updatedAt">{{ articleFormatedUpdatedAt }}</time>
        <div class="text-primary font-semibold -ml-2">
          <nuxt-link class="uppercase text-xs hover:bg-primary hover:text-white py-1 px-2 rounded-full transition duration-100 ease-in-out" v-for="tag in article.tags" :key="tag.id" :to="tag.path">{{ tag.title }}</nuxt-link>
        </div>
      </div>
    </div>
  </nuxt-link>
</template>

<script>
export default {

  props: ["article"],

  computed: {
    articleFormatedUpdatedAt() {
      let monthsNames = {
        1: "January",
        2: "February",
        3: "March",
        4: "April",
        5: "May",
        6: "June",
        7: "July",
        8: "August",
        9: "Septembre",
        10: "October",
        11: "November",
        12: "December",
      }

      let date = new Date(this.article.updatedAt)

      let formatedDate = monthsNames[date.getMonth()+1] + " " + date.getDate() + ", " + date.getFullYear()

      return formatedDate
    }
  },


}
</script>

<style>
/* .article:hover::after {
  content: "";
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
  content: "";
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

.dark .article:hover::after {
  content: "";
  width: 100%;
  height: 1px;
  border: solid 1px rgba(208, 217, 226);
  background-color: rgb(208, 217, 226);
  position: absolute;
  left: 0px;
  bottom: 0px;
  box-shadow: rgba(208, 217, 226, 0.7) 3px 0px 22px;
  margin: 0px 0px 0px -1px;
  box-sizing: content-box;
}

.dark .article::after {
  content: "";
  width: 0%;
  height: 0;
  border: solid 1px rgba(208, 217, 226, 0, 0);
  background-color: rgb(208, 217, 226, 0);
  position: absolute;
  left: 0px;
  bottom: 0px;
  margin: 0px 0px 0px -1px;
  box-sizing: content-box;
  transition: all 300ms ease-in-out;
} */
</style>
