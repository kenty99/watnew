var readline = require("readline-sync");
var a = 0;

console.log("テメェは初心者です");

for(var i = 0; i <= 30; i++){
    var gengo = readline. question("使用言語を書け:");
    
    if(gengo !== ""){
        ++a;
        if(a == 10){
            console.log("中級者です");
        }else if(a == 20){
            console.log("上級者ですわ");
        }else if(a == 30){
            console.log("ここまでするとか草wwwwww");
        }
    }
}





