// 拓展工具方法
var Util = {
	/***
	 * 获取模板的方法
	 * @id 		模板标签元素id
	 * return 	模板内容
	 **/
	tpl: function (id) {
		return document.getElementById(id).innerHTML;
	},
	/**
	 * 我们要实现异步请求的方法
	 * @url		请求地址
	 * @fn 		执行的方法
	 ***/ 
	ajax: function (url, fn) {
		// 创建xhr对象
		var xhr = new XMLHttpRequest();
		// 订阅事件
		xhr.onreadystatechange = function () {
			// 监听状态
			if (xhr.readyState === 4) {
				// 判断状态
				if (xhr.status === 200) {
					// 执行回调函数
					// console.log(xhr)
					fn(JSON.parse(xhr.responseText))
				}
			}
		}
		// 打开链接
		xhr.open('GET', url, true);
		// 发送数据
		xhr.send(null)
	}
}

// 保留接口
module.exports = Util;