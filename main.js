
const max_guess = 5
window.onload = function () {
  const r = document.getElementById('rock')
  const p = document.getElementById('paper')
  const s = document.getElementById('scissors')
  if (r) {
    r.addEventListener('click', function () { guess(1) }, true)
  }
  if (p) {
    p.addEventListener('click', function () { guess(2) }, false)
  }
  if (s) {
    s.addEventListener('click', function () { guess(3) }, false)
  }

  const pscore = parseInt(window.localStorage.getItem('player_score'))
  const cscore = parseInt(window.localStorage.getItem('computer_score'))
  const guess_time = parseInt(window.localStorage.getItem('guess_time'))
  const best = parseInt(window.localStorage.getItem('best'))

  if (pscore) {
    document.getElementById('player_score').innerText = 'You: ' + pscore
  }
  if (cscore) {
    document.getElementById('computer_score').innerText = 'Computer: ' + cscore
  }
  if (guess_time) {
    document.getElementById('round').innerText = 'Round ' + guess_time
  }
  if (best) {
    document.getElementById('best').innerText = ' Best out of ' + best
  }
}

/**
 * player_selection: 1 rock, 2 paper, 3 scissors
 * @param {*} player_selection
 */
function guess (player_selection) {
  // key/value object
  const o = new Map([[1, 'images/rock.jpeg'], [2, 'images/paper.jpeg'], [3, 'images/scissors.jpeg']])
  // generate a random selection for computer
  const computer_selection = Math.ceil(Math.random() * 3)

  document.getElementById('question_mark_player').src = o.get(player_selection)
  document.getElementById('question_mark_computer').src = o.get(computer_selection)

  // Player win
  let pscore = parseInt(window.localStorage.getItem('player_score'))
  if (!pscore) {
    pscore = 0
  }

  // Player lose
  let cscore = parseInt(window.localStorage.getItem('computer_score'))
  if (!cscore) {
    cscore = 0
  }

  if (player_selection === computer_selection) {
    // Tie
  } else if (player_selection - computer_selection === 1 || player_selection - computer_selection === -2) {
    window.localStorage.setItem('player_score', pscore += 1)
  } else {
    window.localStorage.setItem('computer_score', cscore += 1)
  }

  let guess_time = parseInt(window.localStorage.getItem('guess_time'))
  if (!guess_time) {
    guess_time = 1
  }

  const best = parseInt(window.localStorage.getItem('best'))
  if (best) {
    if (pscore >= best) {
      window.localStorage.setItem('best', pscore)
      document.getElementById('best').innerText = ' Best out of ' + pscore
    }
  } else {
    window.localStorage.setItem('best', pscore)
    document.getElementById('best').innerText = ' Best out of ' + pscore
  }

  document.getElementById('player_score').innerText = 'You: ' + pscore
  document.getElementById('computer_score').innerText = 'Computer: ' + cscore

  window.localStorage.setItem('guess_time', guess_time += 1)
  document.getElementById('round').innerHTML = 'Round ' + guess_time

  if (guess_time > max_guess) {
    if (pscore > cscore) {
      if (confirm('You won game over. Do you want to play again?')) {
        window.localStorage.removeItem('player_score')
        window.localStorage.removeItem('computer_score')
        window.localStorage.removeItem('guess_time')
        document.getElementById('round').innerHTML = 'Round 1'

        document.getElementById('player_score').innerText = 'You: ' + 0
        document.getElementById('computer_score').innerText = 'Computer: ' + 0
      } else {
        alert('Thanks for playing!')
      }
    } else if (pscore < cscore) {
      if (confirm('You lost game over. Do you want to play again?')) {
        window.localStorage.removeItem('player_score')
        window.localStorage.removeItem('computer_score')
        window.localStorage.removeItem('guess_time')
        document.getElementById('round').innerHTML = 'Round 1'

        document.getElementById('player_score').innerText = 'You: ' + 0
        document.getElementById('computer_score').innerText = 'Computer: ' + 0
      } else {
        alert('Thanks for playing!')
      }
    } else if (pscore == cscore) {
      if (confirm('You tied. Do you want to play again?')) {
        window.localStorage.removeItem('player_score')
        window.localStorage.removeItem('computer_score')
        window.localStorage.removeItem('guess_time')
        document.getElementById('round').innerHTML = 'Round 1'

        document.getElementById('player_score').innerText = 'You: ' + 0
        document.getElementById('computer_score').innerText = 'Computer: ' + 0
      } else {
        alert('Thanks for playing!')
      }
    }
  }
}
