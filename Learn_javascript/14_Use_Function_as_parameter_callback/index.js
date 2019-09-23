var myDog = {
    speak:function(onSpeak){
        console.log("Dog speak...");
        onSpeak();
    }
};

var gau = function(){
    console.log("Gau gau")
}

myDog.speak(gau);

myDog.speak(function(){
    console.log("ang ang");
})