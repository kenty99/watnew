var textList = [
  'Hello World',
  'Good',
  'I love JavaScript',
  'This is MyApp',
  'Welcome'
];
 
const typeDisplay = document.getElementById("typedisplay");
const typeInput = document.getElementById("type-input");
const timer = document.getElementById("timer");


/*生誤判定*/
typeInput.addEventListener("input", () => {
    const sentenceArray = typeDisplay.querySelectorAll("span");
    // console.log(sentenceArray);
    const arrayValue = typeInput.value.split("");
    // console.log(arrayValue);
    let correct = true;
    sentenceArray.forEach((characterSpan, index) => {
        if((arrayValue[index] == null)){
            characterSpan.classList.remove("correct");
            characterSpan.classList.remove("incorrect");
            correct = false;
        }
        else if(characterSpan.innerText == arrayValue[index]){
            characterSpan.classList.add("correct");
            characterSpan.classList.remove("incorrect");
        }else{
            characterSpan.classList.add("incorrect");
            characterSpan.classList.remove("correct");
            correct = false;
        }
    });

    if(correct == true){
        RenderNextSentence();
    }
}); 

function RenderNextSentence(){
    const sentence = textList[Math.floor(Math.random()*textList.length)];
    typeDisplay.innerText = "";

    let onetext = sentence.split("");
    // console.log(onetext);
    onetext.forEach((character) => {
        const characterSpan = document.createElement("span");
        characterSpan.innerText = character;
        // console.log(characterSpan);
        typeDisplay.appendChild(characterSpan);
        // characterSpan.classList.add("correct");
    });

    /* */
    typeInput.value = "";

    StartTimer();
}

let startTime;
let origineTime = 10;
function StartTimer(){
    timer.innerText = origineTime;
    startTime = new Date();
    setInterval(() => {
        timer.innerText = origineTime - getTimerTime();
        if(timer.innerText <= 0) TimeUp();
    }, 1000);
}

function getTimerTime(){
    return Math.floor( (new Date() - startTime) / 1000);
}

function TimeUp(){
    RenderNextSentence();
}

RenderNextSentence();