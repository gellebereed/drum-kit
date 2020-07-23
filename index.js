var drumButtonList = document.querySelectorAll(".drum");
var audioList = [
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3",
    "sounds/snare.mp3",
    "sounds/crash.mp3",
    "sounds/Kick-bass.mp3"
];
// Click listener
for(var i = 0; i<drumButtonList.length; i++){
    drumButtonList[i].addEventListener("click", function(){
        playAudio(this.innerHTML); 
        buttonAnimation(this.innerHTML);
    })
    
}
// Keypress Listener
document.addEventListener("keydown", function(event){
    playAudio(event.key); 
    buttonAnimation(event.key)
});

function playAudio(evt){
    var audio;
    switch(evt){
        case "w":
            audio = new Audio(audioList[0]);
            audio.play();
            break;
        case "a":
            audio = new Audio(audioList[1]);
            audio.play();
            break;
        case "s":
            audio = new Audio(audioList[2]);
            audio.play();
            break;
        case "d":
            audio = new Audio(audioList[3]);
            audio.play();
            break;
        case "j":
            audio = new Audio(audioList[4]);
            audio.play();
            break;
        case "k":
            audio = new Audio(audioList[5]);
            audio.play();
            break;
        case "l":
            audio = new Audio(audioList[6]);
            audio.play();
            break;
        default:
            console.log(evt);
    }
}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },100);
}