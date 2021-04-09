function setup() {
    canvas = createCanvas(270, 270);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    classifier = ml5.imageClassifier('https://storage.googleapis.com/tm-model/kkJRGlo3T/model.json', modelLoaded);
}

function modelLoaded() {
    console.log('Model Loaded');
}

function draw() {
    image(video, 0, 0, 270, 270);
    classifier.classify(video, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("object").innerHTML = results[0].label;
        document.getElementById("accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}