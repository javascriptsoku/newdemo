<section class="product">
	<div class="image-part">
		<img v-if="data.src" v-bind:src="'img/item/' + data.src" alt="">
		<h1>{{data.title}}</h1>
		<p>{{data.description}}</p>
	</div>
	<div class="price-part">
		<span class="price">{{data.price}}</span>
		<span class="sign">元</span>
		<span class="origin">{{data.orignPrice | orignPrice}}</span>
		<span class="buy">立即购买</span>
	</div>
	<ul class="sale-part clearfix">
		<li>支持自动退货</li>
		<li>支持随时退货</li>
		<li>{{data.sales | sales}}</li>
	</ul>
	<div class="store-part part">
		<div class="header">店家信息</div>
		<div class="body">
			<p>{{data.storeName}}</p>
			<p>{{data.storeAddress}}</p>
		</div>
		<div class="footer">查看{{data.storeNum}}家分店</div>
	</div>
	<div class="buy-part part">
		<div class="header">购买须知</div>
		<div class="body">
			<ul>
				<li>
					<h3>有效期</h3>
					<p>{{data.validateTime}}</p>
				</li>
				<li>
					<h3>使用时间</h3>
					<p>{{data.useTime}}</p>
				</li>
				<li>
					<h3>使用规则</h3>
					<p v-for="item in data.rules">{{item}}</p>
				</li>
			</ul>
		</div>
	</div>
</section>