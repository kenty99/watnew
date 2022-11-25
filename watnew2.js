var readline = require("readline-sync");
var a = 0;
var b = 0;
var c = 0;
var d = 0;

var kakutiritu = readline. question("0.単発,1.10連,2.100連か選んでください:");

switch(kakutiritu){
  case "0":
    const chara = Math.random();
    if(chara > 0.7){
      if(chara > 0.7 && chara <= 0.8){
        console.log("仮面ライダーW");
      }else if(chara > 0.8 && chara <= 0.9){
        console.log("仮面ライダーOOO");
      }else if(chara > 0.9 && chara < 1.0){
        console.log("仮面ライダーフォーゼ");
      }
    }else if(chara <= 0.7){
      const zako = Math.random();
      if(zako > 0.7 && zako <= 1.0){
        console.log("マスカレイド・ドーパント");
      }else if(zako > 0.4 && zako <= 0.7){
        console.log("ヤミー");
      }else if(zako <= 0.4){
        console.log("ダスタード");
      }
    }
    break;
  case "1":
    for(var i = 0; i < 10; i++){
      const chara = Math.random();
      if(chara > 0.4 && chara <= 0.6){
        a++;
      }else if(chara > 0.6 && chara <= 0.8){
        b++;
      }else if(chara > 0.8 && chara < 1.0){
        c++;
      }else if(chara <= 0.4){
        d++;
      }
    }
    console.log(`結果: 仮面ライダーW:${a} 仮面ライダーOOO:${b} 仮面ライダーフォーゼ:${c} 雑魚:${d}`);
    break;
  case "2":
    for(var i = 0; i < 100; i++){
      const chara = Math.random();
      if(chara > 0.4 && chara <= 0.6){
        a++;
      }else if(chara > 0.6 && chara <= 0.8){
        b++;
      }else if(chara > 0.8 && chara < 1.0){
        c++;
      }else if(chara <= 0.4){
        d++;
      }
    }
    console.log(`結果: 仮面ライダーW:${a} 仮面ライダーOOO:${b} 仮面ライダーフォーゼ:${c} 雑魚:${d}`);
    break;
  default:
    break;
}