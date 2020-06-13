// if all users are muted then start a jumpball, users play game to get ball, once one user is unmuted, jumpball stops

// if all others are muted this Node List is empty
// equals lenght 1 in both meet types (clock vs no clock)

const attachListenerToStartGameButton = () => {
    console.log('attachListenerToStartGameButton')
    const attachingToThis = document.querySelector('div.Jrb8ue')
    const startGameButton = document.createElement('button')
    startGameButton.innerText = 'Start Game!'
    startGameButton.id = 'start-game'
    attachingToThis.appendChild(startGameButton)
    startGameButton.addEventListener('click', handleStartGameClick)  
    startGameButton.click()
}

const restartGame = () => {
    const startGameButton = document.getElementById('start-game')
    startGameButton.click()
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
    
    return `<div class="square">
    <svg class="circular-chart" width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle cx="75" cy="75" r="30" fill="orange" stroke-width="5"/>
        <line x1="75" x2="75" y1="45" y2="105" stroke="black" stroke-width="5"/>
        <path d="M 55 55 C 55 55, 75 75, 55 100" stroke="black" stroke-width="5" fill="transparent"/>
        <path d="M 95 55 C 95 55, 75 75, 95 100" stroke="black" stroke-width="5" fill="transparent"/>
    </svg>
    
    </div>`
}



function attachListenerToJumpball() {
    const jumpball = document.querySelector('.circular-chart')
    jumpball.addEventListener('click', handleJumpball)  
}

const handleJumpball = (event) => {
    console.log("you've got the jumpball")
    document.querySelector('.U26fgb.JRY2Pb').click()
} 

let intervalToCheckIfJoined = setInterval(() => {
    const checkIfJoinedElement = document.querySelector(".Jrb8ue")

    if (!!checkIfJoinedElement) {
        console.log("joined meeting!")

        const attachingToThis = document.querySelector('div.Jrb8ue')
        const startGameButton = document.createElement('button')
        const attachListenerStart = true
        startGameButton.innerText = 'Start Game!'
        startGameButton.id = 'start-game'
        attachingToThis.appendChild(startGameButton)
        startGameButton.addEventListener('click', handleStartGameClick)  
        startGameButton.click()
        //   checkIfEveryoneMuted()
        const nodeListOthersNotMuted = document.querySelectorAll('.lMHHZ.gtgjre.pZFrDd.kssMZb')
        const youAreMuted = document.querySelectorAll('.JHK7jb.hVsWVc.FTMc0c')
        if (nodeListOthersNotMuted.length===0 && youAreMuted.length===1 && attachListenerStart!==true) {
            attachListenerToStartGameButton()
        }         
      checkIfEveryoneNotMuted()
      clearInterval(intervalToCheckIfJoined)
    }

    function checkIfEveryoneNotMuted() {
        // console.log("not mute")
        const nodeListOthersNotMuted = document.querySelectorAll('.lMHHZ.gtgjre.pZFrDd.kssMZb')
        const youAreMuted = document.querySelectorAll('.JHK7jb.hVsWVc')
        // for at least 2 people in meeting??? && (nodeListOthersNotMuted.length!==0)
        if (document.querySelector('.square') && (youAreMuted[0].classList.length===2) && (nodeListOthersNotMuted.length===0)) {
            console.log("condition not mute")
    
            const jumpballSquare = document.querySelector('.square')
            jumpballSquare.style.display = "none"       
        }
        //need to clear this timer?? clearTimeout(timeoutID)
        setTimeout(checkIfEveryoneNotMuted, 500);
    }
}, 1000)