let youAreMutedBool 

// sometimes this array includes two fasle with only one other user, not sure why, maybe have to do with 
// which mutations are being observed
let othersAreMutedArr

// used to check if every value in othersAreMutedArr if true
const isTrue = (currentValue) => currentValue === true;

const attachListenerToStartGameButton = () => {
    const attachingToThis = document.querySelector('div.Jrb8ue')
    const startGameButton = document.createElement('button')
    startGameButton.innerText = 'Start Game!'
    startGameButton.id = 'start-game'
    attachingToThis.appendChild(startGameButton)
    // attachingToThis.style.display = "none"
    attachCircle()
    startGameButton.style.display = "none"

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
    const jumpballSquare = document.querySelector('.square')
    console.log("you've got the jumpball")
    document.querySelector('.U26fgb.JRY2Pb').click()
    jumpballSquare.style.display = "none" 

} 

const callbackYouAreMuted = function(mutationsList) {
    for(let mutation of mutationsList) {
        console.log(mutation.target.className)
        if (mutation.target.className==='JHK7jb hVsWVc FTMc0c') {
            youAreMutedBool=true
        } else {
            youAreMutedBool=false
        } 
    }
    console.log('you are muted?', youAreMutedBool)
};

const callbackOthersAreMuted = function(mutationsList) {
    othersAreMutedArr = []
    // mutationsList might have bug, getting [false, false] when I think it should just be [false]
    for(let mutation of mutationsList) {
        if (mutation.type === 'attributes') {
            if (mutation.target.className==='lMHHZ gtgjre pZFrDd kssMZb') {
                othersAreMutedArr.push(false)
            } else if (mutation.target.className==='lMHHZ gtgjre pZFrDd') {
                othersAreMutedArr.push(true)
            }
        } 
    }
    console.log('othersAreMutedArr?', othersAreMutedArr)
};

const config = { attributes: true, childList: true, subtree: true };


const observerYouAreMuted = new MutationObserver(callbackYouAreMuted);
const observerOthersAreMuted = new MutationObserver(callbackOthersAreMuted);


// checking if user joined meeting
let intervalToCheckIfJoined = setInterval(() => {
    const checkIfJoinedElement = document.querySelector(".Jrb8ue")
    if (!!checkIfJoinedElement) {
        console.log("joined meeting!")
        clearInterval(intervalToCheckIfJoined)
        // can turn off mic before user joins meeting
        // document.querySelector('.U26fgb.JRY2Pb').click()
    }

    let intervalToCheckIfEveryoneIsMuted = setInterval(startAndStopJumpball, 1000);

    function startAndStopJumpball() {
        if (youAreMutedBool === true && othersAreMutedArr.every(isTrue) && othersAreMutedArr.length!==0) {
            attachListenerToStartGameButton()
            clearInterval(intervalToCheckIfEveryoneIsMuted);
            // here keeps on adding jumpballs
        } 
        if (youAreMutedBool !== true || !othersAreMutedArr.every(isTrue)) { 
            const jumpballSquare = document.querySelector('.square')
            if (!!jumpballSquare) {
                jumpballSquare.style.display = "none" 
            }
        }
        
    }

    addObserverIfDesiredNodeAvailableYouAreMuted();
    addObserverIfDesiredNodeAvailable();
}, 1000)

function addObserverIfDesiredNodeAvailableYouAreMuted() {
    const youAreMuted = document.querySelector('.JHK7jb.hVsWVc.FTMc0c')
    if (!youAreMuted) {
        window.setTimeout(addObserverIfDesiredNodeAvailableYouAreMuted,500);
        return;
    }
    observerYouAreMuted.observe(youAreMuted, config) 
}

function addObserverIfDesiredNodeAvailable() {
    const targetNode2 = document.querySelector('.lMHHZ')
    const secondTargetNodeList = document.querySelectorAll('.lMHHZ')
    if (!targetNode2) {
        window.setTimeout(addObserverIfDesiredNodeAvailable,500);
        return;
    }
//? where does this for loop need to be?
// continuously listening if others are muted
    for (let i=0; i<secondTargetNodeList.length; i++) {
        observerOthersAreMuted.observe(secondTargetNodeList[i], config)
    }
}