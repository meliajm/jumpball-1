// const youAreMuted = document.querySelectorAll('.JHK7jb.hVsWVc.FTMc0c')
// if true then you are muted, else not muted

// function checkIfYouAreMuted() { !!youAreMuted[0].classList[2] ? console.log('you are muted') : console.log('you are not muted')}
// setInterval(checkIfYouAreMuted, 1000)

// make toggle

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
      let interalToCheckYouAreMuted = setInterval(() => {
        // const nodeListOthersNotMuted = document.querySelectorAll('.lMHHZ.gtgjre.pZFrDd.kssMZb')
        const youAreMuted = document.querySelectorAll('.JHK7jb.hVsWVc')
        let aBool = 0
        const youMuteBool = !!youAreMuted[0].classList[2] ? true : false
        console.log(youMuteBool)
        if (youMuteBool===true) {
            aBool+=1
        }
        console.log(aBool)
        // function checkIfYouAreMuted() { !!youAreMuted[0].classList[2] ? true : false}
        // console.log(aBool)
        // if (!!youAreMuted.length[0].classList[2]){ 
        //     console.log('you are muted')
            // console.log('everyone is muted')
            
            
        // } 
        // else {
        //     // const jumpball = document.querySelector('.square')
        //     console.log('somebody needs to mute')
        //     // jumpball.style.display = "none"
        // }
        clearInterval(interalToCheckYouAreMuted)
      },1000)
      clearInterval(intervalToCheckIfJoined)
    }
},1000)