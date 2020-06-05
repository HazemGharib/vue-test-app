/* eslint-disable @typescript-eslint/no-empty-function */
module.exports = {
  assetsDir: "assets",
  chainWebpack: () => {},
  configureWebpack: () => {},
  css: {
    extract: true,
    sourceMap: false,
    loaderOptions: {}
  },
  devServer: {
    open: process.platform === "linux",
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    compress: true
  },
  lintOnSave: true,
  outputDir: "dist",
  parallel: require("os").cpus().length > 1,
  pluginOptions: {},
  productionSourceMap: false,
  //   pwa: {
  //     name: "vue-test-app",
  //     workboxPluginMode: "InjectManifest",
  //     workboxOptions: {
  //       swSrc: "src/service-worker.js"
  //     }
  //   },
  runtimeCompiler: false,
  transpileDependencies: [] // explicitly transpile a dependency with this option.
};
