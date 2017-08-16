;/*!modules/action/filteraction.jsx*/
define('modules/action/filteraction.jsx', function(require, exports, module) {

  'use strict';
  
  module.exports = Reflux.createActions(['filter']);

});

;/*!modules/action/searchAction.jsx*/
define('modules/action/searchAction.jsx', function(require, exports, module) {

  'use strict';
  
  module.exports = Reflux.createActions(['search']);

});

;/*!modules/component/header.jsx*/
define('modules/component/header.jsx', function(require, exports, module) {

  'use strict';
  
  var SearchAction = require('modules/action/searchAction.jsx');
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	getInitialState: function getInitialState() {
  		return {
  			skinData: [],
  			skintoggle: 'none'
  		};
  	},
  	changeSkin: function changeSkin(e, even) {
  		// 参数就是id
  		var id = e;
  		// 根据id更新内容
  		document.body.style.backgroundImage = 'url(img/skin/big_' + id + '.jpg)';
  		document.body.style.backgroundRepeat = "noRepeat";
  		document.body.style.backgroundPosition = "center 0";
  		document.body.style.backgroundSize = "cover";
  		document.body.style.backgroundAttachment = "fixed";
  		var liList = even.target.parentElement.parentElement.children;
  		for (var i = 0; i < liList.length; i++) {
  			liList[i].style.borderColor = "#FFF";
  		}
  		even.target.parentElement.style.borderColor = "#000";
  	},
  	skin: function skin() {
  		return this.state.skinData.map((function (obj, index) {
  			// 定义li的结构
  			return React.createElement(
  				'li',
  				{ key: index, onClick: this.changeSkin.bind(this, obj.id) },
  				React.createElement('img', { src: 'img/skin/' + obj.src, alt: '' }),
  				React.createElement(
  					'p',
  					null,
  					obj.title
  				)
  			);
  		}).bind(this));
  	},
  	skintoggle: function skintoggle() {
  		if (this.state.skintoggle === "none") {
  			this.setState({
  				skintoggle: 'block'
  			});
  		} else {
  			this.setState({
  				skintoggle: 'none'
  			});
  		}
  	},
  	sure: function sure() {
  		this.setState({
  			skintoggle: 'none'
  		});
  	},
  	defaultTo: function defaultTo() {
  		this.setState({
  			skintoggle: 'none'
  		});
  		document.body.style.background = '#ccc';
  	},
  	navClick: function navClick(e) {
  		$(this.refs.nav).children().css({
  			background: 'transparent',
  			color: '#000'
  		});
  		$(e.target).css({
  			background: '#1db69a',
  			color: "#fff"
  		});
  	},
  	search: function search(e) {
  		SearchAction.search(this.refs.searchValue.value);
  		console.log(this.refs.searchValue.value);
  		ReactRouter.hashHistory.replace('/more/' + this.refs.searchValue.value);
  		$(this.refs.nav).children().css({
  			color: '#000',
  			background: 'transparent'
  		});
  		$(this.refs.more).css({
  			background: '#1db69a',
  			color: "#fff"
  		});
  	},
  	keysearch: function keysearch(e) {
  		if (e.keyCode === 13) {
  			this.search();
  		}
  	},
  	render: function render() {
  		return React.createElement(
  			'div',
  			{ className: 'container' },
  			React.createElement(
  				'div',
  				{ className: 'top', style: {
  						display: this.state.skintoggle
  
  					} },
  				React.createElement(
  					'ul',
  					null,
  					this.skin(),
  					React.createElement(
  						'button',
  						{ id: 'sure', onClick: this.sure },
  						'确定'
  					),
  					React.createElement(
  						'button',
  						{ id: 'default', onClick: this.defaultTo },
  						'使用默认皮肤'
  					)
  				)
  			),
  			React.createElement(
  				'header',
  				null,
  				React.createElement(
  					'h1',
  					{ className: 'logo' },
  					React.createElement(
  						'a',
  						{ href: '' },
  						React.createElement('img', { src: 'img/logo.png' })
  					)
  				),
  				React.createElement('input', { onKeyDown: this.keysearch, type: 'text', placeholder: '摔跤吧！爸爸', ref: 'searchValue', id: 'search' }),
  				React.createElement(
  					'button',
  					{ onClick: this.search },
  					'搜一搜'
  				),
  				React.createElement(
  					'a',
  					{ onClick: this.skintoggle },
  					'换肤'
  				)
  			),
  			React.createElement(
  				'div',
  				{ className: 'nav' },
  				React.createElement(
  					'nav',
  					{ onClick: this.navClick, ref: 'nav' },
  					React.createElement(
  						'a',
  						{ href: '#/' },
  						'首页'
  					),
  					React.createElement(
  						'a',
  						{ href: '#/film' },
  						'电影'
  					),
  					React.createElement(
  						'a',
  						{ href: '#/tv' },
  						'电视剧'
  					),
  					React.createElement(
  						'a',
  						{ href: '#/vairety' },
  						'综艺'
  					),
  					React.createElement(
  						'a',
  						{ href: '#/comic' },
  						'动漫'
  					),
  					React.createElement(
  						'a',
  						{ href: '#/play' },
  						'娱乐'
  					),
  					React.createElement(
  						'a',
  						{ href: '#/more/全部', ref: 'more' },
  						'更多'
  					)
  				)
  			)
  		);
  	},
  	componentDidMount: function componentDidMount() {
  		$.get('data/skin.json', (function (res) {
  			if (res && res.errno === 0) {
  				this.setState({
  					skinData: res.data
  				});
  			}
  		}).bind(this));
  	}
  });

});

;/*!modules/component/footer.jsx*/
define('modules/component/footer.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	render: function render() {
  		return React.createElement(
  			"section",
  			{ className: "footer" },
  			React.createElement(
  				"div",
  				{ className: "footerBox" },
  				React.createElement(
  					"div",
  					{ className: "left" },
  					React.createElement("img", { src: "img/logo.png", alt: "" }),
  					React.createElement(
  						"span",
  						null,
  						"Copyright © 360安全网址. All Rights Reserved."
  					),
  					React.createElement(
  						"span",
  						null,
  						"浙ICP证B2-20090064号   信息网络传播视听节目许可证1109357号"
  					)
  				),
  				React.createElement(
  					"div",
  					{ className: "right" },
  					React.createElement(
  						"ul",
  						null,
  						React.createElement(
  							"li",
  							null,
  							React.createElement(
  								"p",
  								null,
  								"扫码下载APP"
  							)
  						),
  						React.createElement(
  							"li",
  							null,
  							React.createElement("img", { src: "img/link.png", alt: "" })
  						)
  					),
  					React.createElement(
  						"ul",
  						null,
  						React.createElement(
  							"li",
  							null,
  							"服务"
  						),
  						React.createElement(
  							"li",
  							null,
  							"加入收藏"
  						),
  						React.createElement(
  							"li",
  							null,
  							"意见反馈"
  						),
  						React.createElement(
  							"li",
  							null,
  							"官方微博"
  						),
  						React.createElement(
  							"li",
  							null,
  							"联系方式"
  						)
  					),
  					React.createElement(
  						"ul",
  						null,
  						React.createElement(
  							"li",
  							null,
  							"关于"
  						),
  						React.createElement(
  							"li",
  							null,
  							"关于我们"
  						),
  						React.createElement(
  							"li",
  							null,
  							"版权声明"
  						),
  						React.createElement(
  							"li",
  							null,
  							"用户协议"
  						)
  					)
  				)
  			)
  		);
  	}
  });

});

;/*!modules/app.jsx*/
define('modules/app.jsx', function(require, exports, module) {

  'use strict';
  
  var Header = require('modules/component/header.jsx');
  var Footer = require('modules/component/footer.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	getInitialState: function getInitialState(argument) {
  		return {
  			toggle: "none"
  		};
  	},
  	gotopScroll: function gotopScroll(argument) {
  		if ($(window).scrollTop() >= 1500) {
  			this.setState({
  				toggle: "block"
  			});
  		} else {
  			this.setState({
  				toggle: "none"
  			});
  		}
  	},
  	gotop: function gotop(argument) {
  		window.scrollTo(0, 0);
  	},
  	render: function render() {
  		return React.createElement(
  			'section',
  			null,
  			React.createElement(Header, null),
  			this.props.children,
  			React.createElement(
  				'span',
  				{ className: 'gotop', onClick: this.gotop, style: { display: this.state.toggle } },
  				'返回顶部'
  			),
  			React.createElement(Footer, null)
  		);
  	},
  	componentDidMount: function componentDidMount() {
  		window.addEventListener('scroll', this.gotopScroll);
  	}
  });

});

;/*!modules/conf.jsx*/
define('modules/conf.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = {
    Router: ReactRouter.Router,
    Route: ReactRouter.Route,
    IndexRoute: ReactRouter.IndexRoute,
    DATABASE: []
  };

});

;/*!modules/component/chart.jsx*/
define('modules/component/chart.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	getInitialState: function getInitialState() {
  		return {
  			list: []
  		};
  	},
  	createList: function createList() {
  		return this.state.list.map(function (value, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement(
  					"span",
  					{ className: "num" },
  					index + 1
  				),
  				React.createElement(
  					"a",
  					null,
  					value.name
  				),
  				React.createElement(
  					"span",
  					null,
  					value.num + "万"
  				)
  			);
  		});
  	},
  	render: function render() {
  
  		return React.createElement(
  			"div",
  			{ className: "chart" },
  			React.createElement(
  				"h3",
  				null,
  				"观看榜"
  			),
  			React.createElement(
  				"ul",
  				null,
  				this.createList()
  			)
  		);
  	},
  	componentDidMount: function componentDidMount() {
  
  		$.get("data/chart.json", (function (res) {
  			if (res && res.errno === 0) {
  				this.setState({
  					list: res.data
  				});
  			}
  		}).bind(this));
  	}
  });

});

;/*!modules/component/class.jsx*/
define('modules/component/class.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	getDefaultProps: function getDefaultProps() {
  		return {
  			list: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
  		};
  	},
  	createList: function createList() {
  		return this.props.list.map(function (value, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement(
  					"a",
  					null,
  					React.createElement("img", { src: "img/banner/" + value, alt: "" })
  				)
  			);
  		});
  	},
  	render: function render(argument) {
  		return React.createElement(
  			"section",
  			{ className: "class" },
  			React.createElement(
  				"h3",
  				null,
  				"精彩专题"
  			),
  			React.createElement(
  				"ul",
  				null,
  				this.createList()
  			)
  		);
  	}
  });

});

;/*!modules/component/sortby.jsx*/
define('modules/component/sortby.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	getDefaultProps: function getDefaultProps() {
  		return {
  			typelist: ["军事", "古装", "谍战", "喜剧", "言情", "伦理", "都市", "历史", '警匪', '神话'],
  			adresslist: ["内地", "香港", "台湾", "美国", "韩国"],
  			superlist: ["胡歌", "孙俪", "baby", "杨幂", "王凯"]
  		};
  	},
  	createTypelist: function createTypelist(argument) {
  		return this.props.typelist.map(function (value, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement(
  					"a",
  					{ href: "#/more/电影" },
  					value
  				)
  			);
  		});
  	},
  	createAdresslist: function createAdresslist(argument) {
  		return this.props.adresslist.map(function (value, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement(
  					"a",
  					{ href: "#/more" },
  					value
  				)
  			);
  		});
  	},
  	createSuperlist: function createSuperlist(argument) {
  		return this.props.superlist.map(function (value, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement(
  					"a",
  					{ href: "#/more" },
  					value
  				)
  			);
  		});
  	},
  	render: function render(argument) {
  		return React.createElement(
  			"section",
  			{ className: "sortby" },
  			React.createElement(
  				"h3",
  				null,
  				"选你喜欢"
  			),
  			React.createElement(
  				"a",
  				{ href: "#/more", className: "more" },
  				"更多 >"
  			),
  			React.createElement(
  				"ul",
  				null,
  				this.createTypelist()
  			),
  			React.createElement(
  				"ul",
  				null,
  				this.createAdresslist()
  			),
  			React.createElement(
  				"ul",
  				null,
  				this.createSuperlist()
  			)
  		);
  	}
  });

});

;/*!modules/component/pageAside.jsx*/
define('modules/component/pageAside.jsx', function(require, exports, module) {

  'use strict';
  
  var Chart = require('modules/component/chart.jsx');
  var Class = require('modules/component/class.jsx');
  var Sortby = require('modules/component/sortby.jsx');
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	render: function render(argument) {
  		return React.createElement(
  			'section',
  			{ className: 'pageAside' },
  			React.createElement(Chart, null),
  			React.createElement(Class, null),
  			React.createElement(Sortby, null)
  		);
  	}
  });

});

;/*!modules/component/page2.jsx*/
define('modules/component/page2.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	createList: function createList() {
  		return this.state.list.map(function (obj, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement("img", { src: 'img/list/' + obj.url }),
  				React.createElement("img", { src: "img/bg.png", className: "bg" }),
  				React.createElement(
  					"span",
  					null,
  					obj.score
  				),
  				React.createElement(
  					"p",
  					{ className: "title" },
  					obj.title
  				),
  				React.createElement(
  					"p",
  					{ className: "subtitle" },
  					obj.subtitle
  				),
  				React.createElement(
  					"p",
  					{ className: "num" },
  					obj.num
  				)
  			);
  		});
  	},
  	getDefaultProps: function getDefaultProps(argument) {
  		return {
  			getType: '',
  			titleVal: '',
  			typelist: ["军事", "古装", "谍战", "喜剧", "言情", "伦理", "都市", "历史", '警匪', '神话']
  
  		};
  	},
  	getInitialState: function getInitialState() {
  		return {
  			list: []
  		};
  	},
  	createMoreList: function createMoreList(argument) {
  		// body...
  		return this.props.typelist.map(function (value, index) {
  			return React.createElement(
  				"a",
  				{ href: "#/more", key: index },
  				value
  			);
  		});
  	},
  	render: function render(argument) {
  		return React.createElement(
  			"section",
  			{ className: "page2" },
  			React.createElement(
  				"h3",
  				null,
  				this.props.titleVal
  			),
  			React.createElement(
  				"a",
  				{ href: "#/more", className: "more" },
  				"更多"
  			),
  			React.createElement(
  				"span",
  				{ className: "link" },
  				this.createMoreList()
  			),
  			React.createElement(
  				"ul",
  				{ style: { height: "670px" } },
  				this.createList()
  			)
  		);
  	},
  	componentDidMount: function componentDidMount(argument) {
  		$.get("data/" + this.props.getType + ".json", (function (res) {
  			if (res && res.errno === 0) {
  				this.setState({
  					list: res.data
  				});
  			}
  		}).bind(this));
  	}
  });

});

;/*!modules/component/update.jsx*/
define('modules/component/update.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	getDefaultProps: function getDefaultProps(argument) {
  		return {
  			week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"]
  		};
  	},
  	getInitialState: function getInitialState() {
  		return {
  			list: [],
  			list1: [],
  			list2: [],
  			list3: [],
  			list4: [],
  			list5: [],
  			list6: [],
  			list7: []
  		};
  	},
  
  	enter: function enter(e) {
  		// body...
  
  		var arr = e.target.parentElement.children;
  		for (var i = 0; i < arr.length; i++) {
  			arr[i].style.background = "#FFF";
  			arr[i].style.color = "#000";
  		}
  		e.target.style.background = "#1db69a";
  		e.target.style.color = "#fff";
  
  		if (e.target.text === "周一") {
  			this.setState({
  				list: this.state.list1
  			});
  		} else if (e.target.text === "周二") {
  			this.setState({
  				list: this.state.list2
  			});
  		} else if (e.target.text === "周三") {
  			this.setState({
  				list: this.state.list3
  			});
  		} else if (e.target.text === "周四") {
  			this.setState({
  				list: this.state.list4
  			});
  		} else if (e.target.text === "周五") {
  			this.setState({
  				list: this.state.list5
  			});
  		} else if (e.target.text === "周六") {
  			this.setState({
  				list: this.state.list6
  			});
  		} else {
  			this.setState({
  				list: this.state.list7
  			});
  		}
  	},
  
  	createWeek: function createWeek(argument) {
  		// body...
  		return this.props.week.map((function (value, index) {
  			return React.createElement(
  				"a",
  				{ key: index, onMouseEnter: this.enter },
  				value
  			);
  		}).bind(this));
  	},
  	createList: function createList() {
  		return this.state.list.map(function (obj, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement("img", { src: 'img/update/' + obj.url }),
  				React.createElement("img", { src: "img/bg.png", className: "bg" }),
  				React.createElement(
  					"p",
  					{ className: "title" },
  					obj.title
  				),
  				React.createElement(
  					"p",
  					{ className: "subtitle" },
  					obj.subtitle
  				)
  			);
  		});
  	},
  	render: function render(argument) {
  		return React.createElement(
  			"section",
  			{ className: "update" },
  			React.createElement(
  				"h3",
  				null,
  				"动态直播"
  			),
  			React.createElement(
  				"span",
  				null,
  				this.createWeek()
  			),
  			React.createElement(
  				"ul",
  				null,
  				this.createList()
  			)
  		);
  	},
  	componentDidMount: function componentDidMount(argument) {
  		$.get("data/update.json", (function (res) {
  			if (res && res.errno === 0) {
  
  				this.setState({
  					list1: res.data.list1,
  					list2: res.data.list2,
  					list3: res.data.list3,
  					list4: res.data.list4,
  					list5: res.data.list5,
  					list6: res.data.list6,
  					list7: res.data.list7
  				});
  				this.setState({
  					list: this.state.list1
  				});
  			}
  		}).bind(this));
  	}
  });

});

;/*!modules/component/page.jsx*/
define('modules/component/page.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	createList: function createList() {
  		return this.state.list.map(function (obj, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement("img", { src: 'img/' + obj.url }),
  				React.createElement("img", { src: "img/bg.png", className: "bg" }),
  				React.createElement(
  					"span",
  					null,
  					obj.score
  				),
  				React.createElement(
  					"p",
  					{ className: "title" },
  					obj.title
  				),
  				React.createElement(
  					"p",
  					{ className: "subtitle" },
  					obj.subtitle
  				),
  				React.createElement(
  					"p",
  					{ className: "num" },
  					obj.num
  				)
  			);
  		});
  	},
  	getDefaultProps: function getDefaultProps(argument) {
  		return {
  			data: {
  				titleVal: '',
  				type: ""
  			}
  
  		};
  	},
  	getInitialState: function getInitialState() {
  		return {
  			list: [],
  			list1: [],
  			list2: [],
  			moretoggle: true
  		};
  	},
  	more: function more() {
  		if (this.state.moretoggle) {
  
  			this.setState({
  				list: this.state.list2,
  				moretoggle: false
  			});
  		} else {
  			this.setState({
  				list: this.state.list1,
  				moretoggle: true
  			});
  		}
  	},
  
  	render: function render(argument) {
  
  		return React.createElement(
  			"section",
  			{ className: "page", id: this.props.data.id },
  			React.createElement(
  				"h3",
  				null,
  				this.props.data.titleVal
  			),
  			React.createElement(
  				"span",
  				{ className: "more", onClick: this.more },
  				"换一换"
  			),
  			React.createElement(
  				"ul",
  				null,
  				this.createList()
  			)
  		);
  	},
  	componentDidMount: function componentDidMount(argument) {
  		$.get("data/home.json", (function (res) {
  			if (res && res.errno === 0) {
  				this.setState({
  					list1: res.data,
  					list2: res.datamore
  
  				});
  				this.setState({
  					list: this.state.list1
  				});
  			}
  		}).bind(this));
  	}
  });

});

;/*!modules/page/film.jsx*/
define('modules/page/film.jsx', function(require, exports, module) {

  'use strict';
  
  var PageAside = require('modules/component/pageAside.jsx');
  var Page2 = require('modules/component/page2.jsx');
  var Update = require('modules/component/update.jsx');
  var Page = require('modules/component/page.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	render: function render(argument) {
  		return React.createElement(
  			'section',
  			{ className: 'film' },
  			React.createElement(PageAside, null),
  			React.createElement(Page2, { titleVal: '每日电影', getType: 'film' }),
  			React.createElement(Update, null),
  			React.createElement(Page, { data: { titleVal: "电影速递" } }),
  			React.createElement(Page2, { titleVal: '热门电影', getType: 'film' })
  		);
  	}
  });

});

;/*!modules/page/tv.jsx*/
define('modules/page/tv.jsx', function(require, exports, module) {

  'use strict';
  
  var PageAside = require('modules/component/pageAside.jsx');
  var Page2 = require('modules/component/page2.jsx');
  var Update = require('modules/component/update.jsx');
  var Page = require('modules/component/page.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	render: function render(argument) {
  		return React.createElement(
  			'section',
  			{ className: 'tv' },
  			React.createElement(PageAside, null),
  			React.createElement(Page2, { titleVal: '每日TV', getType: 'tv' }),
  			React.createElement(Update, null),
  			React.createElement(Page, { data: { titleVal: "电影速递" } }),
  			React.createElement(Page2, { titleVal: '热门TV', getType: 'tv' })
  		);
  	}
  });

});

;/*!modules/page/vairety.jsx*/
define('modules/page/vairety.jsx', function(require, exports, module) {

  'use strict';
  
  var PageAside = require('modules/component/pageAside.jsx');
  var Page2 = require('modules/component/page2.jsx');
  var Update = require('modules/component/update.jsx');
  var Page = require('modules/component/page.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	render: function render(argument) {
  		return React.createElement(
  			'section',
  			{ className: 'vairety' },
  			React.createElement(PageAside, null),
  			React.createElement(Page2, { titleVal: '每日综艺', getType: 'vairety' }),
  			React.createElement(Update, null),
  			React.createElement(Page, { data: { titleVal: "电影速递" } }),
  			React.createElement(Page2, { titleVal: '热门综艺', getType: 'vairety' })
  		);
  	}
  });

});

;/*!modules/page/comic.jsx*/
define('modules/page/comic.jsx', function(require, exports, module) {

  'use strict';
  
  var PageAside = require('modules/component/pageAside.jsx');
  var Page2 = require('modules/component/page2.jsx');
  var Update = require('modules/component/update.jsx');
  var Page = require('modules/component/page.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	render: function render(argument) {
  		return React.createElement(
  			'section',
  			{ className: 'comic' },
  			React.createElement(PageAside, null),
  			React.createElement(Page2, { titleVal: '每日动漫', getType: 'comic' }),
  			React.createElement(Update, null),
  			React.createElement(Page, { data: { titleVal: "电影速递" } }),
  			React.createElement(Page2, { titleVal: '热门动漫', getType: 'comic' })
  		);
  	}
  });

});

;/*!modules/page/play.jsx*/
define('modules/page/play.jsx', function(require, exports, module) {

  'use strict';
  
  var PageAside = require('modules/component/pageAside.jsx');
  var Page2 = require('modules/component/page2.jsx');
  var Update = require('modules/component/update.jsx');
  var Page = require('modules/component/page.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	render: function render(argument) {
  		return React.createElement(
  			'section',
  			{ className: 'Play' },
  			React.createElement(PageAside, null),
  			React.createElement(Page2, { titleVal: '每日娱乐', getType: 'play' }),
  			React.createElement(Update, null),
  			React.createElement(Page, { data: { titleVal: "电影速递" } }),
  			React.createElement(Page2, { titleVal: '热门娱乐', getType: 'play' })
  		);
  	}
  });

});

;/*!modules/action/filterAction.jsx*/
define('modules/action/filterAction.jsx', function(require, exports, module) {

  'use strict';
  
  module.exports = Reflux.createActions(['filter']);

});

;/*!modules/component/filter.jsx*/
define('modules/component/filter.jsx', function(require, exports, module) {

  "use strict";
  
  var FilterAction = require('modules/action/filterAction.jsx');
  module.exports = React.createClass({
  	displayName: "exports",
  
  	filter: function filter(e) {
  		var liList = e.target.parentElement.children;
  		var textArr = [];
  		for (var i = 0; i < liList.length; i++) {
  			liList[i].style.background = "#FFF";
  			liList[i].style.color = "#000";
  		}
  		e.target.style.background = "#1db69a";
  		e.target.style.color = "#FFF";
  
  		$(this.refs.ul).find("a").each(function () {
  			if (this.style.background === "rgb(29, 182, 154)") {
  				textArr.push(this.text);
  			}
  		});
  		FilterAction.filter(textArr);
  	},
  	createSubList: function createSubList(value) {
  		return value.map((function (value, index) {
  			return React.createElement(
  				"a",
  				{ key: index, onClick: this.filter },
  				value
  			);
  		}).bind(this));
  	},
  	createList: function createList() {
  		return this.props.list.map((function (obj, index) {
  			return React.createElement(
  				"li",
  				{ ref: "li", key: index },
  				React.createElement(
  					"span",
  					null,
  					obj.type,
  					"  :  "
  				),
  				React.createElement(
  					"span",
  					null,
  					this.createSubList(obj.name)
  				)
  			);
  		}).bind(this));
  	},
  	getDefaultProps: function getDefaultProps(argument) {
  		return {
  			list: [{ type: "频道", name: ["全部", "电视剧", "电影", "综艺", "动漫"] }, { type: "类型", name: ["全部", "军事", "古装", "谍战", "喜剧", "言情", "伦理", "都市", "历史", '警匪', '神话'] }, { type: "年代", name: ["全部", "2017", "2016", "2015", "2014"] }, { type: "地区", name: ["全部", "内地", "香港", "台湾", "美国", "韩国"] }, { type: "明星", name: ["全部", "胡歌", "孙俪", "baby", "杨幂", "王凯"] }]
  		};
  	},
  	render: function render(argument) {
  		return React.createElement(
  			"section",
  			{ className: "filter" },
  			React.createElement(
  				"ul",
  				{ ref: "ul" },
  				this.createList()
  			)
  		);
  	}
  });

});

;/*!modules/store/searchStore.jsx*/
define('modules/store/searchStore.jsx', function(require, exports, module) {

  'use strict';
  
  var SearchAction = require('modules/action/searchAction.jsx');
  var Conf = require('modules/conf.jsx');
  module.exports = Reflux.createStore({
  	listenables: [SearchAction],
  	onSearch: function onSearch(text) {
  		var newList = [];
  		for (var i = 0; i < Conf.DATABASE.length; i++) {
  			if (Conf.DATABASE[i].title.indexOf(text) >= 0 || Conf.DATABASE[i].subtitle.indexOf(text) >= 0 || Conf.DATABASE[i].type.indexOf(text) >= 0 || Conf.DATABASE[i].adress.indexOf(text) >= 0 || Conf.DATABASE[i].all.indexOf(text) >= 0) {
  				newList.push(Conf.DATABASE[i]);
  			}
  		}
  		this.trigger(newList);
  	}
  });

});

;/*!modules/store/filterStore.jsx*/
define('modules/store/filterStore.jsx', function(require, exports, module) {

  'use strict';
  
  var Conf = require('modules/conf.jsx');
  var FilterAction = require('modules/action/filterAction.jsx');
  module.exports = Reflux.createStore({
  	listenables: [FilterAction],
  	onFilter: function onFilter(arr) {
  		var startArr = Conf.DATABASE;
  		var newArr = [];
  		for (var i = 0; i < arr.length; i++) {
  			for (var j = 0; j < startArr.length; j++) {
  				if (startArr[j].num === arr[i] || startArr[j].type === arr[i] || startArr[j].all === arr[i] || startArr[j].adress === arr[i]) {
  					newArr.push(startArr[j]);
  				}
  			}
  			startArr = newArr;
  			newArr = [];
  		}
  		this.trigger(startArr);
  	}
  });

});

;/*!modules/component/result.jsx*/
define('modules/component/result.jsx', function(require, exports, module) {

  'use strict';
  
  var Conf = require('modules/conf.jsx');
  var SearchStore = require('modules/store/searchStore.jsx');
  var FilterStore = require('modules/store/filterStore.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	mixins: [Reflux.connect(SearchStore, "list"), Reflux.connect(FilterStore, "list")],
  	getDefaultProps: function getDefaultProps(argument) {
  		return {
  			text: []
  		};
  	},
  	getInitialState: function getInitialState() {
  		return {
  			data: "",
  			startList: [],
  			list: []
  		};
  	},
  	createList: function createList() {
  		return this.state.list.map(function (obj, index) {
  			return React.createElement(
  				'li',
  				{ key: index, className: 'resuliLi' },
  				React.createElement(
  					'i',
  					{ id: 'i' },
  					obj.type,
  					obj.adress
  				),
  				React.createElement('img', { src: 'img/list/' + obj.url }),
  				React.createElement('img', { src: 'img/bg.png', className: 'bg' }),
  				React.createElement(
  					'span',
  					null,
  					obj.score
  				),
  				React.createElement(
  					'p',
  					{ className: 'title' },
  					obj.title
  				),
  				React.createElement(
  					'p',
  					{ className: 'subtitle' },
  					obj.subtitle
  				),
  				React.createElement(
  					'span',
  					{ className: 'good' },
  					obj.good,
  					'观看'
  				),
  				React.createElement(
  					'p',
  					{ className: 'num' },
  					obj.num
  				)
  			);
  		});
  	},
  	Sort: function Sort(e) {
  		$(e.target).parent().find('span').css({
  			background: 'transparent',
  			color: '#000'
  		});
  		$(e.target).css({
  			background: '#1db69a',
  			color: '#fff'
  		});
  		if ($(e.target).text() === "热门") {
  			this.setState({
  				list: this.state.list.sort(function (a, b) {
  					return b.good - a.good;
  				})
  			});
  		} else {
  			this.setState({
  				list: this.state.list.sort(function (a, b) {
  					return b.score - a.score;
  				})
  			});
  		}
  	},
  	render: function render() {
  		return React.createElement(
  			'div',
  			{ className: 'result', style: { minHeight: "800px" } },
  			React.createElement(
  				'h3',
  				null,
  				'看你所看'
  			),
  			React.createElement(
  				'div',
  				{ className: 'sortdiv' },
  				React.createElement(
  					'span',
  					{ className: 'hot', ref: 'hot', onClick: this.Sort },
  					'热门'
  				),
  				React.createElement(
  					'span',
  					{ className: 'score', onClick: this.Sort },
  					'评分'
  				)
  			),
  			React.createElement(
  				'ul',
  				null,
  				this.createList()
  			)
  		);
  	},
  	componentDidMount: function componentDidMount() {
  
  		$.get("data/list.json", (function (res) {
  			Conf.DATABASE = res.data;
  			if (res && res.errno === 0) {
  				this.setState({
  					startList: res.data
  				});
  
  				this.setState({
  					list: this.state.startList
  				});
  			}
  		}).bind(this));
  	}
  
  });

});

;/*!modules/page/more.jsx*/
define('modules/page/more.jsx', function(require, exports, module) {

  'use strict';
  
  var Filter = require('modules/component/filter.jsx');
  var Result = require('modules/component/result.jsx');
  var SearchAction = require('modules/action/searchAction.jsx');
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	getInitialState: function getInitialState(argument) {
  		return {
  			text: []
  		};
  	},
  	render: function render(argument) {
  		return React.createElement(
  			'section',
  			{ className: 'more' },
  			React.createElement(Filter, null),
  			React.createElement(Result, null)
  		);
  	},
  	componentDidMount: function componentDidMount(argument) {
  
  		SearchAction.search(this.props.params.query);
  	},
  	componentDidUpdate: function componentDidUpdate(argument) {
  
  		SearchAction.search(this.props.params.query);
  	}
  });

});

;/*!modules/component/banner.jsx*/
define('modules/component/banner.jsx', function(require, exports, module) {

  "use strict";
  
  module.exports = React.createClass({
  	displayName: "exports",
  
  	getDefaultProps: function getDefaultProps(argument) {
  		return {
  			list: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
  		};
  	},
  	getInitialState: function getInitialState(argument) {
  		// body...
  		return {
  			timer: function timer() {},
  			list: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"]
  		};
  	},
  	createList: function createList() {
  		// body...
  		return this.props.list.map(function (value, index) {
  			return React.createElement(
  				"li",
  				{ key: index },
  				React.createElement(
  					"a",
  					null,
  					React.createElement("img", { src: "img/banner/" + value, alt: "" })
  				)
  			);
  		});
  	},
  	left: function left() {
  		var list = this.state.list;
  		var pop = list.pop();
  		list.unshift(pop);
  		var num = parseInt(list[0].slice(0, 1));
  		var subList = $(this.refs.ul).children();
  		subList.css({
  			border: 'none'
  
  		});
  		subList.eq(num - 1).css({
  			border: '5px solid green'
  		});
  		this.setState({
  			list: list
  		});
  	},
  	right: function right(argument) {
  
  		var list = this.state.list;
  		var shift = list.shift();
  		list.push(shift);
  		var num = parseInt(list[0].slice(0, 1));
  		var subList = $(this.refs.ul).children();
  		subList.css({
  			border: 'none'
  		});
  		subList.eq(num - 1).css({
  			border: '5px solid green'
  		});
  		this.setState({
  			list: list
  		});
  	},
  	render: function render() {
  
  		return React.createElement(
  			"section",
  			{ className: "banner" },
  			React.createElement(
  				"div",
  				null,
  				React.createElement("img", { src: "img/banner/" + this.state.list[0], alt: "" }),
  				React.createElement(
  					"ul",
  					{ ref: "ul" },
  					this.createList()
  				)
  			),
  			React.createElement(
  				"span",
  				{ className: "left", onClick: this.left },
  				"<"
  			),
  			React.createElement(
  				"span",
  				{ className: "right", onClick: this.right },
  				">"
  			)
  		);
  	},
  	componentDidMount: function componentDidMount(argument) {
  		this.setState({
  			timer: setInterval((function (argument) {
  				this.right();
  			}).bind(this), 2000)
  		});
  	},
  	componentWillUnmount: function componentWillUnmount() {
  		clearInterval(this.state.timer);
  	}
  });

});

;/*!modules/component/aside.jsx*/
define('modules/component/aside.jsx', function(require, exports, module) {

  'use strict';
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	getDefaultProps: function getDefaultProps() {
  		return {
  			showHide: "none"
  		};
  	},
  	getInitialState: function getInitialState() {
  		return {
  			list: []
  		};
  	},
  	go: function go(e) {
  		$(this.refs.ul).children().children().css({
  			background: 'transparent'
  		});
  
  		$(e.target).css({
  			background: '#1db69a'
  		});
  	},
  	createList: function createList() {
  		return this.state.list.map((function (value, index) {
  			return React.createElement(
  				'li',
  				{ key: index, onClick: this.go },
  				React.createElement(
  					'a',
  					{ href: "#" + value.type },
  					value.name
  				)
  			);
  		}).bind(this));
  	},
  	show: function show(argument) {},
  	render: function render() {
  		return React.createElement(
  			'div',
  			{ className: 'aside', ref: 'aside', style: { display: this.props.showHide } },
  			React.createElement(
  				'h3',
  				null,
  				'导航'
  			),
  			React.createElement(
  				'ul',
  				{ ref: 'ul' },
  				this.createList()
  			)
  		);
  	},
  	componentDidMount: function componentDidMount() {
  		$.get("data/Aside.json", (function (res) {
  			if (res && res.errno === 0) {
  				this.setState({
  					list: res.data
  				});
  			}
  		}).bind(this));
  	}
  });

});

;/*!modules/page/home.jsx*/
define('modules/page/home.jsx', function(require, exports, module) {

  'use strict';
  
  var Banner = require('modules/component/banner.jsx');
  var Aside = require('modules/component/aside.jsx');
  var Page = require('modules/component/page.jsx');
  
  module.exports = React.createClass({
  	displayName: 'exports',
  
  	getInitialState: function getInitialState(argument) {
  		return {
  			toggle: 'none',
  			title: {
  				hot: { titleVal: "热点聚焦", id: "1" },
  				film: { titleVal: "经典电影", id: "2" },
  				tv: { titleVal: "好看的电视剧", id: "3" },
  				play: { titleVal: "全民娱乐", id: "4" },
  				comic: { titleVal: "热血动漫", id: "5" },
  				Vairety: { titleVal: "综艺频道", id: "6" }
  			}
  
  		};
  	},
  	getScroll: function getScroll(argument) {
  
  		if ($(window).scrollTop() >= 500 && $(window).scrollTop() <= 3400) {
  			this.setState({
  				toggle: "block"
  			});
  		} else {
  			this.setState({
  				toggle: "none"
  			});
  		}
  	},
  	render: function render() {
  
  		return React.createElement(
  			'section',
  			{ className: 'home' },
  			React.createElement(Banner, null),
  			React.createElement(Aside, { showHide: this.state.toggle }),
  			React.createElement(Page, { data: this.state.title.hot }),
  			React.createElement(Page, { data: this.state.title.film }),
  			React.createElement(Page, { data: this.state.title.tv }),
  			React.createElement(Page, { data: this.state.title.play }),
  			React.createElement(Page, { data: this.state.title.comic }),
  			React.createElement(Page, { data: this.state.title.Vairety })
  		);
  	},
  	componentDidMount: function componentDidMount() {
  		window.addEventListener('scroll', this.getScroll);
  	},
  	componentWillUnmount: function componentWillUnmount() {
  		window.removeEventListener('scroll', this.getScroll);
  	}
  });

});

;/*!modules/router/routers.jsx*/
define('modules/router/routers.jsx', function(require, exports, module) {

  'use strict';
  
  var Router = require('modules/conf.jsx').Router;
  var Route = require('modules/conf.jsx').Route;
  var IndexRoute = require('modules/conf.jsx').IndexRoute;
  var App = require('modules/app.jsx');
  var Film = require('modules/page/film.jsx');
  var Tv = require('modules/page/tv.jsx');
  var Vairety = require('modules/page/vairety.jsx');
  var Comic = require('modules/page/comic.jsx');
  var Play = require('modules/page/play.jsx');
  var More = require('modules/page/more.jsx');
  var Home = require('modules/page/home.jsx');
  
  module.exports = React.createElement(
  	Router,
  	null,
  	React.createElement(
  		Route,
  		{ path: '/', component: App },
  		React.createElement(Route, { path: 'film', component: Film }),
  		React.createElement(Route, { path: 'tv', component: Tv }),
  		React.createElement(Route, { path: 'vairety', component: Vairety }),
  		React.createElement(Route, { path: 'comic', component: Comic }),
  		React.createElement(Route, { path: 'play', component: Play }),
  		React.createElement(Route, { path: 'more/:query', component: More }),
  		React.createElement(IndexRoute, { component: Home })
  	)
  );

});

;/*!modules/bootstrap.jsx*/
define('modules/bootstrap.jsx', function(require, exports, module) {

  'use strict';
  
  var routes = require('modules/router/routers.jsx');
  ReactDOM.render(routes, app);

});
