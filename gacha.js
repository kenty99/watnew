'usestrict'; 
$(window).on('load',function(){
    $("#splash-logo").delay(3000).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述
  
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる
    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
        $('body').addClass('appear');//フェードアウト後bodyにappearクラス付与
  
    });
    //=====ここまで背景が伸びた後に動かしたいJSをまとめる
        
});
let language = []
let lang1 = 0
let lang2 = 0
let lang3 = 0
let lang4 = 0
let lang5 = 0
let lang6 = 0
let lang7 = 0
let lang8 = 0
let lang9 = 0
let lang10 = 0
let lang11 = 0
let lang12 = 0
let lang13 = 0
let lang14 = 0
let lang15 = 0
let lang16 = 0
let lang17 = 0
let lang18 = 0
let lang19 = 0
let lang20 = 0

let n = 0


const lang = ["Java","C言語","JavaScript","PHP","Ruby","Perl","Swift","C++","C#","SQL","VBA","Scala","Lua","COBOl","Object-C","Kotolin","R","TypeScript","Go","Flutter"]
let gaccha = ()=>{

if (language.length != 20){
 var random = Math.floor(Math.random()*40)
 
 if (random <= 19){
  
    document.getElementById('list').innerText = `${lang[random]}を習得した！`
    
    }
else{
    document.getElementById('list').innerText = "習得できず..."
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
else if (random == 7 && lang8 == 0){
    language[language.length]="1"
    document.getElementById('star8').innerText = "★"
    lang8 = 1
    
  
}
else if (random == 8 && lang9 == 0){
    language[language.length]="1"
    document.getElementById('star9').innerText = "★"
    lang9 = 1
    
    
}
else if (random == 9 && lang10 == 0){
    language[language.length]="1"
    document.getElementById('star10').innerText = "★"
    lang10 = 1
    
}
else if (random == 10 && lang11 == 0){
    language[language.length]="1"
    document.getElementById('star11').innerText = "★"
    lang11 = 1
    
}
else if (random == 11 && lang12 == 0){
    language[language.length]="1"
    document.getElementById('star12').innerText = "★"
    lang12 = 1
    
    
}
else if (random == 12 && lang13 == 0){
    language[language.length]="1"
    document.getElementById('star13').innerText = "★"
    lang13 = 1
    
    
}
else if (random == 13 && lang14 == 0){
    language[language.length]="1"
    document.getElementById('star14').innerText = "★"
    lang14 = 1
    
  
}
else if (random == 14 && lang15 == 0){
    language[language.length]="1"
    document.getElementById('star15').innerText = "★"
    lang15 = 1
    
    
}
else if (random == 15 && lang16 == 0){
    language[language.length]="1"
    document.getElementById('star16').innerText = "★"
    lang16 = 1
    
}
else if (random == 16 && lang17 == 0){
    language[language.length]="1"
    document.getElementById('star17').innerText = "★"
    lang17 = 1
    
}
else if (random == 17 && lang18 == 0){
    language[language.length]="1"
    document.getElementById('star18').innerText = "★"
    lang18 = 1
    
    
}
else if (random == 18 && lang19 == 0){
    language[language.length]="1"
    document.getElementById('star19').innerText = "★"
    lang19 = 1
    
    
}
else if (random == 19 && lang20 == 0){
    language[language.length]="1"
    document.getElementById('star20').innerText = "★"
    lang20 = 1
    
  
}
    if (language.length == 5){
    document.getElementById("images").src = './gachagacha2.png'
}
else if(language.length ==10){
    document.getElementById("images").src ='./lv3.png'
}
else if(language.length == 15){
    document.getElementById("images").src ='./kiz.png'
}
else if (language.length == 20){
    document.getElementById("images").src ='./one.png'
}


}
else{
    document.getElementById('list').innerText = "おめでとう！全部習得できた！"
}

}

let elementv= document.getElementById('gacha')
elementv.addEventListener('click',gaccha)
$('.button').on('click',() => {
    $('.gachamoniter').toggleClass('show')
 });

    

 

 
 let gif2 = document.getElementById('gif5')
 gif2.addEventListener('click',function(){
    document.getElementById('gif').src = './gacah.gif'
    setTimeout(()=>{document.getElementById('gif').src= ''},3300)
    
 })





