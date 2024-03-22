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
    // if (v1>= v2 && v1>=v3 && v1>=v4 && v1>=v5) {
    //     winMessage.innerHTML="v1 wins"
    // }
    // else if ( v2>=v3 && v2>=v4 && v2>=v5) {
    //     winMessage.innerHTML="v2 wins"
    // }
    // else if (v3>=v4 && v3>=v5) {
    //     winMessage.innerHTML="v3 wins"
    // }
    // else if ( v4>=v5) {
    //     winMessage.innerHTML="v4 wins"
    // }
    // else{
    //     winMessage.innerHTML="v5 wins"
    // }
    let maxVal = Math.max(v1, v2, v3, v4, v5);
    let winners = [];

    if (v1 === maxVal) {
        winners.push("v1");
    }
    if (v2 === maxVal) {
        winners.push("v2");
    }
    if (v3 === maxVal) {
        winners.push("v3");
    }
    if (v4 === maxVal) {
        winners.push("v4");
    }
    if (v5 === maxVal) {
        winners.push("v5");
    }

    winMessage.innerHTML = "Winner(s): " + winners.join(", ");

}