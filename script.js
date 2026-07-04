//===========================================
// CONTADOR ANIMADO
//===========================================

let numero = document.getElementById("numero");

if(numero){

    let contador = 0;

    let intervalo = setInterval(function(){

        contador += 25;

        numero.innerHTML = contador;

        if(contador >= 5000){

            clearInterval(intervalo);

            numero.innerHTML = "5000+";

        }

    },20);

}

//===========================================
// EFECTO DE APARICIÓN AL HACER SCROLL
//===========================================

const elementos = document.querySelectorAll("section");

window.addEventListener("scroll",function(){

    elementos.forEach(function(elemento){

        let posicion = elemento.getBoundingClientRect().top;

        let pantalla = window.innerHeight;

        if(posicion < pantalla - 100){

            elemento.style.opacity="1";
            elemento.style.transform="translateY(0)";
            elemento.style.transition="1s";

        }

    });

});

//===========================================
// MENSAJE DE BIENVENIDA
//===========================================

window.onload=function(){

    console.log("Bienvenido al proyecto de mascotas.");

}

//===========================================
// EFECTO SOBRE LAS TARJETAS
//===========================================

const tarjetas=document.querySelectorAll(".card");

tarjetas.forEach(function(card){

    card.addEventListener("mouseenter",function(){

        card.style.transform="scale(1.03)";

    });

    card.addEventListener("mouseleave",function(){

        card.style.transform="scale(1)";

    });

});

//===========================================
// CAMBIO DE COLOR DEL HEADER
//===========================================

window.addEventListener("scroll",function(){

    const header=document.querySelector("header");

    if(window.scrollY>100){

        header.style.transition=".5s";
        header.style.filter="brightness(.9)";

    }else{

        header.style.filter="brightness(1)";

    }

});