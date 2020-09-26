for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click", function handleClick(){
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
  microphone.innerHTML= "<i class='fas fa-microphone'></i>";
  console.log("innn");
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.interimResults=true;
    recognition.onresult = function(event){
         input = event.results[0][0].transcript;
         microphone.innerHTML='<i class="fas fa-microphone-slash"></i>';
        for(let i=0;i<input.length;i++){
        var jk=input[i];console.log(jk);
        switch(jk){
          case "w":
          // var w;
          //   setTimeout(function() {w=(i+1)*5000;
          //     var tom1=new Audio("tom-1.mp3");
          //   tom1.play();
          // },w);
          var tom1=new Audio("tom-1.mp3");
          diff(tom1,i,"w");
          break;
          case "W":
          var tom1=new Audio("tom-1.mp3");
          diff(tom1,i,"W");
          break;
          case "a":
          var tom=new Audio("tom-2.mp3");
          diff(tom,i,"a");
          break;
          case "A":
          var tom=new Audio("tom-2.mp3");
          diff(tom,i,"A");
          break;
          case "s":
            var tom1=new Audio("tom-3.mp3");
            diff(tom1,i,"s");
          break;
          case "S":
          var tom1=new Audio("tom-3.mp3");
          diff(tom1,i,"S");
          break;
          case "d":
            var tom1=new Audio("tom-4.mp3");
            diff(tom1,i,"d");
          break;
          case "D":
          var tom1=new Audio("tom-4.mp3");
          diff(tom1,i,"D");
          break;
          case "j":
            var tom1=new Audio("snare.mp3");
            diff(tom1,i,"j");
          break;
          case "J":
          var tom1=new Audio("snare.mp3");
          diff(tom1,i,"J");
          break;
          case "k":
            var tom1=new Audio("kick-bass.mp3");

          diff(tom1,i,"k");
          break;
          case "K":
          var tom1=new Audio("kick-bass.mp3");

        diff(tom1,i,"K");
          break;
          case "l":
          //   var l;
          //   setTimeout(function(){
          //     l=(i+1)*5000;
          //     console.log(i);
          //     var tomL=new Audio("crash.mp3");
          // tomL.play();  },l);
          var tomL=new Audio("crash.mp3");
          diff(tomL,i,"l");


          break;

          case "L":
          var tomL=new Audio("crash.mp3");
          diff(tomL,i,"L");
            return;
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
    case "w":
    console.log("W");
      var tom1=new Audio("tom-1.mp3");
      tom1.play();
      return;
    break;
    case "W":
      var tom1=new Audio("tom-1.mp3");
      tom1.play();
      return;
    break;
    case "a":
    console.log("a");

      var tom1=new Audio("tom-2.mp3");
      tom1.play();
    break;
    case "A":
      var tom1=new Audio("tom-2.mp3");
      tom1.play();
    break;
    case "s":
      var tom1=new Audio("tom-3.mp3");
      tom1.play();
    break;
    case "S":
      var tom1=new Audio("tom-3.mp3");
      tom1.play();
    break;
    case "d":
      var tom1=new Audio("tom-4.mp3");
      tom1.play();
    break;
    case "D":
      var tom1=new Audio("tom-4.mp3");
      tom1.play();
    break;
    case "j":
      var tom1=new Audio("snare.mp3");
      tom1.play();
    break;
    case "J":
      var tom1=new Audio("snare.mp3");
      tom1.play();
    break;
    case "k":
      var tom1=new Audio("kick-bass.mp3");
      tom1.play();
    break;
    case "K":
      var tom1=new Audio("kick-bass.mp3");
      tom1.play();
    break;
    case "l":
    console.log("L");

      var tom1=new Audio("crash.mp3");
      tom1.play();
      return;
    break;

    case "L":
      var tom1=new Audio("crash.mp3");
      tom1.play();
      return;
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
return;
}
