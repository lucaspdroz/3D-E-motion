
let voice;
let continuous = true;
let interim = false;

function setup() {
    noCanvas();
    let lang = navigator.language || 'pt-Br';
    // SpeechRec.listVoices();

    voice = new p5.SpeechRec(lang, showResult);

    voice.start(continuous, interim);

    function showResult() {
        if (voice.resultValue) {
            createP(voice.resultString);
        }
    }
}

function toggleContinous() {
    if (continuous == true) {
        continuous = false;
    } else {
        continuous = true;
    }
    console.warn("Continuous = ", continuous);
}

function toggleInterim() {
    if (interim == false) {
        interim = true;
    } else {
        interim = false;
    }
    console.warn("Interim = ", interim);
}

