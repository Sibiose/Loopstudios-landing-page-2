const menuBtn = document.querySelector(".hamburger-menu");
const header = document.querySelector("header");
const navList = document.querySelector(".nav-list");
const body = document.querySelector("body");

const line1 = document.querySelector(".line1");
const line2 = document.querySelector(".line2");
const line3 = document.querySelector(".line3");
function activeMenu(){
if(navList.classList.contains("menu-active") && header.classList.contains("header-active")){
	header.classList.remove("header-active");
	navList.classList.remove("menu-active");
	body.classList.remove("body-active");
	line1.classList.remove("line1active");
	line2.classList.remove("line2active");
	line3.classList.remove("line3active");
}else{
	header.classList.add("header-active");
	navList.classList.add("menu-active");
	body.classList.add("body-active");
	line1.classList.add("line1active");
	line2.classList.add("line2active");
	line3.classList.add("line3active");
}
}

menuBtn.addEventListener("click", activeMenu);