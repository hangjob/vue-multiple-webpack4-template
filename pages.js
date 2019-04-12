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
            title: '演示加载其它框架',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'news.html',
            minify: {
                removeAttributeQuotes: false, //删除属性的双引号
                collapseInlineTagWhitespace: true //折叠一行
            },
            chunks: ['news','common'],
            hash: true //生成带有hash值
        },
        {
            page: 'point',
            entry: path.resolve(__dirname, './page/point.js'),  //指向入口文件
            title: '演示引入组件及传值',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'point.html',
            minify: {
                removeAttributeQuotes: false, //删除属性的双引号
                collapseInlineTagWhitespace: true //折叠一行
            },
            chunks: ['point','common'],
            hash: true //生成带有hash值
        },
        {
            page: 'ftrem',
            entry: path.resolve(__dirname, './page/ftrem.js'),  //指向入口文件
            title: '演示rem自适应',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'ftrem.html',
            minify: {
                removeAttributeQuotes: false, //删除属性的双引号
                collapseInlineTagWhitespace: true //折叠一行
            },
            chunks: ['ftrem','common'],
            hash: true //生成带有hash值
        }
    ]
}