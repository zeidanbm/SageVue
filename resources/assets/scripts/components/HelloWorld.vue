<template>
	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-8">
				<div class="card">
					<div class="card-header">Example Component test2</div>
					<div class="card-body">
						I'm an example component.
					</div>
					<h1>{{ msg }}</h1>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export default Vue.extend({
	name: 'HelloWorld',
	props: {
		msg: {
			type: String,
			default: ''
		},
		objProp: {
			type: Object,
			default: Object as PropType<{ foo: string; bar: number }>
		}
	}
	// methods: {
	// 	method1(): void {
	// 		console.log('test')
	// 	}
	// }
})
</script>
