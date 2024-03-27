let players=document.querySelectorAll("input");
const f1= (id) =>{
    let val = Math.ceil(Math.random()*6)
    document.getElementById(id).innerHTML=val
}

const f2=() =>{
    let v1= parseInt(document.getElementById('p1').innerHTML);
    let v2=parseInt(document.getElementById('p2').innerHTML);
    let v3=parseInt(document.getElementById('p3').innerHTML);
    let v4=parseInt(document.getElementById('p4').innerHTML);
    let v5=parseInt(document.getElementById('p5').innerHTML);
    let maxVal = Math.max(v1, v2, v3, v4, v5);
    let winners = [];

    if (v1 === maxVal) {
        winners.push("players.value");
    }
    if (v2 === maxVal) {
        winners.push("players.value");
    }
    if (v3 === maxVal) {
        winners.push("players.value");
    }
    if (v4 === maxVal) {
        winners.push("players.value");
    }
    if (v5 === maxVal) {
        winners.push("players.value");
    }

    winMessage.innerHTML = "Winner(s): " + winners;

}