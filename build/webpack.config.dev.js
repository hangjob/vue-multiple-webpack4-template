
const path = require('path')

const webpackMerge = require('webpack-merge')

const baseConfg = require('./webpack.config.base');

module.exports = webpackMerge(baseConfg,{
    mode: 'development',
    devtool: 'cheap-module-eval-source-map',// 原始代码（只有行内）,但是更高的质量和更低的性能
    watch: true,
    watchOptions: {
      poll: 1000, //每秒监控讯问次数
      aggregateTimeout: 500, //防抖
      ignored: '/node_modules/' //忽略监控文件 
    },
    //https://juejin.im/post/5bb085dd6fb9a05cd24da5cf 参考链接
    devServer:{
        port: 3000,
        hot: true,
        progress: false, //记录条
        contentBase: path.resolve(__dirname, '../public'), //表示的是告诉服务器从哪里提供内容
        // publicPath: path.resolve(__dirname, '../dist'),
        compress: true //开启gzip压缩
    }
})