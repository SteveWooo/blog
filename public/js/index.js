Vue.component('blog', {
	props: ['title'],
	template: '<h3>{{ title }}</h3>'
})

var vue = new Vue({
	el: '#app',
	data: {
		blogs : [{
			title : "demo"
		}, {
			title : "aah"
		}],
		items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard'
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1'
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2'
        }
      ]
	}
})

console.log(vue)