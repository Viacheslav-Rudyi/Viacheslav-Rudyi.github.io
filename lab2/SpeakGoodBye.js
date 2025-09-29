const goodbye = function() {
    var speakWord = "Good Bye";
    return {
        speak: function(name) {
            console.log(speakWord + " " + name)
        }
    }  
} ()