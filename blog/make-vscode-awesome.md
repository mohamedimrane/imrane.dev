---
title: Make Vscode Awesome
slug: make-vscode-awesome
tags: [vscode, productivity]
icon:
    path: /icons/reactjs.svg
    alt: "React JS"
date: 2020-12-24
---

### Removing useless things

Consequat adipisicing dolore ut adipisicing commodo. Laboris ullamco veniam fugiat est aliquip labore duis minim. Nisi enim pariatur dolore magna enim aliqua.  
Labore consectetur reprehenderit cillum sunt ipsum tempor aliqua dolore excepteur nisi nisi sit et. Nulla cupidatat sit dolore id cupidatat excepteur reprehenderit ex excepteur laboris tempor. Commodo ex irure anim magna enim incididunt mollit do consequat aute incididunt ad id. Nostrud cupidatat sit ipsum cillum qui veniam elit in minim cillum aliqua adipisicing. Ad reprehenderit non quis officia sit ad exercitation nulla cillum sint laborum adipisicing nostrud aliqua.  

### Adding useful extensions

Incididunt culpa irure dolor qui ut quis pariatur velit velit tempor. Labore deserunt irure eu dolore commodo nostrud. Lorem nulla Lorem cupidatat labore aliqua laboris commodo minim. Fugiat esse mollit non do tempor dolor irure occaecat minim quis sunt. Velit aute ipsum minim occaecat quis veniam aute.  

- New Moon  
- Bracketeer
- Vetur
- Live Share
- Live Server

```javascript
console.log('Hey')

if (true) {
    console.log('It\'s true')
}
```

```html
<template>
  <ArticleLayout>
    <main class="mx-auto mt-32 container-inner">
      <h1 class="text-3xl font-bold">{{ $page.article.title }}</h1>
      <p class="mt-4 text-blue40">Last update on <time :datetime="$page.article.datetime">{{ $page.article.date }}</time></p>

        <div class="mt-8 tracking-wide markdown-body">
          <VueRemarkContent />
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
```

```graphql
query Article ($path: String!) {
  article: article (path: $path) {
    title
    path
    date (format: "MMMM DD, Y")
    datetime: date
  }
}
```

```php
$myName = "Mohamed Imrane";

echo "<h1>" . str_to_lower($myName) . "</h1>"
```