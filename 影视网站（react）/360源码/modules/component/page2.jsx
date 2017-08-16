
module.exports=React.createClass({
	createList:function () {
		return this.state.list.map(function (obj,index) {
			return (<li key={index}>
				<img src={'img/list/'+obj.url} />
				<img src="img/bg.png" className="bg"/ >
				<span>{obj.score}</span>
				<p className="title">{obj.title}</p>
				<p className="subtitle">{obj.subtitle}</p>
				<p className="num">{obj.num}</p>
			</li>)
		})
	},
	getDefaultProps:function (argument) {
		return {
				getType:'',
				titleVal:'',
				typelist:["军事","古装","谍战","喜剧","言情","伦理","都市","历史",'警匪','神话'],

		}
	},
	getInitialState:function () {
		return {
			list:[],
		}
	},
	createMoreList:function (argument) {
		// body...
		return this.props.typelist.map(function (value,index) {
			return (<a href="#/more" key={index}>{value}</a>)
		})

	},
	render:function (argument) {
		return (
				<section className="page2">
						<h3>{this.props.titleVal}</h3>
						<a href="#/more" className="more">更多</a>
						<span className="link">{this.createMoreList()}</span>
						<ul style={{height:"670px"}}>{this.createList()}</ul>
				</section>
			)
	},
	componentDidMount:function (argument) {
		$.get("data/"+this.props.getType+".json",function (res) {
			if(res&&res.errno===0){
				this.setState({
					list:res.data
				})
			}
		}.bind(this))
	}
})