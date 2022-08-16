let minutes = 12;
let segundos = 11;

function computeTwoDigitNumber(value) {
    let transf= value.toString();
    if (transf.length===1){transf="0"+transf};
    return transf
}

let retorno=minutes;
let final=computeTwoDigitNumber(retorno);
retorno=segundos;
final=final+":"+computeTwoDigitNumber(retorno);
console.log(final);
