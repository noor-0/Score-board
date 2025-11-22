let s1 = document.getElementById("score1");
let s2 = document.getElementById("score2");
function increment(inct, board){
    console.log(s1.textContent);
    if(board == 1){
        let newVal = Number(s1.textContent);
        newVal += Number(inct);
        if(newVal<10) s1.textContent = '0' + newVal;
        else s1.textContent = newVal;
    }
    else{
        let newVal = Number(s2.textContent);
        newVal += Number(inct);
        if(newVal < 10) s2.textContent = '0'+ newVal;
        else s2.textContent = newVal;
    }
}

function reset(){
    s1.textContent = "00";
    s2.textContent = "00";
}