module.exports=React.createClass({
	getDefaultProps:function () {
		return {
			showHide:"none"
		}
	},
	getInitialState:function () {
		return {
			list:[]
		}
	},
	go:function (e) {
		$(this.refs.ul).children().children().css({
			background: 'transparent',
		})
		
		$(e.target).css({
			background: '#1db69a',
		});
	},
	createList:function () {
		return this.state.list.map(function (value,index) {
				return (<li key={index} onClick={this.go}>
							<a href={"#"+value.type}>{value.name}</a>
						</li>)
			}.bind(this))
	},
	show:function (argument) {
	
		
	},
	render:function () {
		return (
			<div className="aside" ref="aside" style={{display:this.props.showHide}}>
				<h3>导航</h3>
				<ul ref="ul">{this.createList()}</ul>	
			</div>
			)
	},
	componentDidMount:function () {	
		$.get("data/Aside.json",function (res) {
			if(res&&res.errno===0){
				this.setState({
					list:res.data,
				})
			}
		}.bind(this))
		
	}
})