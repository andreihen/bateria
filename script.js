document.body.addEventListener('keyup', (event) => {
    playSound(event.code.toLowerCase())
});
document.querySelector('.composer button').addEventListener('click', () => {
    const song = document.querySelector('#input').value;
    if (song !== '') {
        let songArray = song.split('');
        playSong(songArray);
    };
});
function playSound(sound) {
    let audioElement = document.querySelector(`#s_${sound}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if (audioElement) {
        audioElement.currentTime = 0
        audioElement.play();
    };
    if (keyElement) {
        keyElement.classList.add('active')
        setTimeout(function() {
            keyElement.classList.remove('active')
        }, 200);
    }
};
function playSong(songArray) {
    let wait = 0;

    for (let songItem of songArray) {
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)
        wait += 250;
    };
};