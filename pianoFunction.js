/* To play the piano it should recognize when we press the keys */
const keys = ["A", "S", "D", "F", "G", "H", "J", "W", "E", "T", "Y", "U"];
document.addEventListener("keypress", function(event) {
    let pressedKey = event.key.toUpperCase();
    if (keys.includes(pressedKey)) {
        playTheNote(pressedKey);
    }
});



function playTheNote(letter) {
    let sound = new Audio("Sound/" + letter + ".mp3");
    sound.play();
}


/*also when hovering we should play the note*/
keys.forEach(playOnHover);

function playOnHover(key) {
    document.querySelector("."+key).addEventListener("mouseenter", function() {playTheNote(key)});
}