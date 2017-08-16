module.exports=React.createClass({
	
	getDefaultProps:function (argument) {
		return {
			week:["周一","周二","周三","周四","周五","周六","周日"]
		}
	},
	getInitialState:function () {
		return {
			list:[],
			list1:[],
			list2:[],
			list3:[],
			list4:[],
			list5:[],
			list6:[],
			list7:[]
		}
	},

	enter:function (e) {
		// body...
		
		var arr=e.target.parentElement.children
		for(var i = 0 ; i< arr.length;i++){
			arr[i].style.background="#FFF"
			arr[i].style.color="#000"
		}
		e.target.style.background="#1db69a"
		e.target.style.color="#fff"

		if(e.target.text==="周一"){
			this.setState({
				list:this.state.list1
			})
		}else if(e.target.text==="周二"){
			this.setState({
				list:this.state.list2
			})

		}else if(e.target.text==="周三"){
			this.setState({
				list:this.state.list3
			})
			
		}else if(e.target.text==="周四"){
			this.setState({
				list:this.state.list4
			})
			
		}else if(e.target.text==="周五"){
			this.setState({
				list:this.state.list5
			})
			
		}else if(e.target.text==="周六"){
			this.setState({
				list:this.state.list6
			})	
		}else{
			this.setState({
				list:this.state.list7
			})
		}
		
	},

	createWeek:function (argument) {
		// body...
		return this.props.week.map(function (value,index) {
			return (
				<a key={index} onMouseEnter={this.enter}>{value}</a>
			)
		}.bind(this))
	},
	createList:function () {
		return this.state.list.map(function (obj,index) {
			return (<li key={index}>
				<img src={'img/update/'+obj.url} />
				<img src="img/bg.png" className="bg"/>
				<p className="title">{obj.title}</p>
				<p className="subtitle">{obj.subtitle}</p>
			</li>)
		})
	},
	render:function (argument) {
		return (
				<section className="update">
						<h3>动态直播</h3>
						<span>{this.createWeek()}</span>
						<ul>{this.createList()}</ul>
				</section>
			)
	},
	componentDidMount:function (argument) {
		$.get("data/update.json",function (res) {
			if(res&&res.errno===0){

				this.setState({
					list1:res.data.list1,
					list2:res.data.list2,
					list3:res.data.list3,
					list4:res.data.list4,
					list5:res.data.list5,
					list6:res.data.list6,
					list7:res.data.list7
				})
				this.setState({
					list:this.state.list1
				})
			}
		}.bind(this))
	}
})