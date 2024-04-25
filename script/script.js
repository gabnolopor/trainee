
let textos = document.getElementsByClassName("contenedor__textoGrande");

window.onload = () => {


    for (let i = 0; i < textos.length; i++) {
        textos[i].addEventListener("mouseover", (e)=>{

            let contenedor = document.getElementById("contenedor");
            let texto = e.target;

        
            if (texto.innerText === "Veracruz, Ver.") {
                contenedor.classList.add("fondoVer")
                texto.style.fontSize = "3.3rem" 
                
                
            }else if(texto.innerText === "Puebla, Pue."){
                contenedor.classList.add("fondoPue")
                texto.style.fontSize = "3.3rem" 

                
            }else if(e.target.innerText === "Xalapa, Ver."){
                contenedor.classList.add("fondoXal")
                texto.style.fontSize = "3.3rem" 

            }else if(e.target.innerText === "Coyoacan, CDMX."){
                contenedor.classList.add("fondoCoy")
                texto.style.fontSize = "3.3rem" 

            }else if(e.target.innerText === "San Cristobal de las Casas, Chis."){
                contenedor.classList.add("fondoCris")
                texto.style.fontSize = "3.3rem" 

                //Se hace el mismo procedimiento de añadido de clase al resto de
                //textos en cuestion.

            }else if(e.target.innerText === "Cancun, Q.Roo"){
                texto.style.fontSize = "3.3rem" 

            }else if(e.target.innerText === "Acapulco, Grro."){
                texto.style.fontSize = "3.3rem" 

            }else if(e.target.innerText === "Queretaro, Qro."){
                texto.style.fontSize = "3.3rem" 

            }else if(e.target.innerText === "Oaxaca, Oax."){
                texto.style.fontSize = "3.3rem" 

            }else if(e.target.innerText === "Teziutlan, Pue."){
                texto.style.fontSize = "3.3rem" 

            }

            
            for(let i = 0; i < textos.length; i++){
                if(e.target !== textos[i]){
                    textos[i].style.opacity = '0.5';
                }
            }
            
                                
        });
        textos[i].addEventListener("mouseleave", (e)=>{
            let texto = e.target;

            backgroundColor = " rgba(153, 151, 151, 0.936)"
            contenedor.classList.remove("fondoVer")
            contenedor.classList.remove("fondoPue")
            contenedor.classList.remove("fondoXal")
            contenedor.classList.remove("fondoCoy")
            contenedor.classList.remove("fondoCris")





            texto.style.fontSize = "3rem" 


            for(let i = 0; i < textos.length; i++){
                if(e.target !== textos[i]){
                    textos[i].style.opacity = '1';
                }
            }

        });
    };


};

//preguntar a JAVI - como alterar el background image?
//como alterar el resto de textos??
