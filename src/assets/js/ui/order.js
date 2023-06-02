import { load_toast, qs, xml } from "../libs";

export function order(){
	if(!qs('.order-page')) return
	if(!qs('form')) {console.log("Должна быть форма"); return}

	qs("form").addEventListener("submit", event => {
		event.preventDefault()

		let obj = {
			name: qs('[name="name"]').value,
			email: qs('[name="email"]').value,
			phone: qs('[name="phone"]').value
		}
		qs('[name="dsc"]').value && ( obj.dsc = qs('[name="dsc"]').value )

		xml("order-receive", obj, "/api")
		 .then(r => JSON.parse(r))
		 .then(r => {
			load_toast().then(_ =>{
				if(r.success){
					new Snackbar("Форма успешно отправлена")
					
					qs('[name="name"]').value = ""
					qs('[name="email"]').value = ""
					qs('[name="phone"]').value = ""
					qs('[name="dsc"]').value = ""
					
				} else { new Snackbar("Произошла ошибка")}
			})
			
		 })

	})
	
}