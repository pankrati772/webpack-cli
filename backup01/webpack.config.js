// webpack 是node写出来的 node写法
let path=require('path')
let HtmlWebpackPlugin =require('html-webpack-plugin')
module.exports={
    devServer:{
        //开发服务器的配置
        port:8080,
        progress:true,
        contentBase:'./dist',
        compress:true
    },
    mode:'development',//模式 默认两种 production生产环境 development开发环境
    entry:'./src/js/index.js',//入口
    output:{
        filename:'bundle.[hash:5].js',//打包后的文件名
        path:path.resolve(__dirname,'dist'),//路径必须是绝对路径
    },
    plugins:[
        //数组 放着所有webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html',
            filename:'index.html',
            minify:{
                removeAttributeQuotes:true,//删除属性的双引号--压缩后
                collapseWhitespace:true,//折叠 打包成一行
                
            },
            hash:true,
        })

    ],
    module:{//模块
        rules:[//规则 css-loader 解析 @import语法
            // style-loader 他是把css插入到head的标签中
            // loader 的特点 希望单一
            // loader 的用法 字符串只用一个loader
            // 多个loader需要[]
            // loader的顺序，默认是从右向左执行
            // loader 还可以写成对象方式
            {test:/\.css$/,use:[
                {
                    loader:'style-loader',
                    
                },'css-loader']},

        ]
        

    }
}