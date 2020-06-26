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


//Planner Function//
const initPlanner = () => {
    updateContent();
    getDateAndTime();
    checkTimes();
}

//Planner Function//

//Local Storage//

const saveNine = document.getElementById('save9');
const saveNineField = () => {
    let nineAMText = nineAM.value;
    localStorage.setItem("nine", nineAMText);
}

const saveTen = document.getElementById('save10');
const saveTenField = () => {
    let tenAMText = tenAM.value;
    localStorage.setItem("ten", tenAMText);
}

const saveEleven = document.getElementById('save11');
const saveElevenField = () => {
    let elevenAMText = elevenAM.value;
    localStorage.setItem("eleven", elevenAMText);
}

const saveTwelve = document.getElementById('save12');
const saveTwelveField = () => {
    let twelvePMText = twelvePM.value;
    localStorage.setItem("twelve", twelvePMText);
}

const saveOne = document.getElementById('save1');
const saveOneField = () => {
    let onePMText = onePM.value;
    localStorage.setItem("one", onePMText);
}

const saveTwo = document.getElementById('save2');
const saveTwoField = () => {
    let twoPMText = twoPM.value;
    localStorage.setItem("two", twoPMText);
}

const saveThree = document.getElementById('save3');
const saveThreeField = () => {
    let threePMText = threePM.value;
    localStorage.setItem("three", threePMText);
}

const saveFour = document.getElementById('save4');
const saveFourField = () => {
    let fourPMText = fourPM.value;
    localStorage.setItem("four", fourPMText);
}

const saveFive = document.getElementById('save5');
const saveFiveField = () => {
    let fivePMText = fivePM.value;
    localStorage.setItem("five", fivePMText);
}

//Local Storage//


//LS Event Listeners//
saveNine.addEventListener("click", saveNineField);
saveTen.addEventListener("click", saveTenField);
saveEleven.addEventListener("click", saveElevenField);
saveTwelve.addEventListener("click", saveTwelveField);
saveOne.addEventListener("click", saveOneField);
saveTwo.addEventListener("click", saveTwoField);
saveThree.addEventListener("click", saveThreeField);
saveFour.addEventListener("click", saveFourField);
saveFive.addEventListener("click", saveFiveField);
//Event Listeners//


let toDoList = [];



// String Inserts//
const updateContent = () => {
    nineAM.innerHTML = localStorage.getItem("nine");
    tenAM.innerHTML = localStorage.getItem("ten");
    elevenAM.innerHTML = localStorage.getItem("eleven");
    twelvePM.innerHTML = localStorage.getItem("twelve");
    onePM.innerHTML = localStorage.getItem("one");
    twoPM.innerHTML = localStorage.getItem("two");
    threePM.innerHTML = localStorage.getItem("three");
    fourPM.innerHTML = localStorage.getItem("four");
    fivePM.innerHTML = localStorage.getItem("five");
}

// String Inserts//


// Row Color Validations//

const checkTimes = () => {
    let currentTime = moment().hour();
    if (currentTime >= 9 && currentTime < 10) {
        nineAM.style.background = "#ff6961";
    } else if (currentTime >= 10 && currentTime < 11) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#ff6961";
    } else if (currentTime >= 11 && currentTime < 12) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#ff6961";
    } else if (currentTime >= 12 && currentTime < 13) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#d3d3d3";
        twelvePM.style.background = "#ff6961";
    } else if (currentTime >= 13 && currentTime < 14) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#d3d3d3";
        twelvePM.style.background = "#d3d3d3";
        onePM.style.background = "#ff6961";
    } else if (currentTime >= 14 && currentTime < 15) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#d3d3d3";
        twelvePM.style.background = "#d3d3d3";
        onePM.style.background = "#d3d3d3";
        twoPM.style.background = "#ff6961";
    } else if (currentTime >= 15 && currentTime < 16) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#d3d3d3";
        twelvePM.style.background = "#d3d3d3";
        onePM.style.background = "#d3d3d3";
        twoPM.style.background = "#d3d3d3";
        threePM.style.background = "#ff6961";
    } else if (currentTime >= 16 && currentTime < 17) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#d3d3d3";
        twelvePM.style.background = "#d3d3d3";
        onePM.style.background = "#d3d3d3";
        twoPM.style.background = "#d3d3d3";
        threePM.style.background = "#d3d3d3";
        fourPM.style.background = "#ff6961";
    } else if (currentTime >= 17 && currentTime < 18) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#d3d3d3";
        twelvePM.style.background = "#d3d3d3";
        onePM.style.background = "#d3d3d3";
        twoPM.style.background = "#d3d3d3";
        threePM.style.background = "#d3d3d3";
        fourPM.style.background = "#d3d3d3";
        fivePM.style.background = "#ff6961";
    } else if (currentTime >= 18) {
        nineAM.style.background = "#d3d3d3";
        tenAM.style.background = "#d3d3d3";
        elevenAM.style.background = "#d3d3d3";
        twelvePM.style.background = "#d3d3d3";
        onePM.style.background = "#d3d3d3";
        twoPM.style.background = "#d3d3d3";
        threePM.style.background = "#d3d3d3";
        fourPM.style.background = "#d3d3d3";
        fivePM.style.background = "#d3d3d3";
    }

}

// Row Color Validations//

initPlanner();