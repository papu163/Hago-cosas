let iniciado=false
let detenido=true
let frame=1
let intervalo
let imgPre=false


function reproducirAudio() {
    const audio = new Audio("click.mp3")
    audio.play()
}


function iniciarCDN() {
    let ubicacion="frames/" + frame + ".png"
    document.getElementById("contenedor").style.backgroundImage = `url(${ubicacion})`
    frame++;
    }
function reproducir() {
    if (iniciado===false) {
        iniciado=true
        intervalo=setInterval(iniciarCDN, 46.67)
    }
    else if (iniciado===true) {
        console.log("No se puede reproducir por que ya se esta reproduciendo")
    }
}
function detener() {
    clearInterval(intervalo)
    iniciado=false
    detenido=true
}
