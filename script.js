window.addEventListener('keydown',  function(e)  {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; // stop the function running all togther  
    audio.currentTime = 0; // newind to the stand
    audio.play();
  
    key.classList.add('playing'); 

});



    function  removeTransitioned(e) {
        if (e.propertyName !== 'transform') return ; // skip it if it is not a transform
        this.classList.remove('playing');
      
    }
    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransitioned))