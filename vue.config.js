const path = require("path");
module.exports = {
  // 基本路径
  publicPath: process.env.NODE_ENV === "production" ? '' : "/",
  // 输入文件目录
  outputDir: process.env.NODE_ENV === "production" ? 'dist' : "devdist",
  // eslint-loader 是否在保存时候检查
  lintOnSave: false,
  // chainWebpack: config => {
  //   const svgRule = config.module.rule('svg');
  //   svgRule.uses.clear();
  //   svgRule.use('vue-svg-loader').loader('vue-svg-loader');
  // },
//   css: {
//     loaderOptions: {
//       // 给 sass-loader 传递选项
//       scss: {      // 注意：在 sass-loader v8 中，这个选项名是 "prependData"
//       additionalData: `@import "~@/css/index.scss"`
//       },
//     }
//   },
  devServer: {
    open: true,//编译完成是否打开网页
    host: "0.0.0.0",//指定使用网址，默认locahost,0.0.0.0代表可以b
    port: 8010,//访问端口
    https: false,//编译失败时刷新页面
    hot: true,//开启热加载
    hotOnly: false,
    proxy: null,//设置代理
    overlay: {//全屏模式是否脚本错误
      warnings: true,
      errors: true
    },
    before: app => {

    }
  },
  
}
