const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWepackPlugin = require('clean-webpack-plugin');

// 导出配置模块
module.exports = {
	//入口文件
	entry:{
		main:'./src/app.js',
	},

	// 编译地址
	output:{
		path:path.resolve(__dirname,'./dist'),
		filename:'js/[name]-bundle.js'
	},
	mode:'development',
	devServer: {
      contentBase: path.join(__dirname, "./dist"), //网站的根目录为 根目录/dist，如果配置不对，会报Cannot GET /错误
      port: 9001, //端口改为9000
	  open:true, // 自动打开浏览器，适合懒
	  proxy:{
		'/api':{
			target:'https://m.weibo.cn',
			changeOrigin:true
		}
	},
	},
	
	// 加载器：加载文件并编译
	module:{
		rules:[
			{ 
				test: /\.css$/, 
				loader: ['style-loader','css-loader'] 
			},
			{
				test:/\.js$/,
				//排除node_nodules文件夹下的js文件
				exclude:path.resolve(__dirname,'./node_modules'),
				
				use:[
					{
						loader:'babel-loader',
						options:{
							//babel-core
							//babel-preset-env
							//babel-preset-react
							presets:['env','react']
						}
					}
				]
			},
			{
				test:/\.scss$/,
				loader:['style-loader','css-loader','sass-loader']
			}
		]
	},

	//增强webpak的功能
	plugins:[
		new HtmlWebpackPlugin({
			template:'./src/index.html',
			hash:true,
			title:'首页',
			chunks: ['main']
		}),
		new CleanWepackPlugin(['dist']),

	]
}