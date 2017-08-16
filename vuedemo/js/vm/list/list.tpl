<section class="list">
	<ul class="types clearfix">
		<li v-for="ickt in types" v-on:click="sortBy(ickt.key)">
			<span>{{ickt.value}}</span>
			<span class="arrow"></span>
		</li>
	</ul>
	<ul class="list-container">
		<!-- <li v-for="item in list | filterBy query"> -->
		<!-- <li v-for="item in list | filterBy searchquery"> -->
		<li v-for="item in dealList">
			<a v-bind:href="'#detail/' + item.id">
				<img v-bind:src="'img/list/' + item.img" alt="">
				<div class="content">
					<h3 v-if="hashquery[1] == 1">{{item.title}}</h3>
					<p>
						<span class="price">{{item.price | price}}</span>
						<span class="origin-price">{{item.orignPrice | orignPrice}}</span>
						<span class="sales">{{item.sales | sales}}</span>
					</p>
				</div>
			</a>
		</li>
	</ul>
	<div class="load-more" v-show="others.length" v-on:click="loadMore">
		<span>查看剩余{{others.length}}条团购</span>
		<span class="arrow">
			<span class="arrow white"></span>
		</span>
	</div>
</section>