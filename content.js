// add event listener to you are muted

let intervalToCheckIfJoined = setInterval(() => {
    const checkIfJoinedElement = document.querySelector(".Jrb8ue")
    if (!!checkIfJoinedElement) {
      console.log("joined meeting!")
    //   attachListenerToStartGameButton()      
      clearInterval(intervalToCheckIfJoined)
  

// const youAreMuted = document.querySelector('.JHK7jb.hVsWVc')
const targetNode = document.querySelector('.JHK7jb.hVsWVc')

// const targetNode = document.querySelector(".Jrb8ue")

// const targetNode = document.querySelector(".Jrb8ue")

console.log('test')

// const nodeListOthersNotMuted = document.querySelectorAll('.lMHHZ.gtgjre.pZFrDd')

// Select the node that will be observed for mutations
// const targetNode = document.getElementById('some-id');

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
// observer.disconnect();

}
},1000)

// add event listener to all other users muted



// // if all users are muted then start a jumpball, users play game to get ball, once one user is unmuted, jumpball stops


// console.log('go')

// // if all others are muted this Node List is empty
// const nodeListOthersNotMuted = document.querySelectorAll('.lMHHZ.gtgjre.pZFrDd.kssMZb')
// // equals lenght 1 in both meet types (clock vs no clock)
// const youAreMuted = document.querySelectorAll('.JHK7jb.hVsWVc.FTMc0c')


// // need to keep checking this condition
// if (nodeListOthersNotMuted.length===0 && youAreMuted.length===1) {
//     attachListenerToStartGameButton()
// }

// const numberOfPeopleInMeeting = parseInt(document.querySelector(".wnPUne.N0PJ8e"))

// const consoleLogMeetingMembersNames = document.querySelectorAll(".epqixc.YUGmGb").forEach( div => console.log(div.innerText))


// // openPeopleButton = document.querySelector("div.uArJ5e.UQuaGc.kCyAyd.kW31ib.foXzLb.M9Bg4d").click()
// // muteOne = document.querySelectorAll("span.XuQwKc")[1].click()

// const attachListenerToStartGameButton = () => {
//     console.log('attachListenerToStartGameButton')
//     const attachingToThis = document.querySelector('div.Jrb8ue')
//     const startGameButton = document.createElement('button')
//     startGameButton.innerText = 'Start Game!'
//     startGameButton.id = 'start-game'
//     attachingToThis.appendChild(startGameButton)
//     startGameButton.addEventListener('click', handleStartGameClick)  
//     startGameButton.click()
// }

// const handleStartGameClick = (e) => {
//     const startGameButton = document.getElementById('start-game')
//     console.log( 'you started jumpball')
//     console.log('event', e)
//     startGameButton.style.display = "none"
//     attachCircle()
// }

// const attachCircle = () => {
//     const startGameButton = document.getElementById('start-game')
//     startGameButton.insertAdjacentHTML('afterend', drawCircle())
//     attachListenerToJumpball()
// }

// const drawCircle = () => {

//     const percentCompleted = 100
    
//     return `<div class="square">
//     <svg class="circular-chart" width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">
//         <circle cx="75" cy="75" r="30" fill="orange" stroke-width="5"/>
//         <line x1="75" x2="75" y1="45" y2="105" stroke="black" stroke-width="5"/>
//         <path d="M 55 55 C 55 55, 75 75, 55 100" stroke="black" stroke-width="5" fill="transparent"/>
//         <path d="M 95 55 C 95 55, 75 75, 95 100" stroke="black" stroke-width="5" fill="transparent"/>

//     </svg>
    
//     </div>`
// }

// {/* <svg x="45" y="45" viewBox="0 0 36 36" class="circular-chart">
//     <path class="circle"
//     stroke-dasharray="${percentCompleted}, 100"
    
//     d="M18 2.0845
//     a 15.9155 15.9155 0 0 1 0 31.831
//     a 15.9155 15.9155 0 0 1 0 -31.831"
//     />
//     </svg> */}

// function attachListenerToJumpball() {
//     const jumpball = document.querySelector('.circular-chart')
//     jumpball.addEventListener('click', handleJumpball)  
// }

// const handleJumpball = (event) => {
//     console.log("you've got the jumpball")
//     const startGameButton = document.getElementById('start-game')
//     const jumpballSquare = document.querySelector('.square')
//     document.querySelector('.U26fgb.JRY2Pb').click()
//     jumpballSquare.style.display = "none"
//     startGameButton.style.display = "block"
// } 

// let intervalToCheckIfJoined = setInterval(() => {
//     const checkIfJoinedElement = document.querySelector(".Jrb8ue")
//     if (!!checkIfJoinedElement) {
//       console.log("joined meeting!")
//       attachListenerToStartGameButton()      
//       clearInterval(intervalToCheckIfJoined)
//     }
//   },1000)


