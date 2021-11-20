export function embaralharCartas(arr) {
    var array = virarCartasParaBaixo(arr);
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
}

function virarCartasParaBaixo(arr){
    for(let k = 0; k < arr.length; k++){
        if(arr[k].virada === false){
            arr[k].virada = true
        }
    }
    return arr;
}