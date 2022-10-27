let player0turn = true
let score0 = 0
let score1 = 0
let cscore0 = 0
let cscore1 = 0


const player0Score = document.getElementById('score-0')
const player1Score = document.getElementById('score-1')
const current0Score = document.getElementById('current-0')
const current1Score = document.getElementById('current-1')
const active0 = document.getElementById('player0active')
const active1 = document.getElementById('player1active')
const win = document.getElementById('winner')

const diceimage = document.getElementsByClassName('dice')

const rollbtn = document.getElementsByClassName('btn-roll')
const holdbtn = document.getElementsByClassName('btn-hold')
const newbtn = document.getElementById('btn-new')



newbtn.onclick = function () {
    player0turn = true
    score0 = score1 = cscore0 = cscore1 = 0
    player0Score.innerHTML = player1Score.innerHTML = 0
    current0Score.innerHTML = current1Score.innerHTML = 0
    win.innerHTML = ''
}

rollbtn[0].onclick = function () {
    let randnumber = Math.ceil(Math.random() * 6);
    diceimage[0].src = `dice-${randnumber}.png`

    if (player0turn) {
        score0 += randnumber;
        player0Score.innerHTML = score0
        if (score0 % 5 == 0) {
            score0 = 0
            player0turn = !player0turn
            active0.classList.remove('active')
            active1.classList.add('active')
        }


    }
    else {
        score1 += randnumber;
        player1Score.innerHTML = score1
        if (score1 % 5 == 0) {
            score1 = 0
            player0turn = !player0turn
            active1.classList.remove('active')
            active0.classList.add('active')
        }

    }

}
holdbtn[0].onclick = function () {

    if (player0turn) {
        cscore0 += score0;
        current0Score.innerHTML = cscore0
        active0.classList.remove('active')
        active1.classList.add('active')
        if (cscore0 >= 100) {
            win.innerHTML = 'Player 1 wins the game'
        }
    }
    else {
        cscore1 += score1;
        current1Score.innerHTML = cscore1
        active1.classList.remove('active')
        active0.classList.add('active')
        if (cscore1 >= 100) {
            win.innerHTML = 'Player 2 wins the game'
        }
    }
    score0 = score1 = 0
    player0Score.innerHTML = player1Score.innerHTML = 0
    player0turn = !player0turn

}



