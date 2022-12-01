
const max_guess = 5
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

    var pscore = parseInt(window.localStorage.getItem("player_score"))
    var cscore = parseInt(window.localStorage.getItem("computer_score"))
    var guess_time = parseInt(window.localStorage.getItem("guess_time"))
    var best =parseInt(window.localStorage.getItem("best"))
    
    if(pscore){
        document.getElementById("player_score").innerText = "Your: " + pscore
    }
    if(cscore){
        document.getElementById("computer_score").innerText = "Computer: " + cscore
    }
    if(guess_time){
        document.getElementById("round").innerText = "Round " + guess_time
    }
    if(best){
        document.getElementById("best").innerText = " Best out of " + best
    }
}


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

    // Player win
    let pscore = parseInt(window.localStorage.getItem("player_score"))
    if(!pscore){
         pscore = 0

    }

    // Player lose
    let cscore = parseInt(window.localStorage.getItem("computer_score"))
    if(!cscore){
        cscore = 0
    }


    if(player_selection == computer_selection){
        // Tie
    } else if (player_selection - computer_selection ==1 || player_selection - computer_selection ==-2){
        window.localStorage.setItem("player_score", pscore+=1)
    } else{
        window.localStorage.setItem("computer_score", cscore+=1)
    }



    let guess_time = parseInt(window.localStorage.getItem("guess_time"))
    if(!guess_time){
        guess_time = 1
    }

    let best = parseInt(window.localStorage.getItem("best"))
    if(best){
        if(pscore >= best){
            window.localStorage.setItem("best", pscore)
            document.getElementById("best").innerText = " Best out of " + pscore
        }
    } else{
        window.localStorage.setItem("best", pscore)
        document.getElementById("best").innerText = " Best out of " + pscore

    }

    document.getElementById("player_score").innerText = "Your: " + pscore
    document.getElementById("computer_score").innerText = "Computer: " + cscore


    window.localStorage.setItem("guess_time", guess_time+=1)
    document.getElementById("round").innerHTML = "Round " + guess_time
    
    
    if(guess_time > max_guess){
        alert("game finished.")
        window.localStorage.removeItem("player_score")
        window.localStorage.removeItem("computer_score")
        window.localStorage.removeItem("guess_time")
        document.getElementById("round").innerHTML = "Round 1"
        
        document.getElementById("player_score").innerText = "Your: " + 0
        document.getElementById("computer_score").innerText = "Computer: " + 0
        
    }

}