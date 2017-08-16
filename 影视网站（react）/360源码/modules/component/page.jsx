
module.exports=React.createClass({
	createList:function () {
		return this.state.list.map(function (obj,index) {
			return (<li key={index}>
				<img src={'img/'+obj.url} />
				<img src="img/bg.png" className="bg"/>
				<span>{obj.score}</span>
				<p className="title">{obj.title}</p>
				<p className="subtitle">{obj.subtitle}</p>
				<p className="num">{obj.num}</p>
			</li>)
		})
	},
	getDefaultProps:function (argument) {
		return {
			data:{
				titleVal:'',
				type:""
			}

		}
	},
	getInitialState:function () {
		return {
			list:[],
			list1:[],
			list2:[],
			moretoggle:true,
		}
	},
	more:function () {
		if(this.state.moretoggle){

		this.setState({
			list:this.state.list2,
			moretoggle:false
		})
		}else{
			this.setState({
			list:this.state.list1,
			moretoggle:true
		})
		}
	},

	render:function (argument) {
	
		return (
				<section className="page" id={this.props.data.id}>
						<h3>{this.props.data.titleVal}</h3>
						<span className="more" onClick={this.more}>换一换</span>
						<ul>{this.createList()}</ul>
				</section>
			)
	},
	componentDidMount:function (argument) {
		$.get("data/home.json",function (res) {
			if(res&&res.errno===0){
				this.setState({
					list1:res.data,
					list2:res.datamore,
				
				})
				this.setState({
					list:this.state.list1
				})
			}
		}.bind(this))
	}
})