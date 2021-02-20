const path = require('path');
const resolve = (dir) => path.join(__dirname, dir);
// 获取环境变量
const runEnv = process.env.VUE_APP_ENV || "dev";
// 获取对应环境下的文件
const CONSTANTS = require(`./build/${runEnv}.js`);
// 项目绝对路径
// const BASE_URL =
//   process.env.NODE_ENV === "production" ? CONSTANTS.assetsPublicPath : "/";
module.exports = {
  lintOnSave:false,
  publicPath: "./", //打包路径，使用相对路径生成的dist文件夹下的index可以打开
  // 输出文件目录
  outputDir: 'dists',
  //取消生成map文件
  productionSourceMap: runEnv == "test",
  // webpack-dev-server 相关配置
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: 8080,
    https: false,
    hotOnly: false,
    proxyTable: {
      '/devApi': {
        target: 'http://www.web-jshtml.cn/productapi', // 你请求的第三方接口
        changeOrigin: true, // 在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
        pathRewrite: {  // 路径重写，
          '^/devApi': ''  // 替换target中的请求地址，也就是说以后你在请求http://api.douban.com/v2/XXXXX这个地址的时候直接写成/api即可。
        }
      }
    }, // 设置代理
    before: app => { },
    overlay:{
           warning:false,
           errors:false
       },
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      // 配置icons的目录  我这里默认放在了 /src/assets/icons 目录下  如要修改 记得更换你的目录
      .include.add(path.resolve(__dirname, './src/components/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
    const fileRule = config.module.rule('file')
    fileRule.uses.clear()
    fileRule
      .test(/\.svg$/)
      // 配置icons的目录  我这里默认放在了 /src/assets/icons 目录下  如要修改 记得更换你的目录
      .exclude.add(path.resolve(__dirname, './src/components/icons'))
      .end()
      .use('file-loader')
      .loader('file-loader')






    config.module

      .rule('scss')

      .oneOf('vue')

      .use('px2rem-loader')

      .loader('px2rem-loader')

      .before('postcss-loader') // this makes it work.

      .options({ remUnit: 192, remPrecision: 8 }) // remUnit: 192代表以1920px为整体，如果设计稿的尺寸是750px，这里的值为75

      .end()
  },
  // 第三方插件配置
  pluginOptions: {
 
  }
}