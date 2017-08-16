// 依赖vue实例化对象
var app = require('../vm/app')
// 定义路由
function router () {
	// 解析hash就要获取hash
	var hash = location.hash;
	// 删除#
	// hash = hash.slice(1);
	// 删除起始的/
	// hash = hash.replace(/^\//, '')
	hash = hash.replace(/^#\/?/, '')
	// 对/进行切割，保留第一部分，就是组件名称,后面的成员就是参数
	hash = hash.split('/')
	// 定义规则
	var map = {
		home: true,
		list: true,
		detail: true
	}
	// 只有在map中存在的组件，才能渲染
	if (map[hash[0]]) {
		// 切换组件
		app.view = hash[0]
	} else {
		// 进入默认路由
		app.view = 'home'
	}
	// 我们还可以将参数存储
	app.query = hash.slice(1);
}
// 监听路由改变
window.addEventListener('hashchange', router)
// 页面加载没有触发hashchange事件，我们可以手动触发hashchange事件，或者监听load事件
// window.addEventListener('load', router)
// console.log(222)
// 保留接口
module.exports = router;