var Filter=require('../component/filter.jsx')
var Result=require('../component/result.jsx')
var SearchAction=require('../action/searchAction.jsx')
module.exports=React.createClass({
	getInitialState:function (argument) {
		return {
			text:[]
		}
	},
	render:function (argument) {
		return (

				<section className="more">
					<Filter></Filter>
					<Result></Result>
				</section>
			)
	},
	componentDidMount:function (argument) {

		SearchAction.search(this.props.params.query)	
	},
	componentDidUpdate:function (argument) {

		SearchAction.search(this.props.params.query)	
	}
})