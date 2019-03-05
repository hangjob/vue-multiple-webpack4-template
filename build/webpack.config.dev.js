
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
    //webpack-dev-server所使用的bundle.js文件并不是webpack.config.js中output打包生成的bundle.js，
    //而是使用webpack-dev-server自己打包生成的，这个文件不存在与output或其他路径中，而是存到了内存中，事实上webpack-dev-server所使用的那个bundle.js我们是看不到的！
    //https://juejin.im/post/5bb085dd6fb9a05cd24da5cf 参考链接
    devServer:{
        port: 3000,
        hot: true,
        progress: true, //记录条
        contentBase: '/', //contentBase默认是当前的工作目录，当它查不到打包在内存中的资源的时候，它就会到contentBase中去找
        publicPath: '/', //https://blog.csdn.net/lhjuejiang/article/details/80243975 解释devServer
        compress: true //开启gzip压缩
    }
})