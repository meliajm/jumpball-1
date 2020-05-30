numberOfPeopleInMeeting = parseInt(document.querySelector(".wnPUne.N0PJ8e"))

consoleLogMeetingMembersNames = document.querySelectorAll(".epqixc.YUGmGb").forEach( div => console.log(div.innerText))

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
    <svg class="circular-chart" width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="30" fill="orange" stroke-width="5"/>
        <line x1="75" x2="75" y1="45" y2="105" stroke="black" stroke-width="5"/>
        <path d="M 55 55 C 55 55, 75 75, 55 100" stroke="black" stroke-width="5" fill="transparent"/>
        <path d="M 95 55 C 95 55, 75 75, 95 100" stroke="black" stroke-width="5" fill="transparent"/>

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
    const jumpball = document.querySelector('.circular-chart')
    jumpball.addEventListener('click', handleJumpball)  
}

const handleJumpball = (event) => {
    console.log("you've got the jumpball")
    const startGameButton = document.getElementById('start-game')
    const jumpballSquare = document.querySelector('.square')
    document.querySelector('.U26fgb.JRY2Pb').click()
    jumpballSquare.style.display = "none"
    startGameButton.style.display = "block"
} 

let intervalToCheckIfJoined = setInterval(() => {
    const checkIfJoinedElement = document.querySelector(".Jrb8ue")
    if (!!checkIfJoinedElement) {
      console.log("joined meeting!")
      attachListenerToStartGameButton()      
      clearInterval(intervalToCheckIfJoined)
    }
  },1000)

