import {qs} from '../libs';

export function mobile_menu(){
	if(!qs('#nav-icon1')) {console.log('Не могу найти иконку меню'); return}
	qs('#nav-icon1').addEventListener("click", event => {
		event.target.classList.toggle("open")
		qs("header ul").classList.toggle("open")
	})
}