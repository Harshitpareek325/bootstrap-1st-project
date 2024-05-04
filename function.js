var menu=document.querySelector('#menu');
var btn=document.querySelector('#btn');

btn.addEventListener(
    'click',
    function (){
        menu.classList.toggle('open-slid');
        var times=btn.classList.toggle('fa-times');
    }
)