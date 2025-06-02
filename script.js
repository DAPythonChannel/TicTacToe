const walk = document.getElementById('main-walk')
const scoreX = document.getElementById('score-X')
const scoreO = document.getElementById('score-0')
const data_score = {
    _scoreX : 0,
    _scoreO : 0,
} 

const btn1 = document.getElementById('mab-square1')
const btn2 = document.getElementById('mab-square2')
const btn3 = document.getElementById('mab-square3')
const btn4 = document.getElementById('mab-square4')
const btn5 = document.getElementById('mab-square5')
const btn6 = document.getElementById('mab-square6')
const btn7 = document.getElementById('mab-square7')
const btn8 = document.getElementById('mab-square8')
const btn9 = document.getElementById('mab-square9')
const start = document.getElementById('footer')
const replay = document.getElementById('start-replay')


start.addEventListener('click', play)
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
    replay.innerText='Replay'
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
    if(checkWinner('X')){
        upScore('X')
        play()
    }
    else if (checkWinner('0')){
        upScore('0')
        play()
    }
}

function upScore(winner){
    switch(winner){
        case 'X':
            data_score._scoreX++
            break
        case '0':
            data_score._scoreO++ 
            break
    }
}

function checkWinner(check){
    if (btn1.innerText === check && btn2.innerText === check && btn3.innerText === check ||
        btn4.innerText === check && btn5.innerText === check && btn6.innerText === check ||
        btn7.innerText === check && btn8.innerText === check && btn9.innerText === check ||
        btn1.innerText === check && btn4.innerText === check && btn7.innerText === check ||
        btn2.innerText === check && btn5.innerText === check && btn8.innerText === check ||
        btn3.innerText === check && btn6.innerText === check && btn9.innerText === check ||
        btn1.innerText === check && btn5.innerText === check && btn9.innerText === check ||
        btn3.innerText === check && btn5.innerText === check && btn7.innerText=== check)
        return true
}

function _walk(walk_text){
    walk.innerText= 'Walk '+walk_text;
}

function play(){
    btn1.innerText=''
    btn2.innerText=''
    btn3.innerText=''
    btn4.innerText=''
    btn5.innerText=''
    btn6.innerText=''
    btn7.innerText=''
    btn8.innerText=''
    btn9.innerText=''
    _walk('X')
    scoreX.innerText=data_score._scoreX
    scoreO.innerText=data_score._scoreO
    replay.innerText='Replay'
}