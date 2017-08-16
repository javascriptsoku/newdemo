var PageAside=require('../component/pageAside.jsx')
var Page2=require('../component/page2.jsx')
var Update=require('../component/update.jsx')
var Page=require('../component/page.jsx')

module.exports=React.createClass({
	render:function (argument) {
		return (
		<section className="vairety">
				<PageAside></PageAside>
			<Page2 titleVal="每日综艺"	getType="vairety"></Page2>
			<Update></Update>
			<Page data={{titleVal:"电影速递"}}></Page>
			<Page2 titleVal="热门综艺"	getType="vairety"></Page2>
			
		</section>)
	}
})