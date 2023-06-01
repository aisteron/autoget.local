import {loadCSS, onloadCSS, qs} from '../libs';

export const sw = {
	async load(){
		if(!qs('.services-page')) return
		
		return new Promise(resolve =>{
			if(qs(['swiper'])){resolve(true); return}
			
			let script = document.createElement("script")
			script.src="/vendors/swiper/swiper-bundle.min.js"
			script.setAttribute("swiper","")
			qs(".scripts-area").appendChild(script)
			
			script.onload = () => {
				
				let style = loadCSS("/vendors/swiper/swiper-bundle.min.css")
				onloadCSS(style, () => {
					console.log('swiper loaded')
					resolve(true)
				})
			}
		})
	},
	init(){
		if(!qs('.services-page')) return
		new Swiper(".swiper", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
			pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    });
	}
}