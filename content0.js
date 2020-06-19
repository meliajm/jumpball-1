// do while loop?
// break or continue?
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
    const toAttachJumpballText = document.querySelector(".koV58.Zi94Db.S7urwe")
    if (!!checkIfJoinedElement) {
        console.log("joined meeting!")
        if (!!toAttachJumpballText) {
            attachJumpballText()
            clearInterval(intervalToCheckIfJoined)
        }
        // can turn off mic before user joins meeting
        // document.querySelector('.U26fgb.JRY2Pb').click()
    }

    let intervalToCheckIfEveryoneIsMuted = setInterval(() => {
        let jumpballDisplayed;
    // function startAndStopJumpball() {
        // if (!!jumpballBool && youAreMutedBool === true && othersAreMutedArr.every(isTrue) && othersAreMutedArr.length!==0) {

        if (!jumpballDisplayed && youAreMutedBool === true && othersAreMutedArr.every(isTrue) && othersAreMutedArr.length!==0) {
            // attachListenerToStartGameButton()
            jumpballDisplayed = true
            // here keeps on adding jumpballs
            console.log('BBBBBBBBjumpballDisplayed', jumpballDisplayed)
            // clearInterval(intervalToCheckIfEveryoneIsMuted);
            // intervalToCheckIfEveryoneIsMuted()
            // continue
        } 
        if (youAreMutedBool !== true || !othersAreMutedArr.every(isTrue)) { 
            const jumpballSquare = document.querySelector('.square')
            if (!!jumpballSquare) {
                jumpballSquare.style.display = "none" 
            }
            jumpballDisplayed = false
            console.log('JJJJJJjumpballDisplayed', jumpballDisplayed)
            // clearInterval(intervalToCheckIfEveryoneIsMuted);
        }
        
    }, 1000);
    
    // startAndStopJumpball, 1000);
    // add boolean
    

    addObserverIfDesiredNodeAvailableYouAreMuted();
    addObserverIfDesiredNodeAvailableOthersAreMuted();
}, 5000)

function addObserverIfDesiredNodeAvailableYouAreMuted() {
    const youAreMuted = document.querySelector('.JHK7jb.hVsWVc.FTMc0c')
    if (!youAreMuted) {
        window.setTimeout(addObserverIfDesiredNodeAvailableYouAreMuted,500);
        return;
    }
    observerYouAreMuted.observe(youAreMuted, config) 
}

function addObserverIfDesiredNodeAvailableOthersAreMuted() {
    const targetNode2 = document.querySelector('.lMHHZ')
    const secondTargetNodeList = document.querySelectorAll('.lMHHZ')
    if (!targetNode2) {
        window.setTimeout(addObserverIfDesiredNodeAvailableOthersAreMuted,500);
        return;
    }
//? where does this for loop need to be?
// continuously listening if others are muted
    for (let i=0; i<secondTargetNodeList.length; i++) {
        observerOthersAreMuted.observe(secondTargetNodeList[i], config)
    }
}

const attachJumpballText = () => {
    // const toAttachJumpballText = document.querySelector(".knW4sf.OvyUed")
    //  koV58.Zi94Db.S7urwe
    const toAttachJumpballText = document.querySelector(".pHsCke")
    toAttachJumpballText.insertAdjacentHTML('afterend', drawJumpballText())

}

const drawJumpballText = () => {
    return `<div class="jumpball-text">
    <svg width="520" height="120">

  <rect x="0" y="0" width="100" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
  <rect x="50" y="0" width="10" height="80" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
  <rect x="0" y="90" width="40" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
 
  <rect x="110" y="0" width="10" height="80" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="140" y="0" width="10" height="80" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="110" y="90" width="40" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   
   <rect x="170" y="0" width="10" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="190" y="20" width="10" height="30" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="210" y="0" width="10" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   
   <rect x="230" y="0" width="10" height="80" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="230" y="90" width="10" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="240" y="0" width="30" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="240" y="30" width="30" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="270" y="0" width="10" height="40" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   
   <rect x="290" y="0" width="10" height="90" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="290" y="0" width="30" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   
   <rect x="320" y="0" width="10" height="30" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="290" y="30" width="30" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="300" y="80" width="30" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="330" y="30" width="10" height="50" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   
   <rect x="350" y="0" width="10" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="390" y="0" width="10" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="360" y="0" width="30" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="370" y="30" width="10" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   
   <rect x="410" y="0" width="10" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="410" y="90" width="40" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   
   <rect x="460" y="0" width="10" height="100" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
   <rect x="460" y="90" width="40" height="10" style="fill:rgb(0,0,255);stroke-width:3;stroke:rgb(0,0,0)" />
</svg>
    
    </div>`
}