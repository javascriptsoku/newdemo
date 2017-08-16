module.exports=React.createClass({
	getDefaultProps:function () {
		return {
			typelist:["军事","古装","谍战","喜剧","言情","伦理","都市","历史",'警匪','神话'],
			adresslist:["内地","香港","台湾","美国","韩国"],
			superlist:["胡歌","孙俪","baby","杨幂","王凯"]
		}
	},
	createTypelist:function (argument) {
		return this.props.typelist.map(function (value,index) {
			return (
			<li key = {index}>
				<a href="#/more/电影">
					{value}
				</a>
			</li>)
		})
	},
	createAdresslist:function (argument) {
		return this.props.adresslist.map(function (value,index) {
			return (
			<li key = {index}>
				<a href="#/more">
					{value}
				</a>
			</li>)
		})
	},
	createSuperlist:function (argument) {
		return this.props.superlist.map(function (value,index) {
			return (
			<li key = {index}>
				<a href="#/more">
					{value}
				</a>
			</li>)
		})
	},
	render:function (argument) {
		return (
			<section className="sortby">
				<h3>选你喜欢</h3>
				<a href="#/more" className='more'>更多&nbsp;&gt;</a>
				<ul>{this.createTypelist()}</ul>
				<ul>{this.createAdresslist()}</ul>
				<ul>{this.createSuperlist()}</ul>
			</section>
			)
	}
})