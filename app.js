let myKeys=document.querySelectorAll('.key');

for(let i=0;i<myKeys.length;i++)
{
    myKeys[i].addEventListener('click',function(){

        playsound(myKeys[i].innerHTML.toLowerCase());

    })
}
document.addEventListener('keydown',function(btn){

    playsound(btn.key.toLowerCase());
    let pressed_key=btn.key.toLowerCase();
    for(var x=0;x<myKeys.length;x++)
    {
        myKeys[x].classList.remove('activated');
    }
    for(var x=0;x<myKeys.length;x++) //just for glowing effect not necessary
    {
       if(pressed_key==myKeys[x].innerHTML.toLowerCase())
       {
           myKeys[x].classList.add('activated');
       }
    }

})

function playsound(key){
    switch(key) {
        case 'c':
            var audio = new Audio('doremi/do.mp3');
            audio.play();
            break;
        case 'd':
            var audio = new Audio('doremi/re.mp3');
            audio.play();
            break;
        case 'e':
            var audio = new Audio('doremi/mi.mp3');
            audio.play();
            break;     
        case 'f':
            var audio = new Audio('doremi/fa.mp3');
            audio.play();
            break;       
        case 'g':
            var audio = new Audio('doremi/sol.mp3');
            audio.play();
            break;
        case 'a':
            var audio = new Audio('doremi/la.mp3');
            audio.play();
            break;  
        case 'b':
            var audio = new Audio('doremi/ti.mp3');
            audio.play();
            break;     
        case 'k':
            var audio = new Audio('doremi/doh.mp3');
            audio.play();
            break;     
        default:
          console.log(key);
      }

}

