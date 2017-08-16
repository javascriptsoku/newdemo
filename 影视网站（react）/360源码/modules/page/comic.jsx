var PageAside=require('../component/pageAside.jsx')
var Page2=require('../component/page2.jsx')
var Update=require('../component/update.jsx')
var Page=require('../component/page.jsx')

module.exports=React.createClass({
	render:function (argument) {
		return (
		<section className="comic">
		
			
				<PageAside></PageAside>
			<Page2 titleVal="每日动漫"	getType="comic"></Page2>
			<Update></Update>
			<Page data={{titleVal:"电影速递"}}></Page>
			<Page2 titleVal="热门动漫"	getType="comic"></Page2>
		
		</section>)
	}
})