Vue.component('blog', {
	props : {
		global : {}
	},
	methods : {
		init : function(){
			console.log("init blog")
		}
	},
	mounted : function(){
		this.init();
	},
	render : function(C){
		return C("blog-content", {
			attrs : {
				global : this.global
			}
		})
	}
})