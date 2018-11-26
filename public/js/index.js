import Vue from 'vue';
// Vue.component('blog', {
// 	props: ['title'],
// 	template: '<h3>{{ title }}</h3>'
// })
console.log(123)
new Vue({
	el: '#app',
	data: {
		blogs : [
			{title : "test"}
		],
		test : "test"
	}
})