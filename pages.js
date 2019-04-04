const path = require('path');

//生成每页的配置项
module.exports = {
    pages: [
        {
            page: 'home',
            entry: path.resolve(__dirname, './page/home.js'), //指向入口文件
            title: '这是页面1',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'home.html',
            minify: {
                removeAttributeQuotes: false, //删除属性的双引号
                collapseInlineTagWhitespace: true //折叠一行
            },
            chunks: ['home','common'],  // 引入公共模块 ---在build/webpack.config.js下配置的公共模块--110行
            hash: true //生成带有hash值
        },
        {
            page: 'login',
            entry: path.resolve(__dirname, './page/login.js'),  //指向入口文件
            title: '这是页面2',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'login.html',
            minify: {
                removeAttributeQuotes: false, //删除属性的双引号
                collapseInlineTagWhitespace: true //折叠一行
            },
            chunks: ['login'],
            hash: true //生成带有hash值
        },
        {
            page: 'news',
            entry: path.resolve(__dirname, './page/news.js'),  //指向入口文件
            title: '这是页面3',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'news.html',
            minify: {
                removeAttributeQuotes: false, //删除属性的双引号
                collapseInlineTagWhitespace: true //折叠一行
            },
            chunks: ['news','common'],
            hash: true //生成带有hash值
        }
    ]
}