let title = document.querySelector('.title');
let ul = document.querySelector('ul');
let reload = document.querySelector('.reload');

// if the internet is online or offline
window.onload = function(){
    if(window.navigator.onLine){
        onLine();
    }else{
        offLine();
    }
}


// callback the situation of the internet connection
window.addEventListener("online", function(){
    onLine();
})
window.addEventListener("offline", function(){
    offLine();
})


// reload the page 
reload.onclick = function(){
    window.location.reload();  
}


// Online situation
function onLine(){
    title.innerHTML  = 'Online Now';
    title.style.color = 'green';
    ul.classList.add('hide');
    reload.classList.add('hide');
}


// Offline situation
function offLine(){
    title.innerHTML = 'Offline Now';
    title.style.color = '#666';
    ul.classList.remove('hide');
    reload.classList.remove('hide');
}
