
var scores,RoundScore,dice,activePlayer,gamePlaying;

init();

document.querySelector('.btn-roll').addEventListener('click',function(){
    if (gamePlaying){
        var dice=Math.floor(Math.random()*6)+1;

        var DiceDOM=document.querySelector('.dice')
        DiceDOM.style.display='block'
        DiceDOM.src='dice-' + dice + '.png';
    
        if(dice!==1){
            RoundScore+=dice;
            document.querySelector('#current-' + activePlayer).textContent=RoundScore
        }else{
            //turn of nextplayer
            nextPlayer()
    
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){
        score[activePlayer]+=RoundScore
        document.querySelector('#score-' + activePlayer).textContent=score[activePlayer]

        if (score[activePlayer]>=20){
            document.querySelector('#name-' + activePlayer).textContent='Winner!'
            document.querySelector('.dice').style.display='none'
            document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner')
            document.querySelector('.player-'+ activePlayer+ '-panel').classList.remove('active')
            gamePlaying = false;
        }else{
            //nextplayer
            nextPlayer()
    }
 }

});

function nextPlayer(){
    activePlayer===0 ? activePlayer=1:activePlayer=0
    RoundScore=0

    document.getElementById('current-0').textContent=0
    document.getElementById('current-1').textContent=0

    document.querySelector('.player-0-panel').classList.toggle('active')
    document.querySelector('.player-1-panel').classList.toggle('active')

    document.querySelector('.dice').style.display='none';

    //document.querySelector('.player-0-panel').classList.remove('active')
    //document.querySelector('.player-1-panel').classList.add('active')

}

document.querySelector('.btn-new').addEventListener('click',init)

function init(){
    score=[0,0]
    RoundScore=0;
    activePlayer=0;
    gamePlaying=true;

    document.querySelector('.dice').style.display='none';

    document.getElementById('score-0').textContent=0;
    document.getElementById('current-0').textContent=0;
    document.getElementById('score-1').textContent=0;
    document.getElementById('current-1').textContent=0;
    document.getElementById('name-0').textContent='Player 1'
    document.getElementById('name-1').textContent='Player 2'

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
























