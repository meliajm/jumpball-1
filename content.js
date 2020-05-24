const attachListenerToStartGameButton = () => {
    console.log('attachListenerToStartGameButton')
    const attachingToThis = document.querySelector('div.Jrb8ue')
    const startGameButton = document.createElement('button')
    startGameButton.innerText = 'Start Game'
    startGameButton.id = 'start-game'
    attachingToThis.appendChild(startGameButton)
    startGameButton.addEventListener('click', handleStartGameClick)  
}

const handleStartGameClick = (e) => {
    console.log( 'you started jumpball')
    console.log('event', e)
    attachCircle()
}

const attachCircle = () => {
    const startGameButton = document.getElementById('start-game')
    startGameButton.insertAdjacentHTML('afterend', drawCircle())
}

const drawCircle = () => {

    const percentCompleted = 100
    
    return `<div class="square">
    <text class="text-completed">Completed</text>
    <svg x="45" y="45" viewBox="0 0 36 36" class="circular-chart">
    <path class="circle"
    stroke-dasharray="${percentCompleted}, 100"
    
    d="M18 2.0845
    a 15.9155 15.9155 0 0 1 0 31.831
    a 15.9155 15.9155 0 0 1 0 -31.831"
    />
    </svg>
    </div>`
}

{/* <text x="18" y="20.35" class="percentage">${percentCompleted}%</text> */}


let intervalToCheckIfJoined = setInterval(() => {
    const checkIfJoinedElement = document.querySelector(".Jrb8ue")
    if (!!checkIfJoinedElement) {
      console.log("joined meeting!")
      attachListenerToStartGameButton()
      chatButton = document.querySelector(".NPEfkd.RveJvd.snByac")
  
      intervalToSetWatcherForTextInput = setInterval(() => {
        chatInput = document.querySelector(".KHxj8b.tL9Q4c");
        if (!!chatInput) {
          chatHistory = document.querySelector(".oIy2qc")
          // console.log(chatInput)
          if (!!chatHistory) {
            if (chatHistory.innerText === '!jumpball') {
              clearInterval(intervalToSetWatcherForTextInput)
            //   attachListenerToStartGameButton()
            }
  
          }
          // chatInput.addEventListener('input',(event) => console.log(event))
        }
      },1000)
      clearInterval(intervalToCheckIfJoined)
    }
  },1000)

