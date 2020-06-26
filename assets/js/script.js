// Current Time //
const getDateAndTime = () => {
    let dateAndTime = moment().format("dddd, MMMM Do YYYY, h:mm a");
    dateElement.innerHTML = dateAndTime;
}

// Selectors //

const dateElement = document.getElementById('date');
const saveElements = document.getElementsByClassName('save');
const contentElements = document.getElementsByClassName('content');
const nineAM = document.getElementById('9');
const tenAM = document.getElementById('10');
const elevenAM = document.getElementById('11');
const twelvePM = document.getElementById('12');
const onePM = document.getElementById('1');
const twoPM = document.getElementById('2');
const threePM = document.getElementById('3');
const fourPM = document.getElementById('4');
const fivePM = document.getElementById('5');

// Selectors //