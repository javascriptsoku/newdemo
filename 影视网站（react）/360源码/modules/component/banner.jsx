module.exports=React.createClass({
	getDefaultProps:function (argument) {
		return {
			list:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
		}
	},
	getInitialState:function (argument) {
		// body...
		return {
			timer:function () {
			},
			list:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
		}
	},
	createList:function () {
		// body...
		return this.props.list.map(function (value,index) {
			return (
			<li key = {index} >
				<a>
					<img src={"img/banner/"+value} alt=""/>
				</a>
			</li>)	
		})
	},
	left:function () {
		var list=this.state.list;
		var pop=list.pop();
		list.unshift(pop);
		var num=parseInt(list[0].slice(0, 1))
		var subList=$(this.refs.ul).children()
		subList.css({
			border: 'none'
		
		});	
		subList.eq(num-1).css({
			border: '5px solid green'
		});	
		this.setState({
			list:list
		})


	},
	right:function (argument) {

		var list=this.state.list;
		var shift=list.shift();
		list.push(shift);
		var num=parseInt(list[0].slice(0, 1))
		var subList=$(this.refs.ul).children()
		subList.css({
			border: 'none'
		});	
		subList.eq(num-1).css({
			border: '5px solid green'
		});	
		this.setState({
			list:list
		})
	},
	render:function () {

		return (<section className="banner">
			<div>
				<img src={"img/banner/"+this.state.list[0]} alt=""/>
				<ul ref="ul">{this.createList()}</ul>
			</div>

			<span className="left" onClick={this.left}>&lt;</span>
			<span className="right" onClick={this.right}>&gt;</span>
		</section>)
	},
	componentDidMount:function (argument) {
			this.setState({
			timer:setInterval(function (argument) {
				this.right()
			}.bind(this),2000)
			})
	},
	componentWillUnmount:function () {
		clearInterval(this.state.timer)
	}
})