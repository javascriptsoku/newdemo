define("js/vm/detail/detail",function(a){var r=a("js/util/util");a("js/filter/filter");var n=Vue.extend({template:'<section class="product">\r\n	<div class="image-part">\r\n		<img v-if="data.src" v-bind:src="\'img/item/\' + data.src" alt="">\r\n		<h1>{{data.title}}</h1>\r\n		<p>{{data.description}}</p>\r\n	</div>\r\n	<div class="price-part">\r\n		<span class="price">{{data.price}}</span>\r\n		<span class="sign">元</span>\r\n		<span class="origin">{{data.orignPrice | orignPrice}}</span>\r\n		<span class="buy">立即购买</span>\r\n	</div>\r\n	<ul class="sale-part clearfix">\r\n		<li>支持自动退货</li>\r\n		<li>支持随时退货</li>\r\n		<li>{{data.sales | sales}}</li>\r\n	</ul>\r\n	<div class="store-part part">\r\n		<div class="header">店家信息</div>\r\n		<div class="body">\r\n			<p>{{data.storeName}}</p>\r\n			<p>{{data.storeAddress}}</p>\r\n		</div>\r\n		<div class="footer">查看{{data.storeNum}}家分店</div>\r\n	</div>\r\n	<div class="buy-part part">\r\n		<div class="header">购买须知</div>\r\n		<div class="body">\r\n			<ul>\r\n				<li>\r\n					<h3>有效期</h3>\r\n					<p>{{data.validateTime}}</p>\r\n				</li>\r\n				<li>\r\n					<h3>使用时间</h3>\r\n					<p>{{data.useTime}}</p>\r\n				</li>\r\n				<li>\r\n					<h3>使用规则</h3>\r\n					<p v-for="item in data.rules">{{item}}</p>\r\n				</li>\r\n			</ul>\r\n		</div>\r\n	</div>\r\n</section>',data:function(){return{data:{}}},created:function(){this.$parent.showSearch=!1;{var a=this;a.$parent.query[0]}r.ajax("data/product.json",function(r){r&&0===r.errno&&(a.data=r.data)})}});Vue.component("detail",n)});