'usestrict';
const lang = ["Java","Javascript","C言語","PHP","Ruby","Perl","Swift"]
let gaccha = ()=>{
 var random = Math.floor(Math.random()*12)
 if (random <= 6){
  
    document.getElementById('list').innerText = `${lang[random]}を習得した！`
    
    }
else{
    document.getElementById('list').innerText = "何も習得することができなかった..."
    }




if (random == 0){
    
    document.getElementById('star1').innerText = "★"

}
else if (random == 1){
    document.getElementById('star2').innerText = "★"
}
else if (random == 2){
    document.getElementById('star3').innerText = "★"
}
else if (random == 3){
    document.getElementById('star4').innerText = "★"
}
else if (random == 4){
    document.getElementById('star5').innerText = "★"
}
else if (random == 5){
    document.getElementById('star6').innerText = "★"
}
else if (random == 6){
    document.getElementById('star7').innerText = "★"
}

const cllik = document.getElementById('button')
};
let elementv= document.getElementById('gacha')
elementv.addEventListener('click',gaccha)
$('.button').on('click',() => {
    $('.gachamoniter').toggleClass('show')
 });