const walk = document.getElementById('main-walk')
const menu = document.getElementById('b-header-menu-m')
const el = document.getElementById('b-header-menu-ul')
const scoreX = document.getElementById('score-X')
const scoreO = document.getElementById('score-0')
let _scoreX = 0
let _scoreO = 0

const btn1 = document.getElementById('mab-square1')
const btn2 = document.getElementById('mab-square2')
const btn3 = document.getElementById('mab-square3')
const btn4 = document.getElementById('mab-square4')
const btn5 = document.getElementById('mab-square5')
const btn6 = document.getElementById('mab-square6')
const btn7 = document.getElementById('mab-square7')
const btn8 = document.getElementById('mab-square8')
const btn9 = document.getElementById('mab-square9')

menu.addEventListener('click', menuOpen)
btn1.addEventListener('click', clBtn)
btn2.addEventListener('click', clBtn)
btn3.addEventListener('click', clBtn)
btn4.addEventListener('click', clBtn)
btn5.addEventListener('click', clBtn)
btn6.addEventListener('click', clBtn)
btn7.addEventListener('click', clBtn)
btn8.addEventListener('click', clBtn)
btn9.addEventListener('click', clBtn)


function clBtn(){
    let _move = walk.innerText.replace('Walk ','')
    scoreX.innerText=_scoreX
    scoreO.innerText=_scoreO
    console.log(_move)
    if(this.innerText ===''){
        switch(_move){
        case 'X':
            this.innerText = 'X'
            _walk('0')
            break
        case '0':
            this.innerText= '0'
            _walk('X')
            break      
        }
    }
    upScore(checkWinner())
}

function upScore(winner){
    switch(winner){
        case 'X':
            _scoreX++
            break
        case '0':
            _scoreO++ 
            break
    }
}

function checkWinner(){
    if (btn1.innerText === btn2.innerText === btn3.innerText)
        return btn1.innerText
    else if(btn1.innerText === btn4.innerText=== btn7.innerText)
        return btn1.innerText
}

function menuOpen(){
    el.style.display = el.style.display ==='none' ? 'block' : 'none'
}

function _walk(walk_text){
    walk.innerText= 'Walk '+walk_text;
}