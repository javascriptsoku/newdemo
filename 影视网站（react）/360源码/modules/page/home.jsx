var Banner=require('../component/banner.jsx')
var Aside=require('../component/aside.jsx')
var Page=require('../component/page.jsx')

module.exports=React.createClass({
	getInitialState:function (argument) {
		return {
			toggle:'none',
			title:{
				hot:{titleVal:"热点聚焦",id:"1"},
				film:{titleVal:"经典电影",id:"2"},
				tv:{titleVal:"好看的电视剧",id:"3"},
				play:{titleVal:"全民娱乐",id:"4"},
				comic:{titleVal:"热血动漫",id:"5"},
				Vairety:{titleVal:"综艺频道",id:"6"}
			}

		}
	},
	getScroll:function (argument) {

		if($(window).scrollTop()>=500&&$(window).scrollTop()<=3400){
			this.setState({
				toggle:"block"
			})
		}else{
			this.setState({
				toggle:"none"
			})
		}
	},
	render:function () {
	
		return (
				<section className="home">
					<Banner></Banner>
					<Aside showHide={this.state.toggle}></Aside>
					<Page data={this.state.title.hot}></Page>
					<Page data={this.state.title.film}></Page>
					<Page data={this.state.title.tv}></Page>
					<Page data={this.state.title.play}></Page>
					<Page data={this.state.title.comic}></Page>
					<Page data={this.state.title.Vairety}></Page>
				</section>
			)
	},
	 componentDidMount: function () {
     window.addEventListener('scroll', this.getScroll);
 	 },
 	 componentWillUnmount:function () {
		window.removeEventListener('scroll', this.getScroll)
	}
})