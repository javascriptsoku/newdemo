module.exports=React.createClass({
	getInitialState:function () {
		return {
			list:[]
		}
	},
	createList:function () {
		return this.state.list.map(function (value,index) {
				return (<li key={index}>
							<span className='num'>{index+1}</span>
							<a>{value.name}</a>
							<span>{value.num+"万"}</span>
						</li>)
			})
	},
	render:function () {
		
		return (
			<div className="chart">
				<h3>观看榜</h3>
				<ul>{this.createList()}</ul>	
			</div>
			)
	},
	componentDidMount:function () {
	
			
		$.get("data/chart.json",function (res) {
			if(res&&res.errno===0){
				this.setState({
					list:res.data,
				})
			}
		}.bind(this))
	}
})