Vue.component('blog-content', {
	props: {
		global : {}
	},
	data : function(){
		return {
			blog : this.global.blog
		}
	},
	mounted : function(){
		console.log(vue.global.blog.title = "test")	
	},
	template: 
`<v-container grid-list-md text-xs-center>
	<v-layout row wrap>
		<v-flex xs12>
			<v-card dark color="primary">
				<v-card-text class="px-0">{{blog.title}}</v-card-text>
			</v-card>
		</v-flex>
		<v-flex xs12>
			<v-card black color="primary">
				<v-card-text class="px-0">{{blog.content}}</v-card-text>
			</v-card>
		</v-flex>
	</v-layout>
</v-container>`
})