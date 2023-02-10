function Sorteo(){

    let bolas = new Array(7);

    for(let i = 0; i<6; i++){

        let numRandom = Math.floor((Math.random() * 48) + 1)

        if (bolas.includes(numRandom)){
            i--
        }else{
            bolas[i]= numRandom
        }
    };

    bolas.sort((a,b)=> a-b)

    for(let i = 0; i<6; i++){
        elemento = i + 1
        document.getElementById(`${elemento}`).innerHTML = bolas[i]
    }

    let numRandom = Math.floor((Math.random() * 10))
    bolas[6]= numRandom
    document.getElementById(`7`).innerHTML = bolas[6]
    
}

function Participar(){

    let prediccion = new Array(7);

    for(let i = 0; i<6; i++){

        let numRandom = Math.floor((Math.random() * 48) + 1)

        if (prediccion.includes(numRandom)){
            i--
        }else{
            prediccion[i]= numRandom
            
        }
    };

    prediccion.sort((a,b)=> a-b)

    for(let i = 0; i<6; i++){
        elemento = i + 1
        document.getElementById(`prediccion${elemento}`).innerHTML = prediccion[i]
    }

    let numRandom = Math.floor((Math.random() * 10))
    prediccion[6]= numRandom
    document.getElementById("prediccion7").innerHTML = prediccion[6]
    
}