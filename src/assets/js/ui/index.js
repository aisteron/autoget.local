import { lazy } from "./lazy";
import { sw } from "./swiper";
import { mobile_menu } from "./mob.menu";

export async function Ui(){
	lazy.load()
	await sw.load()
	sw.init()
	mobile_menu()
}