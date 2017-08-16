







var Header=require('component/header.jsx')
var Footer=require('component/footer.jsx')

module.exports = React.createClass({
	getInitialState:function (argument) {
		return {
			toggle:"none"
		}
	},
	gotopScroll:function (argument) {
		if($(window).scrollTop()>=1500){
			this.setState({
				toggle:"block"
			})
		}else{
			this.setState({
				toggle:"none"
			})
		}
	},
	gotop:function (argument) {
		window.scrollTo(0,0)
	},
	render:function () {
		return (
		<section >
			<Header></Header>	
			{this.props.children}	
			<span className="gotop" onClick={this.gotop} style={{display:this.state.toggle}}>返回顶部</span>
			<Footer></Footer>
		</section>)
	},
	 componentDidMount: function () {
     window.addEventListener('scroll', this.gotopScroll);
 	 }
})

