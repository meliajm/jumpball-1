const youAreMuted = document.querySelectorAll('.JHK7jb.hVsWVc.FTMc0c')
// if true then you are muted, else not muted

function checkIfYouAreMuted() { !!youAreMuted[0].classList[2] ? console.log('you are muted') : console.log('you are not muted')}
setInterval(checkIfYouAreMuted, 1000)

// make toggle

// if (!!youAreMuted[0].classList[2]) {
//     console.log('you are muted') 
// } else {
//     console.log('you are not muted')
// }

let timerId = setTimeout(function tick() {
    let i = 1
    console.log(i);
    timerId = setTimeout(tick, 2000); // (*)
    i++
  }, 2000);

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
    // const jumpball = document.querySelector('circle')
    const jumpball = document.querySelector('.square')
    jumpball.addEventListener('click', handleJumpball)  
    console.log('hi')
}

const handleJumpball = (event) => {
    console.log(event)
    console.log("you've got the jumpball")
    document.querySelector('.U26fgb.JRY2Pb').click()
}
  
let intervalToCheckIfJoined = setInterval(() => {
    const checkIfJoinedElement = document.querySelector(".Jrb8ue")
    if (!!checkIfJoinedElement) {
      console.log("joined meeting!")  
      intervalToCheckIfEveryoneMuted = setInterval(() => {
        const nodeListOthersNotMuted = document.querySelectorAll('.lMHHZ.gtgjre.pZFrDd.kssMZb')
        let aBool = 0
        console.log(aBool)
        if (nodeListOthersNotMuted.length===0 && aBool===0) {
            console.log('everyone is muted')
            // aBool += 1 
            // console.log(aBool)
            // const attachingToThis = document.querySelector('div.Jrb8ue')
            // const startGameButton = document.createElement('button')
            // startGameButton.innerText = 'Start Game!'
            // startGameButton.id = 'start-game'
            // attachingToThis.appendChild(startGameButton)
            // // startGameButton.addEventListener('click', handleStartGameClick)  
            // // startGameButton.click()
            // startGameButton.insertAdjacentHTML('afterend', drawCircle())
            // attachListenerToJumpball()
            
        } else {
            // const jumpball = document.querySelector('.square')
            console.log('somebody needs to mute')
            // jumpball.style.display = "none"
        }
        clearInterval(intervalToCheckIfEveryoneMuted)
      },1000)
      clearInterval(intervalToCheckIfJoined)
    }
},1000)