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
    `Indian dress 860679`,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
   
];
const ben = [
    `Rain in Spain`,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
   
];
const deb = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    'd4j.jpg',
    '12.2cm does not seem far to wave',
    `jan.jpg`, // wine - manicure
    `photo488535.jpg`, // hidden cupboard - bath bombs
    `j1.jpg`, // clock - olay
    `vous aurez besoin d'un tonique`  // book - gin
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
    const clues = href.indexOf('deb') > 0 ? deb : (href.indexOf('james') > 0 ? james : ben);
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
