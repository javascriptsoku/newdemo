var Conf=require('../conf.jsx')
var SearchStore=require('../store/searchStore.jsx')
var FilterStore=require('../store/filterStore.jsx')

module.exports=React.createClass({
	mixins:[Reflux.connect(SearchStore,"list"),Reflux.connect(FilterStore,"list")],
	getDefaultProps:function (argument) {
		return {
			text:[]
		}
	},
	getInitialState:function () {
		return {
			data:"",
			startList:[],
			list:[]
		}
	},
	createList:function (){
		return this.state.list.map(function (obj,index) {
			return (
				<li key={index} className="resuliLi">
				<i id="i">{obj.type}{obj.adress}</i>
				<img src={'img/list/'+obj.url} />
				<img src="img/bg.png" className="bg"/>
				<span>{obj.score}</span>
				<p className="title">{obj.title}</p>
				<p className="subtitle">{obj.subtitle}</p>
				<span className="good">{obj.good}观看</span>
				<p className="num">{obj.num}</p>

			</li>)
		})
	},
	Sort:function (e) {
		$(e.target).parent().find('span').css({
			background: 'transparent',
			color:'#000'
		});
		$(e.target).css({
			background: '#1db69a',
			color:'#fff'
		});
		if($(e.target).text()==="热门"){
			this.setState({
				list:this.state.list.sort(function (a,b) {
				return b.good-a.good;
			})
			})
		}else{
			this.setState({
				list:this.state.list.sort(function (a,b) {
					return b.score-a.score;
			})
			})
		}	
	},
	render:function () {	
		return (
			<div className="result" style={{minHeight:"800px"}}>
				<h3>看你所看</h3>
				<div className='sortdiv'>	
				<span className="hot" ref="hot" onClick={this.Sort}>热门</span>
				<span className="score" onClick={this.Sort}>评分</span>
				</div>
				<ul>{this.createList()}</ul>	
			</div>

			)
	},
	componentDidMount:function () {
	
		$.get("data/list.json",function (res) {
				Conf.DATABASE=res.data;
			if(res&&res.errno===0){
				this.setState({
					startList:res.data
				})
			
				this.setState({
					list:this.state.startList
				})
			}
		}.bind(this))
	}





})