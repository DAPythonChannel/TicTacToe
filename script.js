var btn = document.getElementById('b-header-menu-btn');

btn.addEventListener('click', ()=>{
    var element = document.getElementsByClassName('b-header-menu-game');
    if (element[0].style !== 'display:none') 
        element[0].style = 'display:block';
    else
        element[0].style = 'display:block';
});
