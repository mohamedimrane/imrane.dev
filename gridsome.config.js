// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Imrane Chehabi',
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Article',
        baseDir: './blog',
        route: '/article/:slug',
        template: './src/templates/Article.vue'
      }
    },
    {
      use: "gridsome-plugin-tailwindcss",
    }
  ]
}
