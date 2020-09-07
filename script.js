const playAudio = e => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if(!audio) return; //stops function from returning null values
    audio.currentTime = 0 // set the audio to start to press repeated times 
    audio.play()

    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.toggle('playing')
}
  
//on click
const playOnClick = e => {
    const audio = document.querySelector(`audio[data-key="${e.target.getAttribute('data-key')}"]`)
    if(!audio) return; //stops function from returning null values
    audio.currentTime = 0 // set the audio to start to press repeated times 
    audio.play()

    const key = document.querySelector(`.key[data-key="${e.target.getAttribute('data-key')}"]`)
    key.classList.add('playing')
}

function removeTransition(e) {
    // if(e.propertyName !== 'transform') return
    this.classList.remove('playing')
}
    
const keys = document.querySelectorAll('.key') 
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

window.addEventListener('keydown', playAudio)
window.addEventListener('mousedown', playOnClick)