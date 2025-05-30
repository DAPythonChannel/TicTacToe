const btn1 = document.getElementById('mab-square1');
const walk = document.getElementById('main-walk');
const list_btn = document.querySelectorAll('main-arena-btn'); 
const menu = document.getElementById('b-header-menu-m');

menu.addEventListener('click', ()=>{
    let el = document.getElementById('b-header-menu-ul');
    el.style.display = el.style.display ==='none' ? 'block' : 'none'
});

list_btn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        _setO(btn);
        _walk('O');
    })
})

function _walk(walk_text){
    walk.innerText= 'Walk '+walk_text;
}

function _setX(btn){
    btn.innerText = 'X'
}

function _setO(btn){
    btn.innerText = 'O'
}