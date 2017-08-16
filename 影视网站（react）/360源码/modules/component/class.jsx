module.exports=React.createClass({
	getDefaultProps:function () {
		return {
			list:["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg"]
		}
	},
	createList:function () {
		return this.props.list.map(function (value,index) {
			return (
			<li key = {index}>
				<a>
					<img src={"img/banner/"+value} alt=""/>
				</a>
			</li>)
		})
	},
	render:function (argument) {
		return (
			<section className="class">
				<h3>精彩专题</h3>
				<ul>{this.createList()}</ul>
			</section>
			)
	}
})