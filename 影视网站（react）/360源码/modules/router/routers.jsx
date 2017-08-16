var Router=require('../conf.jsx').Router
var Route=require('../conf.jsx').Route
var IndexRoute=require('../conf.jsx').IndexRoute
var App=require('../app.jsx')
var Film=require('../page/film.jsx')
var Tv=require('../page/tv.jsx')
var Vairety=require('../page/vairety.jsx')
var Comic=require('../page/comic.jsx')
var Play=require('../page/play.jsx')
var More=require('../page/more.jsx')
var Home=require('../page/home.jsx')


module.exports=(
	<Router>
		<Route path='/'  component={App}>
			<Route path='film' component={Film}></Route>
			<Route path='tv' component={Tv}></Route>
			<Route path='vairety' component={Vairety}></Route>
			<Route path='comic' component={Comic}></Route>
			<Route path='play' component={Play}></Route>
			<Route path='more/:query' component={More}></Route>
			<IndexRoute component={Home}></IndexRoute>
		</Route>	
	</Router>
)