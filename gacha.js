'usestrict'; 
let language = []
let lang1 = 0
let lang2 = 0
let lang3 = 0
let lang4 = 0
let lang5 = 0
let lang6 = 0
let lang7 = 0
const lang = ["Java","Javascript","C言語","PHP","Ruby","Perl","Swift"]
let gaccha = ()=>{
if (language.length != 7){
 var random = Math.floor(Math.random()*12)
 
 if (random <= 6){
  
    document.getElementById('list').innerText = `${lang[random]}を習得した！`
    
    }
else{
    document.getElementById('list').innerText = "何も習得することができなかった..."
    }





if (random == 0 && lang1 == 0){
    language[language.length]="1"
    document.getElementById('star1').innerText = "★"
    lang1 = 1
    
}
else if (random == 1 && lang2 == 0){
    language[language.length]="1"
    document.getElementById('star2').innerText = "★"
    lang2 = 1
    
  
}
else if (random == 2 && lang3 == 0){
    language[language.length]="1"
    document.getElementById('star3').innerText = "★"
    lang3 = 1
    
    
}
else if (random == 3 && lang4 == 0){
    language[language.length]="1"
    document.getElementById('star4').innerText = "★"
    lang4 = 1
    
}
else if (random == 4 && lang5 == 0){
    language[language.length]="1"
    document.getElementById('star5').innerText = "★"
    lang5 = 1
    
}
else if (random == 5 && lang6 == 0){
    language[language.length]="1"
    document.getElementById('star6').innerText = "★"
    lang6 = 1
    
    
}
else if (random == 6 && lang7 == 0){
    language[language.length]="1"
    document.getElementById('star7').innerText = "★"
    lang7 = 1
    
    
}



}
else{
    document.getElementById('list').innerText = "おめでとう全習得！！"
}
}

let elementv= document.getElementById('gacha')
elementv.addEventListener('click',gaccha)
$('.button').on('click',() => {
    $('.gachamoniter').toggleClass('show')
 });



 /*const count = ()=>{
  foreach(aa == language.length)
 }*/
