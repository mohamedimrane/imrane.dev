// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Imrane Chehabi',
  templates: {
    Tag: '/tag/:title',
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Article',
        baseDir: './blog',
        route: '/article/:slug',
        template: './src/templates/Article.vue',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        },
        plugins: [['gridsome-plugin-remark-shiki', { theme: 'nord', skipInline: true }]],
      }
    },
    {
      use: 'gridsome-plugin-flexsearch',
      options: {
        searchFields: ['title', 'tags'],
        collections: [
          {
            typeName: 'Article',
            indexName: 'Article',
            fields: ['id', 'title', 'path', 'summary']
          }
        ]
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
      /**
      * These are the default options.

      options: {
        tailwindConfig: './tailwind.config.js',
        presetEnvConfig: {},
        shouldImport: false,
        shouldTimeTravel: false
      }
      */
    }
  ]
}
