module.exports = {
  css: {
    modules: true,
    sourceMap: true,
    loaderOptions: {
      sass: {
        prependData: ' @import "@/assets/scss/styles.scss"; '
      }
    }
  },

  publicPath: process.env.NODE_ENV === 'production'
    ? ''
    : '/',
  assetsDir: 'assets',
  productionSourceMap: false,
  filenameHashing: true,
}