<template>
  <ArticleLayout>
    <main class="mx-auto mt-32 container-inner">
      <h1 class="text-3xl font-bold">{{ $page.article.title }}</h1>
      <p class="mt-4 text-blue40">Last update on <time :datetime="$page.article.datetime">{{ $page.article.date }}</time></p>
      <div class="mt-8 markdown-body">
        <VueRemarkContent class="leading-9 tracking-wide" />
      </div>
    </main>
  </ArticleLayout>
</template>

<page-query>
query Article ($path: String!) {
  article: article (path: $path) {
    title
    path
    date (format: "MMMM DD, Y")
    datetime: date
  }
}
</page-query>
