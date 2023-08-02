var btnEncripter = document.querySelector('.btn-encrypt');
var btnDecripter = document.querySelector('.btn-decrypt');
var girl = document.querySelector('.girl-container');
var paragrafo = document.querySelector('.paragraph-container');
var result = document.querySelector('.result-text');

btnEncripter.onclick = encriptar;
btnDecripter.onclick = desencriptar;

function encriptar(){
    ocultar();
    var texto = recuperar();
    result.textContent = encriptarTexto(texto);
}

function desencriptar(){
    ocultar();
    var texto = recuperar();
    result.textContent = desencriptarTexto(texto);
}

function recuperar(){
    var texto = document.querySelector(".text1")
    return texto.value;
}

function ocultar(){
    girl.classList.add("ocultar");
    paragrafo.classList.add("ocultar")
}

function encriptarTexto(mensagem){
    var texto = mensagem;
    var textoEncripitado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoEncripitado = textoEncripitado + "ai"
        }
        else if(texto[i] == "e"){
            textoEncripitado = textoEncripitado + "enter"
        }
        else if(texto[i] == "i"){
            textoEncripitado = textoEncripitado + "imes"
        }
        else if(texto[i] == "o"){
            textoEncripitado = textoEncripitado + "ober"
        }
        else if(texto[i] == "u"){
            textoEncripitado = textoEncripitado + "ufat"
        }
        else{
            textoEncripitado = textoEncripitado + texto[i]
        }
    }
    return textoEncripitado;

}

function desencriptarTexto(mensagem){
    var texto = mensagem;
    var textoDesencriptado = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoDesencriptado = textoDesencriptado + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoDesencriptado = textoDesencriptado + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoDesencriptado = textoDesencriptado + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoDesencriptado = textoDesencriptado + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoDesencriptado = textoDesencriptado + "u"
            i = i+3;
        }
        else{
            textoDesencriptado = textoDesencriptado + texto[i];
        }
        
    }

    return textoDesencriptado;

}

const btnCopiar = document.querySelector(".btn-copy"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var selected = document.querySelector(".result-text").textContent;
    navigator.clipboard.writeText(selected);
    console.log("copiado"); 
});