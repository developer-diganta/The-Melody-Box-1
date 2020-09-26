for(var i=0;i<document.querySelectorAll(".xy").length;i++){
  document.querySelectorAll(".xy")[i].addEventListener("click", function handleClick(){
    var button=this.innerHTML;
    console.log(button);
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
         microphone.innerHTML='<i class="fas fa-microphone-slash"></i>';

      for(let i=0;i<input.length;i++){
      // while(i<input.length){
          console.log(i);
        var jk=input[i];console.log(jk);
        switch(jk){
          case "a":
            var sound=new Audio("A.wav");
            diff(sound,i,"a");

          break;
          case "A":
          console.log("Aaaaaaa");
            var sound=new Audio("A.wav");
            diff(sound,i,"A");
            console.log("Aaaaaaa");
          break;
          case "B":
            var sound=new Audio("B.wav");
            diff(sound,i,"B");
          break;
          case "b":
            var sound=new Audio("B.wav");
            diff(sound,i,"b");
          break;
          case "c":
            var sound=new Audio("C.wav");
            diff(sound,i,"c");
          break;
          case "C":
            var sound=new Audio("C.wav");
            diff(sound,i,"C");
          break;
          case "d":
            var sound=new Audio("D.wav");
            diff(sound,i,"d");
          break;
          case "D":
            var sound=new Audio("D.wav");
            diff(sound,i,"D");
          break;
          case "E":
            var sound=new Audio("E.wav");
            diff(sound,i,"E");
          break;
          case "e":
            var sound=new Audio("E.wav");
            diff(sound,i,"e");
          break;
          case "f":
            var sound=new Audio("F.wav");
            diff(sound,i,"f");
          break;
          case "F":
            var sound=new Audio("F.wav");
            diff(sound,i,"F");
          break;
          case "g":
            var sound=new Audio("G.wav");
            diff(sound,i,"g");
          break;

          case "G":
            var sound=new Audio("G.wav");
            diff(sound,i,"G");
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


var screensize=$(window).width();
if(screensize<992){
  alert("Lower Screen Size May Result in DISTORTED PLAYER!! Try landscape mode if you find any problem!");
}


function makeSound(button){
  console.log(button);
  var btn=button;
  switch(btn){
    case "a":
      var sound=new Audio("A.wav");
      sound.play();

    break;
    case "A":
    console.log("Aaaaaaa");
      var sound=new Audio("A.wav");
      sound.play();
      console.log("Aaaaaaa");
    break;
    case "B":
      var sound=new Audio("B.wav");
      sound.play();
    break;
    case "b":
      var sound=new Audio("B.wav");
      sound.play();
    break;
    case "c":
      var sound=new Audio("C.wav");
      sound.play();
    break;
    case "C":
      var sound=new Audio("C.wav");
      sound.play();
    break;
    case "d":
      var sound=new Audio("D.wav");
      sound.play();
    break;
    case "D":
      var sound=new Audio("D.wav");
      sound.play();
    break;
    case "E":
      var sound=new Audio("E.wav");
      sound.play();
    break;
    case "e":
      var sound=new Audio("E.wav");
      sound.play();
    break;
    case "f":
      var sound=new Audio("F.wav");
      sound.play();
    break;
    case "F":
      var sound=new Audio("F.wav");
      sound.play();
    break;
    case "g":
      var sound=new Audio("G.wav");
      sound.play();
    break;

    case "G":
      var sound=new Audio("G.wav");
      sound.play();
    break;
  }
}

function buttonAnimation(key){
  console.log(key);
var active=document.querySelector("."+key);
active.classList.add("pressed");

setTimeout(function(){
  active.classList.remove("pressed");
},100);
}
