# Vue多页面入口webpack4打包轻量级模板配置

------

# 前言

  > 之前写过一次关于webpack配置多页面应用,写的不是很好,这次项目要用到多页面应用,于是重新基于webpack4构建了一套关于vue的多页面应用。我在网上搜索了一圈，发现vue多页面配置，大部分都是基于vue-cli配置的，很少是从基础开始配置，如是我通过webpack4,构建了一个提供多页面入口，打包，调试的轻量级的构建工具，不依赖过多配置，只加载常用的配置，用更少的代码，做更多的东西


# 项目结构
```
├── build                                       // webpack配置目录
│   ├── webpack.config.base.js                     // 公共配置
│   ├── webpak.config.dev.js                    // 开发模式
│   ├── webpak.config.prod.js                   // 打包模式
├── dist                                        // 项目打包路径(自动生成)
├── page                                        // 多页面入口(自定义)
├── public                                      // html模板
├── src                                         // 源码目录(自定义)
├── postcss.config                              // 样式添加前缀
├── pages.js                                    // 多页面配置项
```


# 项目运行

  **注意：由于涉及到的 ES6 等新属性，node 需要 6.0 以上版本**
    
    npm install  或 yarn

*   开发模式
    npm run dev

    里面已经写好了两个入口文件，启动后可直接访问
    http://localhost:3000/home.html
    http://localhost:3000/login.html

*   打包模式
    npm run build
    打包后生成文件目录
    ![此处输入图片的描述][1]

# 文件解释

*   多页面配置项(pages.js)
    ```
    pages: [
        {
            page: 'home',
            entry: path.resolve(__dirname, './page/home.js'), //指向入口文件
            title: '这是页面1',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'home.html',
            chunks: ['home','common'], // 引入公共模块common
        },
        {
            page: 'login',
            entry: path.resolve(__dirname, './page/login.js'),  //指向入口文件
            title: '这是页面2',
            template: path.resolve(__dirname, './public/index.html'), //指向模板文件
            filename: 'login.html',
            chunks: ['login'],
        }
    ]

    ```
*   webpack.config.dev.js
    ```
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
    ```

*   webpack.config.prod.js
    ```
    ode: 'production',
    devtool: 'cheap-module-source-map',// 原始代码（只有行内）每行代码从loader中进行映射
    plugins: [
        new CleanWebpackPlugin(['dist'], { 
            root: path.resolve(__dirname, '..'),
            dry: false // 启用删除文件
        })
    ],
    optimization: {
        minimizer: [
          new UglifyJsPlugin({
            cache: true,
            parallel: true, //启用缓存并且启用多进程并行运行
            sourceMap: true  //错误消息位置映射(减慢编译速度),线上错误调试方便
          }),
          new OptimizeCSSAssetsPlugin({})
        ]
    }
    ```

*   webpack.config.base.js
    ```
    optimization: {
		splitChunks: {
			cacheGroups: {
                // 将 `node_modules`目录下被打包的代码到`common/common.js`
				common: {
					test: /node_modules/,
					chunks: "initial",  //只对入口文件处理
					name: "common", //配置公共模块名称
                    minChunks: 2, //表示被引用次数，默认为1,比如在项目中有两处引用到一样的模块就会抽离到公共模块下
					maxInitialRequests: 5, // 最大的初始化加载次数，默认为1
					minSize: 0 //表示在压缩前的最小模块大小，默认为0
                }
			}
		}
	}
    ```

### &nbsp;&nbsp;&nbsp;网络下载太慢,请使用淘宝镜像

* 1.临时使用

    ```
    npm --registry https://registry.npm.taobao.org install express
    ```

* 2.持久使用

    ```
    npm config set registry https://registry.npm.taobao.org
    ```
    #### 配置后可通过下面方式来验证是否成功 

    ```
    npm config get registry 或者 npm info express
    ```

* 3.通过cnpm使用

    ```
    npm install -g cnpm --registry=https://registry.npm.taobao.org
    ```

# 说明

>  如果对您有帮助，后面会持续更新，您可以点右上角 "Star" 支持一下 谢谢！ ^_^
>  如要在编译过程中遇到错误，点击[联系作者](https://www.vipbic.com/ourselves.html)


  [1]: https://www.vipbic.com/uploads/20190301/2ffbb06148c07174e2d29dce8f69d388.png