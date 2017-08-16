var Conf=require('../conf.jsx')
var FilterAction=require('../action/filterAction.jsx')
module.exports=Reflux.createStore({
	listenables:[FilterAction],
	onFilter:function(arr) {
			var startArr = Conf.DATABASE;
			var newArr=[];
			for(var i = 0; i< arr.length;i++){
				for(var j =0;j< startArr.length;j++){
					if(startArr[j].num===arr[i]||startArr[j].type===arr[i]||startArr[j].all===arr[i]||startArr[j].adress===arr[i]){
						newArr.push(startArr[j])
					}
				}
				startArr=newArr;
				newArr=[]
			}	
			this.trigger(startArr)
	}
})