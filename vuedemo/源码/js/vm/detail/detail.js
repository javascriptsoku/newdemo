// 依赖util， filter， css
var Util = require('../../util/util');
require('../../filter/filter');
// 详情页
var Detail = Vue.extend({
	template: __inline('detail.tpl'),
	// 定义数据
	data: function () {
		return {
			data: {}
		}
	},
	// 请求数据
	created: function () {
		// 隐藏搜索框
		this.$parent.showSearch = false;
		var me = this;
		// 获取商品id
		var id = me.$parent.query[0];
		// console.log(id)
		// 请求数据
		Util.ajax('data/product.json', function (res) {
			if (res && res.errno === 0) {
				// 存储数据
				me.data = res.data
			}
		})
	}
})
// 注册三个组件

Vue.component('detail', Detail)