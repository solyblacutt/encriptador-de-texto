const texto = document.querySelector('.caja-texto') 
const resultado = document.querySelector('.resultado')
const dibujo = document.querySelector('.dibujo')
const mensaje = document.querySelector('.mensaje')
const alerta = document.querySelector('.texto-alerta')


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"



function encriptar (string) {
    let matriz = [['e','enter'],['i','imes'], ['a','ai'], ['o','ober'], ['u','ufat']]
    string = string.toLowerCase()
    for (let i=0; i < matriz.length; i++) {
        if (string.includes(matriz[i][0])) {
            string = string.replaceAll(matriz[i][0], matriz[i][1])
        }
    }
    return string
}

function desencriptar (string) {
    let matriz = [['e','enter'],['i','imes'], ['a','ai'], ['o','ober'], ['u','ufat']]
    string = string.toLowerCase()
    for (let i=0; i < matriz.length; i++) {
        if (string.includes(matriz[i][1])) {
            string = string.replaceAll(matriz[i][1], matriz[i][0])
        }
    }
    return string
}


function btnEncriptar () {
    let tex = texto.value
    let txt = tex.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " )
    
    if(tex == ''){
        alerta.style.background = '#0A3871'
        alerta.style.color = '#FFF'
        alerta.style.fontweight = '800'
        alerta.textContent = 'El campo de texto no debe estar vacio'

    } else if (tex !== txt){
        alerta.style.background = '#0A3871'
        alerta.style.color = '#FFF'
        alerta.style.fontweight = '800'
        alerta.textContent = 'NOTA: No ingresar acentos ni caracteres especiales'

    } else if(tex !== txt.toLowerCase()){
        alerta.style.background = '#0A3871'
        alerta.style.color = '#FFF'
        alerta.style.fontweight = '800'
        alerta.textContent = 'NOTA: El texto debe estar en minusculas'
    } else {
        const textoEncriptado = encriptar(texto.value)
        resultado.value = textoEncriptado
        texto.value = ''
        ocultar()
    }
}

function btnDesencriptar () {
    let tex = texto.value
    let txt = tex.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, " " )
    
    if(tex == ''){
        alerta.style.background = '#0A3871'
        alerta.style.color = '#FFF'
        alerta.style.fontweight = '800'
        alerta.textContent = 'El campo de texto no debe estar vacio'

    } else if (tex !== txt){
        alerta.style.background = '#0A3871'
        alerta.style.color = '#FFF'
        alerta.style.fontweight = '800'
        alerta.textContent = 'NOTA: No ingresar acentos ni caracteres especiales'

    } else if(tex !== txt.toLowerCase()){
        alerta.style.background = '#0A3871'
        alerta.style.color = '#FFF'
        alerta.style.fontweight = '800'
        alerta.textContent = 'NOTA: El texto debe estar en minusculas'
    } else {
        const textoEncriptado = desencriptar(texto.value)
        resultado.value = textoEncriptado
        texto.value = ''
        ocultar()
    }
}


function ocultar () {
    dibujo.classList.add('ocultar')
    mensaje.classList.add('ocultar')
}

function btnCopiar () {
    const texto = resultado.value
    navigator.clipboard.writeText(texto)
    alert('El contenido fue copiado a su portapapeles')
}