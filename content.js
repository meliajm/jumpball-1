const attachListenerToStartGameButton = () => {
    console.log('attachListenerToStartGameButton')
    const attachingToThis = document.querySelector('div.Jrb8ue')
    const startGameButton = document.createElement('button')
    startGameButton.innerText = 'Start Game!'
    startGameButton.id = 'start-game'
    attachingToThis.appendChild(startGameButton)
    startGameButton.addEventListener('click', handleStartGameClick)  
}

const handleStartGameClick = (e) => {
    const startGameButton = document.getElementById('start-game')
    console.log( 'you started jumpball')
    console.log('event', e)
    startGameButton.style.display = "none"
    attachCircle()
}

const attachCircle = () => {
    const startGameButton = document.getElementById('start-game')
    startGameButton.insertAdjacentHTML('afterend', drawCircle())
    attachListenerToJumpball()
}

const drawCircle = () => {

    const percentCompleted = 100
    
    return `<div class="square">
    <svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  

  <circle cx="25" cy="75" r="70" fill="orange" stroke-width="5"/>

  <line x1="25" x2="25" y1="55" y2="95" stroke="black" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
    
    </div>`
}

{/* <svg x="45" y="45" viewBox="0 0 36 36" class="circular-chart">
    <path class="circle"
    stroke-dasharray="${percentCompleted}, 100"
    
    d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    </svg> */}

function attachListenerToJumpball() {
    const jumpball = document.querySelector('path.circle')
    jumpball.addEventListener('click', handleJumpball)  
}

const handleJumpball = (event) => {
    console.log("you've got the jumpball")
} 

let intervalToCheckIfJoined = setInterval(() => {
    const checkIfJoinedElement = document.querySelector(".Jrb8ue")
    if (!!checkIfJoinedElement) {
      console.log("joined meeting!")
      attachListenerToStartGameButton()      
      clearInterval(intervalToCheckIfJoined)
    }
  },1000)

