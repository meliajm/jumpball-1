// this file runs on page load, and can interact with the DOM


// test to be sure is working an filter domains correctly
// alert("b Hello")

// window.onload = function() {
// 	document.write('Hello world')
// }

const bodyz = document.body
// const tooBadd = document.querySelector('div.jmSZUc')
console.log('hi')
// const body = document.body
const scriptz = document.createElement('script')
scriptz.src = "https://unpkg.com/konva@6.0.0/konva.min.js"
// script.src = "js/konva.min.js"
bodyz.appendChild(scriptz)
// const attachingToThis = document.querySelector('div.XCoPyb')

// google.com
// const attachingToThis = document.getElementById("hdtb-msb")
// const attachingToThis = document.getElementById("NzPR9b")
const attachingToThis = document.querySelector('div.Jrb8ue')
const startGameButton = document.createElement('button')
startGameButton.innerText = 'Start Game'
attachingToThis.appendChild(startGameButton)
// console.log('high')
// const body = document.body
// const script = document.createElement('script')
// script.src = "https://unpkg.com/konva@6.0.0/konva.min.js"
// // script.src = "js/konva.min.js"
// body.appendChild(script)

// const startGameButton = document.getElementById('start-game')

const width = window.innerWidth;
const height = window.innerHeight;
const radius = 70

const stage = new Konva.Stage({
    container: 'hdtbSum',
    width: width,
    height: height
});

const amplitude = 100;
const period = 2000;
// in ms

const layer = new Konva.Layer();

const xPos = getRandomArbitrary(2*radius, width-2*radius)
const yPos = getRandomArbitrary(0, height)
console.log('x and y', xPos, yPos)
const circle = new Konva.Circle({
    x: xPos,
    y: yPos,
    radius: radius,
    fill: 'orange',
    stroke: 'black',
    strokeWidth: 4
});

const line = new Konva.Line({
    x: xPos,
    y: yPos-radius,
    points: [0, 0, 0, 2*radius],
    stroke: 'black',
    strokeWidth: 4,
})

const lineCurveLeft = new Konva.Line({
    x: xPos,
    y: yPos-radius,
    points: [-radius+8, radius/2, -radius/2, radius, -radius+7, radius+radius/2],
    stroke: 'black',
    strokeWidth: 4,
    tension: 0.5
})

const lineCurveRight = new Konva.Line({
    x: xPos+2*radius-radius/4,
    y: yPos-radius,
    points: [-radius+8, radius/2, -radius/2-radius+10, radius, -radius+7, radius+radius/2],
    stroke: 'black',
    strokeWidth: 4,
    tension: 0.5
})

layer.add(circle);
layer.add(line)
layer.add(lineCurveLeft)
layer.add(lineCurveRight)

stage.add(layer);

function attachListenerToStartGameButton() {
    startGameButton.addEventListener('click', handleStartGameClick)  
}

function handleStartGameClick(e) {
    console.log( 'you started jumpball')
    console.log('event', e)
}

// function handleStartGameClick(e) {
//     e.preventDefault()
//     startJumpBall()
// }

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

function startJumpBall() {
    console.log('jumpball!', window.innerHeight)


    const anim = new Konva.Animation(function (frame) {
    circle.y(
        amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + 5*radius
    );
    line.y(
        amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + 4*radius
    );
    lineCurveLeft.y(
        amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + 4*radius
    );
    lineCurveRight.y(
        amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + 4*radius
    );
    }, layer);
    

    anim.start()

    circle.on('click', function () {
       console.log('you are unmuted now')
    });
    line.on('click', function () {
        console.log('you are unmuted now')
    });
    lineCurveLeft.on('click', function () {
        console.log('you are unmuted now')
    });
    lineCurveRight.on('click', function () {
        console.log('you are unmuted now')
    });

}

attachListenerToStartGameButton()


for (let i=0; i<a.length; i++) {
    if (what(a[i])===true) {
        return true
    } else {
        return false
    }
}




// TODO: only begin when meeting starts (not on page load)
// TODO: figure out muting people

// Refused to load the script 'https://unpkg.com/konva@6.0.0/konva.min.js' because it violates the following Content Security Policy directive: "script-src 'report-sample' 'nonce-hSQ5O3DSmcwiYOW9PG85tw' 'unsafe-inline' 'unsafe-eval'". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.

// (anonymous) @ VM9798:4
// VM9798:4 Refused to load the script 'https://unpkg.com/konva@6.0.0/konva.min.js' because it violates the following Content Security Policy directive: "script-src 'nonce-hSQ5O3DSmcwiYOW9PG85tw' 'self' 'unsafe-eval' https://apis.google.com https://ssl.gstatic.com https://www.google.com https://www.gstatic.com https://www.google-analytics.com https://youtube.googleapis.com https://youtube.com https://s.ytimg.com https://www.youtube.googleapis.com". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
