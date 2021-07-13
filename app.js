
let keys = document.querySelectorAll('.key');

window.addEventListener('keydown',(e)=>{
    for(let i=0;i<keys.length;i++)
    {
        if(keys[i].dataset.code==e.keyCode){
            keys[i].classList.add('effect');
            let aud = document.querySelector(`audio[data-code="${e.keyCode}"]`);
            aud.currentTime =0;
            aud.play();
        }
    } 
});

window.addEventListener('keyup',(e)=>{
    for(let i=0;i<keys.length;i++)
    {
        if(keys[i].dataset.code==e.keyCode){
            keys[i].classList.remove('effect');
        }
    } 
});
