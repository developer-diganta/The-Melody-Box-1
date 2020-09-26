let microphone = document.getElementById('microphone');
microphone.onclick=function(){
    let recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.start();
    recognition.onresult = function(event){
        let input = event.results[0][0].transcript;
        console.log(input);
        console.log(input.length);
        }
}
