import {qs} from '../libs';

export let lazy = {
	async load(){
		return new Promise(resolve => {

			if(!qs('[data-src]')) return

			let script = document.createElement("script")
			script.src = "/vendors/lazy/lazysizes.min.js"
			qs(".scripts-area").appendChild(script)
			script.onload = () => {
				let script = document.createElement("script")
				script.src = "/vendors/lazy/ls.unveilhooks.min.js"
				qs(".scripts-area").appendChild(script)
				script.onload = () => resolve(true)
			}
		})
	}
}