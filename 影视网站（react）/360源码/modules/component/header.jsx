var SearchAction=require('../action/searchAction.jsx')
module.exports = React.createClass({
	getInitialState:function () {
		return {
			skinData:[],
			skintoggle:'none'
		}
	},
	changeSkin:function (e,even) {
		// 参数就是id
		var id = e;
		// 根据id更新内容
		document.body.style.backgroundImage = 'url(img/skin/big_' + id + '.jpg)';
		document.body.style.backgroundRepeat= "noRepeat";
		document.body.style.backgroundPosition= "center 0";
		document.body.style.backgroundSize= "cover";
		document.body.style.backgroundAttachment= "fixed";
		var liList=even.target.parentElement.parentElement.children
		for(var i = 0 ;i< liList.length; i++){
			liList[i].style.borderColor="#FFF"
		}
		even.target.parentElement.style.borderColor="#000"
	},
	skin:function () {
		return this.state.skinData.map(function (obj, index) {
			// 定义li的结构
			return (
				<li key={index} onClick={this.changeSkin.bind(this, obj.id)}>
					<img src={'img/skin/' + obj.src} alt=""/>
					<p>{obj.title}</p>
				</li>
			)
		}.bind(this))
	},
	skintoggle:function () {
		if(this.state.skintoggle==="none"){
			this.setState({
			skintoggle:'block'
			})
		}else{
			this.setState({
			skintoggle:'none'
			})
		}
	},
	sure:function () {
		this.setState({
			skintoggle:'none'
			})
	},
	defaultTo:function () {
		this.setState({
			skintoggle:'none'
			});
		document.body.style.background= '#ccc';
	},
	navClick:function (e) {
		$(this.refs.nav).children().css({
			background: 'transparent',
			color: '#000'
		});
		$(e.target).css({
			background: '#1db69a',
			color:"#fff"	
		});
	},
	search:function (e) {
		SearchAction.search(this.refs.searchValue.value)
		console.log(this.refs.searchValue.value)
		ReactRouter.hashHistory.replace('/more/'+this.refs.searchValue.value)
		$(this.refs.nav).children().css({
			color: '#000',
			background: 'transparent',
		});
		$(this.refs.more).css({
			background: '#1db69a',
			color:"#fff"	
		});
	},
	keysearch:function (e) {
		if(e.keyCode===13){
			this.search()
		}	
	},
	render:function () {
		return (
			<div className="container">
				<div className="top" style={{
					display:this.state.skintoggle

				}}>
					<ul>{this.skin()}
					 <button id="sure" onClick={this.sure}>确定</button>
					 <button id="default" onClick={this.defaultTo}>使用默认皮肤</button>
					 </ul>
				</div>	
				<header>
					<h1 className="logo">
					<a href="">
						<img src="img/logo.png"/>
					</a>
					</h1>
					<input onKeyDown={this.keysearch} type="text" placeholder="摔跤吧！爸爸" ref="searchValue" id="search"/>
					<button onClick={this.search}>搜一搜</button>
					<a onClick={this.skintoggle}>换肤</a>
				</header>
				<div className="nav">
					
				<nav onClick={this.navClick} ref="nav">
					<a href="#/">首页</a>
					<a href="#/film">电影</a>
					<a href="#/tv">电视剧</a>
					<a href="#/vairety">综艺</a>
					<a href="#/comic">动漫</a>
					<a href="#/play">娱乐</a>
					<a href="#/more/全部" ref="more">更多</a>
				</nav>
				</div>
			</div>)
	},
	componentDidMount:function () {
		$.get('data/skin.json',function (res) {
			if(res&&res.errno===0){
				this.setState({
					skinData:res.data
				})
				
			}
		}.bind(this))
	}
})