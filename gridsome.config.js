// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Imrane Chehabi",
  templates: {
    Tag: "/blog/tag/:title",
  },


  plugins: [
    {
      use: "gridsome-plugin-windicss",
      options: {
        // see https://github.com/windicss/vite-plugin-windicss/blob/main/packages/plugin-utils/src/options.ts
      }
    },
    {
      use: "@gridsome/vue-remark",
      options: {
        typeName: "Article",
        baseDir: "./blog",
        route: "/blog/article/:slug",
        template: "./src/templates/Article.vue",
        refs: {
          tags: {
            typeName: "Tag",
            create: true
          }
        },
        plugins: [["gridsome-plugin-remark-shiki", { theme: "nord", skipInline: true }]],
      }
    },
    {
      use: "gridsome-plugin-flexsearch",
      options: {
        searchFields: ["title", "tags"],
        collections: [
          {
            typeName: "Article",
            indexName: "Article",
            fields: ["id", "title", "path", "description"]
          }
        ]
      }
    },
    // {
    //   use: "gridsome-plugin-tailwindcss",
    //   /**
    //   * These are the default options.

    //   options: {
    //     tailwindConfig: "./tailwind.config.js",
    //     presetEnvConfig: {},
    //     shouldImport: false,
    //     shouldTimeTravel: false
    //   }
    //   */
    // }
  ]
}
