const path = require('path');

module.exports = {
    // 是否打包 map 映射文件
    productionSourceMap: false,

    // 设置输出目录
    outputDir: './out',

    // 设置根路径
    publicPath: process.env.NODE_ENV === 'production' ? 'http://www.linjstip.top' : '/',

    // 设置静态资源(css, img, js)存放目录
    assetsDir: 'assets',

    // 扩展webpack的配置
    chainWebpack: config => {
        // config <=> 导出的 webpack 对象

        // 给当前目录下 src/views 目录设置别名为: _v
        config.resolve.alias.set('_v', path.resolve(__dirname, 'src/views'))
    },

    // 配置 webpack
    // configureWebpack: {

    // },

    // 网络请求代理 -- 规避同源策略
    devServer: {
        proxy: {
            // 请求api时，由代理服务器向 target 路径发起请求
            '/api/student/findAll': {
                target: 'http://api.duyiedu.com'
            }
        }
    },

    pluginOptions: {
      'style-resources-loader': {
        preProcessor: 'less',
        patterns: [
            // 将 global.less 中的样式注入到全局
            path.resolve(__dirname, 'src/assets/style/global.less')
        ]
      }
    }
}
