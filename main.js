function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/3i8mCjcLL/model.json', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 225) + 1;
        random_number_g = Math.floor(Math.random() * 225) + 1;
        random_number_b = Math.floor(Math.random() * 225) + 1;
    }

    document.getElementById("result_label").innerHTML = 'I can hear - '+ results[0].label;
    document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"
    document.getElementById("result_confidence").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_r+")"

    img1 = document.getElementById('dance1');
    img2 = document.getElementById('dance2');
    img3 = document.getElementById('dance3');
    img4 = document.getElementById('dance4');

    if (results[0].label == "Clap") {
        img1.src = 'clap_gif.gif';
        img2.src = 'snap_pic.png';
        img3.src = 'tingting_pic.png';
        img4.src = 'backround_pic.png';
    } else if (results[0].label == "Snap") {
        img1.src = 'clap_pic.png';
        img2.src = 'snap_gif.gif';
        img3.src = 'tingting_pic.png';
        img4.src = 'backround_pic.png';
    } else if (results[0].label == "Ting Ting") {
        img1.src = 'clap_pic.png';
        img2.src = 'snap_pic.png';
        img3.src = 'tingting_gif.gif';
        img4.src = 'backround_pic.png';
    }else{
            img1.src = 'clap_pic.png';
            img2.src = 'snap_pic.png';
            img3.src = 'tingting_pic.png';
            img4.src = 'backround_gif.gif';
        }
    }


