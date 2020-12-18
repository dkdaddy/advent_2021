const images = [
    'bells',
    'reindeer',
    'sack',
    'santa',
    'snowman',
    'stocking',
    'santa2',
    'present',
    'penguin',
    'bells',
    'reindeer',
    'sack',
    'santa',
    'snowman',
    'stocking',
    'santa2',
    'present',
    'penguin',
    'bells',
    'reindeer',
    'sack',
    'santa',
    'snowman',
    'stocking',
    'santa2',
    'present',
    'penguin',
];
const james = [
    `dec1j.jpg`,
    `dec2j.jpg`,
    `dec3j.jpg`,
    `d4j.jpg`,
    `j5.jpg`,
    `Try not to get squashed`,
    `Just ask Alexa`,
    `The Secret Kingdom`,
    'toy.jpg',
    `met.jpg`,
    `Santa may have a squeeze`,
    `Shikamaru's Battle`,
    `How smart are E&T?`,
    `Study very small metals    `,
    `too small to print`,
    `dec3b.jpg`,
    `Mischief Brew 3rd time around`,
    `Wow! It's a Hammer Horrer`
];
const ben = [
    `Bon Jovi drummer ! 174471`,
    'dec2b.jpg',
    'dec3b.jpg',
    'Are you sitting comfortably? With harmony, intelligence and wisdom',
    'b5.jpg',
    'Hello Tosh',
    `Just ask Alexa`, 
    'toy.jpg',
    `After Polythene Pam? Try Abbey Road`,
    `flav.jpg`,
    `Oh, the Lacoste Borie!`,
    `Hiding deep in 13`,
    `fila`,
    `When is a door not a door?`,
    `fix a puncture on the turbo`,
    `Where Forrest Gump follows Silence of the Lambs`,
    `Bill Haley April 1954`,
    `Bill Haley November 1954`
];
function getImage(day) {
    return `./media/${images[day - 1]}.webp`;
}
function getClue(day) {
    const now = new Date();
    const today = now.getDate();
    const month = now.getMonth();
    if (month<11 || day>today) 
        return ''; // no clue until the day
    const href = window.location.href;
    const clues = href.indexOf('james') > 0 ? james : ben;
    return clues[day - 1];
}
function load() {
    console.log('loaded', window.location.href);
    var calendar = document.getElementById('container');

    const ROWS = 4;
    const COLS = 6;
    let html = '';
    let day = 1;
    for (let r = 0; r < ROWS; r++) {
        html += `<div class="row">`;
        for (let c = 0; c < COLS; c++) {
            const day = 1+c+r*COLS;
            html += `<div class="flip-container" onClick="play(${2});event.stopPropagation();">`;
            html += `<div class="flipper">`;
            html += `<div class="front">`;
            html += `<img src="${getImage(day)}" height='180px' width='180px'></img>`;
            html += `<div class='day_of_month'>${day}</div>`;
            html += `</div>`;
            html += `<div class="back">`;
            const clue = getClue(day);
            if (clue) {
                if (clue.indexOf('.jpg')>0 || clue.indexOf('.png')>0 ) 
                    html += `<img src="./media/${clue}" height='180px' width='180px'></img>`;
                else
                    html += `<div class='clue'>${clue}</div>`;
            }
            else {
                html += `<img src="./media/under-construction.png" height='180px' width='180px'></img>`;
            }
            html += `</div>`;
            html += `</div>`;
            html += `</div>`;
        }
        html += `</div>`;
    }
    calendar.innerHTML = html;
}
function play(n) {
    console.log('play');
    document.getElementById("my_audio" + n).play();
}