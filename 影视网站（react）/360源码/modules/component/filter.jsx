var FilterAction=require('../action/filterAction.jsx')
module.exports=React.createClass({
	filter:function (e) {
		var liList=e.target.parentElement.children
		var textArr=[]
		for(var i = 0 ;i< liList.length; i++){
			liList[i].style.background="#FFF"
			liList[i].style.color="#000"
		}
		e.target.style.background="#1db69a"
		e.target.style.color="#FFF"

		$(this.refs.ul).find("a").each(function () {
			if(this.style.background=== "rgb(29, 182, 154)"){
				textArr.push(this.text)
			}
		})
		FilterAction.filter(textArr)
	},
	createSubList:function (value) {
		return value.map(function (value,index) {
			return (
				<a  key={index} onClick={this.filter}>{value}</a>
				)
		}.bind(this))
	},
	createList:function () {
		return this.props.list.map(function (obj,index) {
			return (
			<li ref="li" key={index}>
				<span>{obj.type}&nbsp;&nbsp;:&nbsp;&nbsp;</span>
				<span>{this.createSubList(obj.name)}</span>
			</li>)
		}.bind(this))
	},
	getDefaultProps:function (argument) {
		return {
			list:[
				{type:"频道",name:["全部","电视剧","电影","综艺","动漫"]},
				{type:"类型",name:["全部","军事","古装","谍战","喜剧","言情","伦理","都市","历史",'警匪','神话']},
				{type:"年代",name:["全部","2017","2016","2015","2014"]},
				{type:"地区",name:["全部","内地","香港","台湾","美国","韩国"]},
				{type:"明星",name:["全部","胡歌","孙俪","baby","杨幂","王凯"]}
			]
		}
	},
	render:function (argument) {
		return (
				<section className="filter">
						<ul ref="ul">{this.createList()}</ul>
				</section>
			)
	}
})