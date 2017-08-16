// 依赖于三个模块util, filter, css
var Util = require('../../util/util');
require('../../filter/filter');
// 列表页
var List = Vue.extend({
	template: __inline('list.tpl'),
	// 获取属性数据
	props: ['searchquery', 'hashquery'],
	data: function () {
		// 返回值才是绑定的数据
		return {
			types: [
				{value: '价格排序', key: 'price'},
				{value: '销量排序', key: 'sales'},
				{value: '好评排序', key: 'evaluate'},
				{value: '优惠排序', key: 'discount'}
			],
			// 定义存储数据的变量
			list: [],
			// 剩余的产品
			others: [],
			// 搜索字段
			query: ''
		}
	},
	// 动态数据
	computed: {
		dealList: function () {
			var me = this;
			return this.list.filter(function (obj) {
				// console.log(arguments)
				return obj.title.indexOf(me.searchquery) >= 0;
			})
		}
	},
	// 定义方法
	methods: {
		// 点击加载更多按钮
		loadMore: function () {
			// 将other中数据传递给list
			this.list = this.list.concat(this.others);
			// 此时others中应该没有数据了
			this.others = [];
		},
		// 点击排序按钮
		sortBy: function (type) {
			// 如果字段是优惠，我们要单独处理
			if (type === 'discount') {
				this.list.sort(function (a, b) {
					// 比较原价-现价的插值
					// 升序
					// return (a.orignPrice - a.price) - (b.orignPrice - b.price)
					// 降序
					return (b.orignPrice - b.price) - (a.orignPrice - a.price)
				})
			} else {
				// 数组排序
				this.list.sort(function (a, b) {
					// 升序
					// return a[type] - b[type]
					// 降序
					return b[type] - a[type]
				})
			}
			// console.log(22, type)
			
		}
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
	// },
	// 视图渲染完成执行的方法
	created: function () {
		this.$parent.showSearch = true;
		// console.log(this)
		// 用$parent的数据更新query
		this.query = this.$parent.query[1]
		var me = this;
		var url = 'data/list.json?' + this.$parent.query[0] + '=' + this.$parent.query[1]
		// 请求数据
		Util.ajax(url, function (res) {
			// console.log(res)
			// 请求成功，存储数据
			if (res && res.errno === 0) {
				// 默认显示三条
				me.list = res.data.slice(0, 3);
				me.others = res.data.slice(3)
			}
		})
		this.$watch('hashquery', function () {
			var url = 'data/list.json?' + me.$parent.query[0] + '=' + me.$parent.query[1]
			Util.ajax(url, function (res) {
				// console.log(res)
				// 请求成功，存储数据
				if (res && res.errno === 0) {
					// 默认显示三条
					me.list = res.data.slice(0, 3);
					me.others = res.data.slice(3)
				}
			})
		})
	}
})
// 注册组件
Vue.component('list', List)
// 暴露接口
module.exports = List;