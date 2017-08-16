// 5 基于commonjs规范，定义模块
fis.hook('commonjs')
fis.match('js/**.js', {
	isMod: true
})
// 1 所有js文件压缩
fis.match('*.js', {
	optimizer: 'uglify-js'
})
// 2 所有css文件压缩
fis.match('*.css', {
	optimizer: 'clean-css'
})
// 3 所有png图片压缩
fis.match('*.png', {
	optimizer: 'png-compressor'
})
// 4 所有静态文件加戳（js，css）
fis.match('*.{js,css}', {
	useHash: true
})
// match方法执行完毕，返回fis对象，因此可以链式调用
// 6 库文件打包在一起
.match('lib/**.js', {
	packTo: 'staitc/lib.js'
})
// 7 模块文件打包在一起
.match('js/**.js', {
	packTo: 'static/modules.js'
})
// 9 css 文件打包在一起
.match('**.css', {
	packTo: 'static/pack.css'
})
.match('::package', {
	postpackager: 'loader'
})
// 8 将js和css文件发布到static目录下