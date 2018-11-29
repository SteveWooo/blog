var vue = new Vue({
	el : "#app",
	data : {
		router : "",
		global : {
			blog : {
				title : "haha",
				content : "haha",
				create_time : new Date()
			},
			config : {
				number : 1
			}
		}
	},
	methods : {
		init : function(){
			var that = this;
			this.router = location.hash.substring(1);
			window.onhashchange = function(){
				that.router = location.hash.substring(1);
			}
		}
	},
	mounted : function(){
		this.init();
	}
})