var SearchAction=require('../action/searchAction.jsx')
var Conf=require('../conf.jsx')
module.exports=Reflux.createStore({
	listenables:[SearchAction],
	onSearch:function (text) {
			var newList=[];
			for (var i =0 ; i< Conf.DATABASE.length; i++) {
				if(
					Conf.DATABASE[i].title.indexOf(text)>=0||
					Conf.DATABASE[i].subtitle.indexOf(text)>=0||
					Conf.DATABASE[i].type.indexOf(text)>=0||
					Conf.DATABASE[i].adress.indexOf(text)>=0||
					Conf.DATABASE[i].all.indexOf(text)>=0
					){
					newList.push(Conf.DATABASE[i])
				}
			}
		this.trigger(newList)
	}
})