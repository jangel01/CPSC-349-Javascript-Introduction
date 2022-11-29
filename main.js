
window.onload = function(){
    let r = document.getElementById("rock")
    let p = document.getElementById("paper")
    let s = document.getElementById("scissors")
    if(r){
        r.addEventListener('click', function(){guess(1)}, true)
    }
    if(p){
        p.addEventListener('click', function(){guess(2)}, false)
    }
    if(s){
        s.addEventListener('click', function(){guess(3)}, false)
    }
}

let player_score = 0
let computer_score = 0


/**
 * player_selection: 1 rock, 2 paper, 3 scissors
 * @param {*} player_selection 
 */
function guess(player_selection){
    // key/value object
    let o = new Map([[1, "images/rock.jpeg"], [2, "images/paper.jpeg"], [3, "images/scissors.jpeg"]])
    // generate a random selection for computer
    let computer_selection = Math.ceil(Math.random()*3)

    document.getElementById("question_mark_player").src = o.get(player_selection)
    document.getElementById("question_mark_computer").src = o.get(computer_selection)

    if(player_selection == computer_selection){
        // Tie
    } else if (player_selection - computer_selection ==1 || player_selection - computer_selection ==-2){
        // Player win
        player_score+=1
    } else{
        // Player lose
        computer_score+=1
    }
    document.getElementById("player_score").innerText = "Your: " + player_score
    document.getElementById("computer_score").innerText = "Computer: " + computer_score

}