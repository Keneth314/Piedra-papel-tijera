function play(humanOption) { // Seleccionar resultado, imagen del humano e imagen la máquina
    const result = document.querySelector(".result-text");
    const humanImage = document.querySelector(".human-image");
    const machineImage = document.querySelector(".machine-image");
    const humanScore = document.querySelector(".human-score");
    const machineScore = document.querySelector(".machine-score");
    var contHumanScore = parseInt(humanScore.innerHTML);
    var contMachineScore = parseInt(machineScore.innerHTML);

    

    // Crear la opcion random de la máquina
    const options = ["piedra", "papel", "tijera"];
    var random = Math.floor(Math.random() * options.length);
    const machineOption = options[random];

    // Cambiar las imagen del humano y la máquina según su opción
    humanImage.src = `img/${humanOption}.png`;
    machineImage.src = `img/${machineOption}.png`;
    machineImage.classList.add('reflex');

    // Debuggeo
    // console.log(machineOption);

    if (humanOption == machineOption) {
        result.innerHTML = "Empate 😉"; 
    } else if(
        humanOption == "piedra" && machineOption == "tijera" || 
        humanOption == "tijera" && machineOption == "papel" || 
        humanOption == "papel" && machineOption == "piedra"
        ){
        result.innerHTML = "Ganaste 😃"; contHumanScore++;
    } else{
        result.innerHTML = "Perdiste 😢"; contMachineScore++;
    }

    humanScore.innerHTML = `${contHumanScore}`;
    machineScore.innerHTML = `${contMachineScore}`;


}


function reset(){
    document.querySelector(".human-score").innerHTML = 0;
    document.querySelector(".machine-score").innerHTML = 0;
    document.querySelector(".human-image").src = "img/pregunta.svg";
    document.querySelector(".machine-image").src = "img/pregunta.svg";
    document.querySelector('.machine-image').classList.remove('reflex');
    document.querySelector(".result-text").innerHTML = "Resultado 🎮";
}


function jugar(j1) {

    j2 = opciones[random];

    switch (true) {
        case (j1 == j2):
            console.log("Empate 😉");
            break;
        case (j1 == "piedra" && j2 == "tijera"):
            console.log("Ganaste 😃");
            break;
        case (j1 == "tijera" && j2 == "papel"):
            console.log("Ganaste 😃");
            break;
        case (j1 == "papel" && j2 == "piedra"):
            console.log("Ganaste 😃");
            break;
        default:
            console.log("Perdiste 😢");
            break;
    }
}
