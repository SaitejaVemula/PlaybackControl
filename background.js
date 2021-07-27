let videos = document.getElementsByTagName("video");

let slider = document.createElement("input");
slider.setAttribute("type", "range");
slider.setAttribute("min",    "0.1");
slider.setAttribute("max",    "2.5");
slider.setAttribute("value",    "1");
slider.setAttribute("step",    "0.1");
slider.setAttribute("id",  "slider");

let speed = document.createElement("p");
speed.innerText = "1.0"
speed.style.fontSize = "18px";
speed.style.position = "fixed";
speed.style.zIndex = "99999999";
speed.style.bottom = "100px";
speed.style.right = "70px";
speed.style.background = "rgba(0,0,0,0.5)";
speed.style.color = "white";
speed.style.fontWeight = "bold";
speed.style.borderRadius = "60px";
speed.style.padding = "10px";
speed.style.margin = "0px";
document.body.appendChild(speed);

document.body.appendChild(slider);
slider.style.position = "fixed";
slider.style.zIndex = "99999999";
slider.style.bottom = "50px";
slider.style.right = "50px";
slider.style.width = "150px";

slider.addEventListener("change", changePlayback);

function changePlayback() {
    videos = document.getElementsByTagName("video");
    for(video of videos) {
        video.playbackRate = slider.valueAsNumber;
    }

    speed.innerText = slider.valueAsNumber;
}