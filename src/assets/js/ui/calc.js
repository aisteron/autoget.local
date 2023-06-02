import {qs} from '../libs'
// https://autogood.by/blog/customs-duty-rates
// https://autogood.by/tools/customs-calculator
// https://aauto.by/news/rastamozhkaavto-v-belarusi-otkuda-takie-tsifry/
// последний устарел для юр.лиц

export function calc(){

	if(!qs('.calc-page')) return

	
	qs('form').addEventListener("submit", event => {
		event.preventDefault();

		let engine_volume = +qs('input[name="volume"]').value
		let car_price = +qs('input[name="car_price"]').value
		let car_year = +qs('input[name="car_year"]').value
		let disc = qs('input[name="discount"]')
		
		let current_year = new Date().getFullYear()
		let period = current_year - car_year

		let final = 0

		if(qs("#fiz").checked){
			period < 3 && (final = fiz_period3(engine_volume, car_price));
			(period >= 3 && period <= 5) && (final = fiz_period35(engine_volume));
			period > 5 && (final = fiz_period5(engine_volume));
		}

		if(qs("#ur").checked){
			period < 3 && (final = ur_period3(engine_volume, car_price));
			(period >= 3 && period <= 5) && (final = ur_period35(engine_volume, car_price));
			period > 5 && (final = ur_period5(engine_volume, car_price));
		}
		

		disc.checked && (final = final / 2)
		alert(final+ " €")

	})

	ur_fiz_discount()
}

function fiz_period3(engine_volume, car_price){

	switch(true){
		
		case car_price <= 8500:
			return car_price * 0.54 < 2.5 * engine_volume
			? 2.5 * engine_volume
			: car_price * 0.54

		case car_price > 8500 && car_price <= 16700:
			if(car_price * 0.48 < 3.5 * engine_volume)
			return 3.5 * engine_volume

		case car_price > 16700 && car_price <= 42300:
			if(car_price * 0.48 < 5.5 * engine_volume)
			return 5.5 * engine_volume

		case car_price > 42300 && car_price <= 84500:
			if(car_price * 0.48 < 7.5 * engine_volume)
			return 7.5 * engine_volume

		case car_price > 84500 && car_price <= 169000:
			if(car_price * 0.48 < 15 * engine_volume)
			return 15 * engine_volume

		case car_price > 169000:
			if(car_price * 0.48 < 20 * engine_volume)
			return 20 * engine_volume

		default:	
			return car_price * 0.48	
	}

	

}
function fiz_period35(engine_volume){
	let mod = 0;
	
	switch(true){

		case engine_volume <= 1000:
			mod = 1.5;
			break;

		case engine_volume > 1000 && engine_volume <= 1500:	
			mod = 1.7;
			break;
		
		case engine_volume > 1500 && engine_volume <= 1800:	
			mod = 2.5;
			break;

		case engine_volume > 1800 && engine_volume <= 2300:	
			mod = 2.7;
			break;
		
		case engine_volume > 2300 && engine_volume <= 3000:	
			mod = 3;
			break;			
		
		case engine_volume > 3000:	
			mod = 3.6;
			break;			

	}

	return mod * engine_volume
}
function fiz_period5(engine_volume){
	let mod = 0;
	
	switch(true){

		case engine_volume <= 1000:
			mod = 3;
			break;

		case engine_volume > 1000 && engine_volume <= 1500:	
			mod = 3.2;
			break;
		
		case engine_volume > 1500 && engine_volume <= 1800:	
			mod = 3.5;
			break;

		case engine_volume > 1800 && engine_volume <= 2300:	
			mod = 4.8;
			break;
		
		case engine_volume > 2300 && engine_volume <= 3000:	
			mod = 5;
			break;			
		
		case engine_volume > 3000:	
			mod = 5.7;
			break;			

	}

	return mod * engine_volume
}

function ur_period3(ev, price){

	switch(true){
		case ev <= 1000:
			return price * 0.23 < 1.2 * ev
			? 1.2 * ev
			: price * 0.23
		
		case ev > 1000 && ev <= 1500:
			if(price * 0.23 < 1.45 * ev)
			return 1.45 * ev
		
		case ev > 1500 && ev <= 1800:
			if(price * 0.23 < 1.5 * ev)
			return 1.5 * ev
		
		case ev > 1800 && ev <= 2300:
			if(price * 0.23 < 2.15 * ev)
			return 2.15 * ev
		
		case ev > 2300 && ev <= 3000:
			if(price * 0.23 < 2.15 * ev)
			return 2.15 * ev
		
		case ev > 3000:
			if(price * 0.23 < 2.8 * ev)
			return 2.8 * ev

		default:
			return price * 0.23
	}
}

function ur_period35(ev, price){
	
	switch(true){
		case ev <= 1000:
			return price * 0.35 < 1.2 * ev
			? 1.2 * ev
			: price * 0.35
		
		case ev > 1000 && ev <= 1500:
			if(price * 0.35 < 1.45 * ev)
			return 1.45 * ev
		
		case ev > 1500 && ev <= 1800:
			if(price * 0.35 < 1.5 * ev)
			return 1.5 * ev
		
		case ev > 1800 && ev <= 2300:
			if(price * 0.35 < 2.15 * ev)
			return 2.15 * ev
		
		case ev > 2300 && ev <= 3000:
			if(price * 0.35 < 2.15 * ev)
			return 2.15 * ev
		
		case ev > 3000:
			if(price * 0.35 < 2.8 * ev)
			return 2.8 * ev

		default:
			return price * 0.35
	}
}

function ur_period5(ev){
	let mod = 0;
	
	switch(true){

		case ev <= 1000:
			mod = 2.5;
			break;

		case ev > 1000 && ev <= 1500:	
			mod = 2.7;
			break;
		
		case ev > 1500 && ev <= 1800:	
			mod = 2.9;
			break;

		case ev > 1800 && ev <= 2300:	
			mod = 4;
			break;
		
		case ev > 2300 && ev <= 3000:	
			mod = 4;
			break;			
		
		case ev > 3000:	
			mod = 5.8;
			break;			

	}

	return mod * ev
}

function ur_fiz_discount(){
	[qs("#fiz"),qs("#ur")].forEach(el => {
		el.addEventListener("change", e => {
				

				switch(e.target.id){
					case "ur":
						qs('.disc input').checked = false
						qs('.disc').style.visibility = "hidden"
						break;
					case "fiz":
						qs('.disc').style.visibility = "visible"	
				}
		})
	})
	
}