// 要引入三个组件，以及样式
var Home = require('./home/home');
var List = require('./list/list');
var Detail = require('./detail/detail');
// 实例化vue
var app = new Vue({
	el: '#app',
	// 绑定数据
	data: {
		view: 'home',
		// 存储路由参数
		query: [],
		search: '',
		// 是否显示搜索框
		showSearch: true,
		// 加载成功显示header
		isLoad: true
	},
	// 定义方法
	methods: {
		// 点击enter进行搜索
		gotoSearch: function (e) {
			// 第一种方式，通过组件间通信
			this.search = e.target.value
			// 第二种方式存储在路由中
			// location.hash = '#/list/search/' + e.target.value
			// console.log(e.target.value)
		},
		// 返回逻辑
		goBack: function () {
			history.go(-1)
		}
	}
})

// 暴露接口
module.exports = app;