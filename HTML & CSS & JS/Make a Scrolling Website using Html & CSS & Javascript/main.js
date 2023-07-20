let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let nouvill = document.querySelector('.nouvill');


window.onscroll = function(){
    let value = scrollY;
    // scroll left (stars move)
    stars.style.left = value + 'px';

    // scroll down (moon move)
    moon.style.top = value * 4 + 'px';

    // scroll down (mountains3 the farest mountain move)
    mountains3.style.top = value * 2 + 'px';

    // scroll down (mountains4 move)
    mountains4.style.top = value * 1.5 + 'px';
    
    // scroll down (river move)
    river.style.top = value + 'px';
    
    // scroll down (boat move)
    boat.style.top = value + 'px';
    
    // boat to the right side (right side boat move)
    boat.style.left = value * 3 + 'px';
    
    // nouvill word get bigger when the move is start
    nouvill.style.fontSize = value + 'px';

    // word get bigger to the determine level stop
    if(scrollY >= 67){
        nouvill.style.fontSize = 67 + 'px';
        nouvill.style.position = 'fixed';
        if(scrollY >= 414){
            nouvill.style.display = 'none';
        }else{
            nouvill.style.display = 'block';
        }

        // background change when the moon is hide the seciton
        if(scrollY >= 84){
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)'
        }else{
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }

    }

}