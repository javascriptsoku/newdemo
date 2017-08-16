var Chart=require('./chart.jsx')
var Class=require('./class.jsx')
var Sortby=require('./sortby.jsx')
module.exports=React.createClass({
	render:function (argument) {
		return (
		<section className="pageAside">
			<Chart></Chart>
			<Class></Class>
			<Sortby></Sortby>
		</section>)
	}
})