// 定义过滤器
Vue.filter('price', function (value) {
	return value + '元';
})
// 定义门市价过滤器
Vue.filter('orignPrice', function (value) {
	return '门市价：' + value + '元'
})
// 定义销量过滤器
Vue.filter('sales', function (value) {
	return '销量' + value
})