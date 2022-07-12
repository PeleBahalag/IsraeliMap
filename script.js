let videoElement;
let vidSource;
let lastLogo;
let globeBtn;
let img;

let srcs = ["tzriffin-pin", "bahalag-pin", "277-pin", "727-pin", "47-pin", "33-pin", "414-pin", "636-pin", "41-pin", "869-pin", "595-pin"];

window.addEventListener("load", () => {
    videoElement = document.getElementById("vid");
    vidSource = document.getElementById("source-vid");
    lastLogo = document.getElementById("tzriffin");
    globeBtn = document.getElementById("globe");
    img = document.getElementById("imgisrael");
    startUp();
});

const startUp = () => {
    videoElement.style.display = 'block';
    img.style.display = 'none';
    // get all the gdoods
    let gdoodim = document.getElementsByClassName("logos");
    for (let i = 0; i < gdoodim.length; i++) {
        gdoodim[i].addEventListener("click", function() {
            changeGdood(i);
        });
    }

    // Set up the globe button
    globeBtn.addEventListener("click", map);

}

const map = () => {
    lastLogo.classList.remove("selected-logo");
    vidSource.setAttribute("src", ``);
    videoElement.load();
    videoElement.style.display = 'none';
    img.style.display = 'block';

}

const changeGdood = (i) => {
    videoElement.style.display = 'block';
    img.style.display = 'none';
    // Change the visibility class on the logos above
    lastLogo.classList.remove("selected-logo");
    event.currentTarget.classList.add("selected-logo");
    lastLogo = event.currentTarget;

    // Change src for video
    vidSource.setAttribute("src", `./assets/animations/${srcs[i]}.mp4`);
    videoElement.load();
}