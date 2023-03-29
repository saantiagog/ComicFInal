


//escena1
var molino = document.querySelector(".molino");
var arrow1 = document.querySelector(".arrow1");
var arrow2 = document.querySelector(".arrow2");
var gif = document.querySelector(".gifensayo");

molino.addEventListener("click", mover);

function mover(){
	arrow1.style.display = "none";
	molino.classList.add("animacion_molino");
	gif.style.display="flex";
	setTimeout(() => {
		 	arrow2.style.display = "flex";
		 },10000);
}



//escena2

 var on = document.querySelector(".on");
 var off = document.querySelector(".off");
 var luces = document.querySelector(".lucesLab");
 var ventana = document.querySelector(".noche");
 var arrow3 = document.querySelector(".arrow3");
 var cel = document.querySelector(".cel");
 


 on.addEventListener("click", encender);
 off.addEventListener("click", apagar);
 
 
 function encender (){
	luces.style.display = "flex";
	ventana.style.display = "flex";
	arrow3.style.display = "none";
 }
 function apagar (){
	luces.style.display = "none";
	ventana.style.display = "none";
 }
 
var gifrepetir2 = document.querySelector(".gifescena2", "gifsegundaparte");
var gifescena2 = document.querySelector(".gifescena2");
var Ian = document.querySelector(".Ian");
var cel = document.querySelector(".cel");
var arrow4 = document.querySelector(".arrow4");
var arrownext = document.querySelector(".arrownext");
var gifsegundaparte = document.querySelector(".gifsegundaparte");

Ian.addEventListener("click", reproducir);
cel.addEventListener("click", llamar);
gifrepetir2.addEventListener("dblclick", repetirgif2);

function reproducir (){
	gifescena2.style.display = "flex";
	Ian.style.display = "none";
	arrow4.style.display = "none";
	setTimeout(() => {
		cel.style.display = "flex";
	},11000);
 }
 function llamar (){
	gifsegundaparte.style.display = "flex";
	gifescena2.style.display = "none";
	cel.style.display = "none";
	setTimeout(() => {
		arrownext.style.display = "flex";
	},9000);
}
function repetirgif2(){
	gifrepetir2.src = gifrepetir2.src;
}
 //  escena3
	var gifrepetir = document.querySelector(".bar");
	var arrow31 = document.querySelector(".arrow31");
	var arrow32 = document.querySelector(".arrow32");
	var barfondo = document.querySelector(".barfondo");
	var gifbar = document.querySelector(".bar");

	barfondo.addEventListener("click", gifbarmov);
	gifrepetir.addEventListener("dblclick", repetirgif);

	function gifbarmov (){
		arrow31.style.display = "none";
		barfondo.style.display = "none";
		gifbar.style.display = "flex";
		setTimeout(() => {
			arrow32.style.display = "flex";
		},15000);
	}
	function repetirgif(){
		gifrepetir.src = gifrepetir.src;
	}

//  escena4
var on5 = document.querySelector(".on5");
 var off5 = document.querySelector(".off5");
 var luces5 = document.querySelector(".LuzGranja");
 var gifgranja = document.querySelector(".labGranja");
 var oveja = document.querySelector(".oveja");
 var arrow5 = document.querySelector(".arrow5");
 var arrow4next = document.querySelector(".arrow4next");
 var arrow52 = document.querySelector(".arrow52");

 on5.addEventListener("click", encender5);
 off5.addEventListener("click", apagar5);
 oveja.addEventListener("click", cambiogif);
 
 function cambiogif (){
	oveja.style.display = "none";
	arrow52.style.display = "none";
	gifgranja.style.display = "flex";
	setTimeout(() => {
		arrow4next.style.display = "flex";
	},13000);
 }
 function encender5 (){
	luces5.style.display = "flex";
	arrow5.style.display = "none";
 }
 function apagar5 (){
	luces5.style.display = "none";
	
 }
 
 //  escena5

 var gifnoche1 = document.querySelector(".granjanoche1");
 var gifnoche2 = document.querySelector(".granjanoche2");
 var fondonoche = document.querySelector(".fondonoche");
 var arrow53 = document.querySelector(".arrow53");
 var arrow51 = document.querySelector(".arrow51");
 var arrow54 = document.querySelector(".arrow54");
 var arrow55 = document.querySelector(".arrow55");
 var carro1 = document.querySelector(".carro1");
 var carro2 = document.querySelector(".carro2");

fondonoche.addEventListener("click", salirgranja);
carro1.addEventListener("click", animacioncarro);
carro2.addEventListener("click", animacioncarro);
gifnoche1.addEventListener("click", gif2);

function salirgranja (){
	gifnoche1.style.display = "flex";
	arrow51.style.display = "none";
	setTimeout(() => {
		arrow53.style.display = "flex";
	},5000);
}
function animacioncarro(){
	carro1.classList.add("carrosmover");
	carro2.classList.add("carrosmover");
	arrow53.style.display = "none";
	setTimeout(() => {
		arrow55.style.display = "flex"
	},3000);
	setTimeout(() => {
		carro1.style.display = "none";
		carro2.style.display = "none";
	},3000);
}
function gif2 (){
	gifnoche2.style.display = "flex";
	gifnoche1.style.display = "none";
	arrow55.style.display = "none"
	setTimeout(() => {
		arrow54.style.display = "flex";
	},8000);
}

//Escena6

 var incendiofondo = document.querySelector(".incendiofondo");
 var incendiodia = document.querySelector(".incendiodia");
 var arrow61 = document.querySelector(".arrow61");
 var arrow62 = document.querySelector(".arrow62");

incendiofondo.addEventListener("click", incendiogif);

function incendiogif (){
	arrow61.style.display = "none";
	incendiofondo.style.display = "none";
	incendiodia.style.display = "flex";
	setTimeout(() => {
		arrow62.style.display = "flex";
	},15000);
}

//Escena7
var on7 = document.querySelector(".on7");
 var off7 = document.querySelector(".off7");
var lucesescena7 = document.querySelector(".lucesescena7");
var gifescena7 = document.querySelector(".gifescena7");
var ovejaescena7 = document.querySelector(".ovejaescena7");
var fondoescena7 = document.querySelector(".fondoescena7");
var arrow71 = document.querySelector(".arrow71");
var arrow72 = document.querySelector(".arrow72");
var arrow73 = document.querySelector(".arrow73");

ovejaescena7.addEventListener("click", intentosgif);
on7.addEventListener("click", encender7);
off7.addEventListener("click", apagar7);

function intentosgif (){
   arrow71.style.display = "none";
   ovejaescena7.style.display = "none";
   gifescena7.style.display = "flex";
   setTimeout(() => {
	   arrow72.style.display = "flex";
   },15000);
}
function encender7 (){
	lucesescena7.style.display = "flex";
	arrow73.style.display = "none";
 }
 function apagar7 (){
	lucesescena7.style.display = "none";
	
 }
//escena8

 var prado = document.querySelector(".prado");
 var gifprado = document.querySelector(".gifprado");
 var arrow81 = document.querySelector(".arrow81");
 var arrow82 = document.querySelector(".arrow82");

prado.addEventListener("click", gifpradomov);

 function gifpradomov (){
	arrow81.style.display = "none";
	prado.style.display = "none";
	gifprado.style.display = "flex";
	setTimeout(() => {
		arrow82.style.display = "flex";
	},11000);
}


 //escena9

 var ciudad = document.querySelector(".ciudadfondo");
 var ciudadgif = document.querySelector(".ciudadgif");
 var arrow91 = document.querySelector(".arrow91");
 var arrow92 = document.querySelector(".arrow92");

 ciudad.addEventListener("click", gifciudadmov);

 function gifciudadmov (){
	ciudad.style.display = "none";
	arrow91.style.display = "none";
	ciudadgif.style.display = "flex";
	setTimeout(() => {
		arrow92.style.display = "flex";
	},15000);
 }