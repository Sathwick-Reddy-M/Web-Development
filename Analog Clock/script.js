setInterval(getTime, 1000)

function getTime() {
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/60;
    const minutes = (seconds + currentDate.getMinutes())/60;
    const hours = (minutes + currentDate.getHours())/12;

    document.querySelector('.second-hand').style.transform = "translateX(50%) rotate("+ seconds*360 + "deg)";
    document.querySelector('.minute-hand').style.transform = "translateX(50%) rotate("+ minutes*360 + "deg)";
    document.querySelector('.hour-hand').style.transform = "translateX(50%) rotate("+ hours*360 + "deg)";
}

getTime();