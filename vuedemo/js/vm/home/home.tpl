<section class="home">
	<ul class="types clearfix">
		<li v-for="item in types">
			<a v-bind:href="'#list/type/' + item.id">
				<img v-bind:src="'img/icon/' + item.url" alt="">
				<p>{{item.title}}</p>
			</a>
		</li>
	</ul>
	<!-- 定义ad广告 -->
	<ul class="ad clearfix">
		<li v-for="(item, index) in ad">
			<a v-bind:href="'#/detail/' + item.id">
				<h3>{{item.title}}</h3>
				<p>{{item.description}}</p>
				<img v-bind:src="'img/ad/' + item.url" alt="">
			</a>
		</li>
	</ul>
	<!-- 定义商品列表 -->
	<ul class="list-container">
		<li v-for="item in list">
			<a v-bind:href="'#detail/' + item.id">
				<img v-bind:src="'img/list/' + item.img" alt="">
				<div class="content">
					<h3>{{item.title}}</h3>
					<p>
						<span class="price">{{item.price | price}}</span>
						<span class="origin-price">{{item.orignPrice | orignPrice}}</span>
						<span class="sales">{{item.sales | sales}}</span>
					</p>
				</div>
			</a>
		</li>
	</ul>
</section>