// 依赖util，filter，css
var Util = require('../../util/util')
require('../../filter/filter')
// 定义三个组件
var Home = Vue.extend({
	template: __inline('./home.tpl'),
	// 定义数据
	data: function () {
		// 返回值才是真正的数据
		return {
			types: [
				{id: 1, title: '美食', url: '01.png'},
				{id: 2, title: '电影', url: '02.png'},
				{id: 3, title: '酒店', url: '03.png'},
				{id: 4, title: '休闲娱乐', url: '04.png'},
				{id: 5, title: '外卖', url: '05.png'},
				{id: 6, title: 'KTV', url: '06.png'},
				{id: 7, title: '周边游', url: '07.png'},
				{id: 8, title: '丽人', url: '08.png'},
				{id: 9, title: '小吃快餐', url: '09.png'},
				{id: 10, title: '火车票', url: '10.png'}
			],
			// num: 111
			// 将数据定义出来，否则没有特性
			ad: [],
			list: []
		}
	},
	// 定义生命周期方法
	// beforeCreate: function () {
	// 	console.log(111, this, arguments)
	// },
	created: function () {
		this.$parent.showSearch = true;
		var me = this;
		// console.log(222, this, arguments)
		// // 1秒后改变数据
		// setTimeout(function() {
		// 	me.num = 200
		// 	console.log(me)
		// }, 2000)
		// 请求数据
		Util.ajax('data/home.json', function (res) {
			// console.log(res)
			if (res && res.errno === 0) {
				// 存储数据
				me.ad = res.data.ad;
				me.list = res.data.list;
				// 2.0版本不建议使用$set更新数据
				// me.$set('ad', res.data.ad)
			}
		})
	},
	// beforeMount: function () {
	// 	console.log(333, this, arguments)
	// },
	// mounted: function () {
	// 	console.log(444, this, arguments)
	// },
	// beforeUpdate: function () {
	// 	console.log(555, this, arguments)
	// },
	// updated: function () {
	// 	console.log(666, this, arguments)
	// },
	// activated: function() {
	// 	console.log(777, this, arguments)
	// },
	// deactivated: function () {
	// 	console.log(888, this, arguments)
	// },
	// beforeDestory: function () {
	// 	console.log(999, this, arguments)
	// },
	// destoryed: function () {
	// 	console.log(10, this, arguments)
	// },
	// // vue1.0测试方法
	// init: function () {
	// 	console.log(1, this, arguments)
	// },
	// created: function () {
	// 	console.log(2, this, arguments)
	// },
	// beforeCompile: function () {
	// 	console.log(3, this, arguments)
	// },
	// compiled: function () {
	// 	console.log(4, this, arguments)
	// },
	// ready: function () {
	// 	console.log(5, this, arguments)
	// }
})
Vue.component('home', Home)
// 如果在home中注册，就不需要暴漏接口，除非外界使用
module.exports = Home;