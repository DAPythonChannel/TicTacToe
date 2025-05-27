var btn = document.getElementById('b-header-menu');

btn.addEventListener('click', ()=>{
    var element = document.getElementsByClassName('b-header-menu');
    if (element[0].style !== 'display:none') 
        element[0].style = 'display:block';
    else if (element[0].style !== 'display:block') 
         element[0].style = 'display:none';
});
