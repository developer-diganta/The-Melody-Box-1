
for(var i=0;i<document.querySelectorAll(".pia").length;i++){
  document.querySelectorAll(".pia")[i].addEventListener("click", function handleClick(){
    var button=this.innerHTML;
    makeSound(button);
   buttonAnimation(button);

    }
  );
}
document.addEventListener("keydown",function(event){
  makeSound(event.key);
  buttonAnimation(event.key);
})

let microphone = document.getElementById("microphone");
microphone.onclick=function(){
  microphone.innerHTML="<i class='fas fa-microphone'></i>";
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.interimResults=true;
    recognition.onresult = function(event){
      console.log("ppppp");
         input = event.results[0][0].transcript;
        console.log(input);
        console.log(input.length);
        microphone.innerHTML='<i class="fas fa-microphone-slash"></i>';

      for(let i=0;i<input.length;i++){
          console.log(i);
        var jk=input[i];console.log(jk);
        switch(jk){
          case "a":
            var sound=new Audio("C4.mp3");
            diff(sound,i,"a");
          break;
          case "A":

            var sound=new Audio("C4.mp3");
            diff(sound,i,"a");
          break;
          case "2":
            var sound1=new Audio("Db4.mp3");
            diff(sound1,i,"2");
          break;

          case "w":
            var sound2=new Audio("D4.mp3");
            diff(sound2,i,"w");

          break;
          case "W":
            var sound2=new Audio("D4.mp3");
            diff(sound2,i,"W");

          break;


          case "3":
            var sound3=new Audio("Eb4.mp3");
            diff(sound3,i,"3");
          break;


          case "E":
            var sound4=new Audio("E4.mp3");
            diff(sound4,i,"E");

          break;
          case "e":
            var sound4=new Audio("E4.mp3");
            diff(sound4,i,"e");

          break;


          case "R":
            var sound5=new Audio("F4.mp3");
            diff(sound5,i,"R");

          break;
          case "r":
            var sound5=new Audio("F4.mp3");
            diff(sound5,i,"r");

          break;//DONE
          //DONE TILL HERE


          case "5":
            var sound=new Audio("G4.mp3");
            diff(sound,i,"5");

          break;

          case "t":
            var sound=new Audio("C4.mp3");
            diff(sound,i,"t");

          break;
          case "T":
            var sound=new Audio("C4.mp3");
            diff(sound,i,"T");

          break;

          case "6":
            var sound=new Audio("Ab4.mp3");
            diff(sound,i,"6");

          break;

          case "y":
            var sound=new Audio("A4.mp3");
            diff(sound,i,"y");

          break;
          case "Y":
            var sound=new Audio("A4.mp3");
            diff(sound,i,"Y");

          break;

          case "7":
            var sound=new Audio("Bb4.mp3");
            diff(sound,i,"7");

          break;

          case "U":
            var sound=new Audio("B4.mp3");
            diff(sound,i,"U");

          break;
          case "u":
            var sound=new Audio("B4.mp3");
            diff(sound,i,"u");

          break;

          case "i":
            var sound=new Audio("C5.mp3");
            diff(sound,i,"i");

          break;
          case "I":
            var sound=new Audio("C5.mp3");
            diff(sound,i,"I");

          break;

          case "9":
            var sound=new Audio("Db5.mp3");
            diff(sound,i,"9");

          break;

          case "o":
            var sound=new Audio("D5.mp3");
            diff(sound,i,"o");

          break;
          case "O":
            var sound=new Audio("D5.mp3");
            diff(sound,i,"O");

          break;

          case "0":
            var sound=new Audio("Eb5.mp3");
            diff(sound,i,"0");

          break;

          case "p":
            var sound=new Audio("C5.mp3");
            diff(sound,i,"p");

          break;
          case "P":
            var sound=new Audio("E5.mp3");
            diff(sound,i,"P");

          break;

        };
      };

      // },5000);
      //   setInterval(makeSSound(jk),2000);
      //   i++;
      //   // setTimeout(function(){
      //   //   console.log(wait);
      //   // },10000);
      //
      // }




}
}

// function makeSSound(jk){
//
// }
//
function diff(sd,i,key){
  setTimeout(function(){sd.play();buttonAnimation(key)},i*1000);
}


function makeSound(button){

  switch(button){
    case "a":
      var tom1=new Audio("C4.mp3");
      tom1.play();
    break;
    case "A":

      var sound=new Audio("C4.mp3");
      sound.play();
    break;
    case "2":
      var sound1=new Audio("Db4.mp3");
      sound1.play();
    break;

    case "w":
      var sound2=new Audio("D4.mp3");
      sound2.play();
    break;
    case "W":
      var sound2=new Audio("D4.mp3");
      sound2.play();
    break;


    case "3":
      var sound3=new Audio("Eb4.mp3");
      sound3.play();
    break;


    case "E":
      var sound4=new Audio("E4.mp3");
      sound4.play();
    break;
    case "e":
      var sound4=new Audio("E4.mp3");
      sound4.play();
    break;


    case "R":
      var sound5=new Audio("F4.mp3");
      sound5.play();
    break;
    case "r":
      var sound5=new Audio("F4.mp3");
      sound5.play();
    break;//DONE
    //DONE TILL HERE


    case "5":
      var sound=new Audio("G4.mp3");
      sound.play();
    break;

    case "t":
      var sound=new Audio("C4.mp3");
      sound.play();
    break;
    case "T":
      var sound=new Audio("C4.mp3");
      sound.play();
    break;

    case "6":
      var sound=new Audio("Ab4.mp3");
      sound.play();
    break;

    case "y":
      var sound=new Audio("A4.mp3");
      sound.play();
    break;
    case "Y":
      var sound=new Audio("A4.mp3");
      sound.play();
    break;

    case "7":
      var sound=new Audio("Bb4.mp3");
      sound.play();
    break;

    case "U":
      var sound=new Audio("B4.mp3");
      sound.play();
    break;
    case "u":
      var sound=new Audio("B4.mp3");
      sound.play();
    break;

    case "i":
      var sound=new Audio("C5.mp3");
      sound.play();
    break;
    case "I":
      var sound=new Audio("C5.mp3");
      sound.play();
    break;

    case "9":
      var sound=new Audio("Db5.mp3");
      sound.play();
    break;

    case "o":
      var sound=new Audio("D5.mp3");
      sound.play();
    break;
    case "O":
      var sound=new Audio("D5.mp3");
      sound.play();
    break;

    case "0":
      var sound=new Audio("Eb5.mp3");
      sound.play();
    break;

    case "p":
      var sound=new Audio("C5.mp3");
      sound.play();
    break;
    case "P":
      var sound=new Audio("E5.mp3");
      sound.play();
    break;

  }
}


var screensize=$(window).width();
if(screensize<992){
  alert("Lower Screen Size May Result in DISTORTED PLAYER!! Try landscape mode if you find any problem!");
}


function buttonAnimation(key){
  console.log(key);
  if(key>=0 && key<=9){
    var active=document.querySelector(".i"+key);
    active.classList.add("bkact");
    setTimeout(function(){
      active.classList.remove("bkact");
    },100);
  }
  else{
 var active=document.querySelector("."+key);
 active.classList.add("wkact");

setTimeout(function(){
  active.classList.remove("wkact");
},100);
}
}
