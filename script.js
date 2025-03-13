let btn = document.querySelector("#btn")
let content = document.querySelector("#content")
let voice =document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="Hi"
    window.speechSynthesis.speak(text_speak)
}
function wishMe(){
    let day= new Date()
    let hours= day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours<16){
        speak("Good Afternoon sir")
    }
    else{
        speak("Good Evening sir")
    }
    
}
// window.addEventListener("load", ()=>{
//     wishMe()
// })
let speechrecognition= window.speechrecognition || window.webkitSpeechRecognition
let recognition =new speechrecognition()
recognition.onresult=(event)=>{
   let currentIndex= event.resultIndex
  let transcript=event.results[currentIndex][0].transcript
  content.innerText=transcript
  takeCommand(transcript.toLowerCase())

    
}
btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
})
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello") ||message.includes("hey")){
        speak("hello sir, What can i do for  you")
    }else if(message.includes("what is your name")){
        speak("my name is alex")
    }
    else if(message.includes("time")){
        let time=new Date().toLocaleDateString(undefined,{hour:"numeric",minute:"numeric"})
        speak(time)
    }
    else if(message.includes("who are you")){
        speak("I am virtual assistant created by Tushar")
    }else if(message.includes("open youtube")){
        speak("opening youtube")
        window.open("https://www.youtube.com")
    }else if(message.includes("open spotify")){
        speak("opening spotify")
        window.open("https://open.spotify.com")
    }else if(message.includes("open google")){
        speak("opening google")
        window.open("https://www.google.com/")
    }else{
        speak(`this  is what i found on internet regarding ${message}`)
        window.open(`https://www.bing.com/search?q=${message}`)
    }
}