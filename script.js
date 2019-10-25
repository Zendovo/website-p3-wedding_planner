function fadeOut(targetID) {
    var fadeTarget = document.getElementById(targetID);
    var fadeEffect = setInterval(function() {
        if (!fadeTarget.style.opacity) {
            fadeTarget.style.opacity = 1;
        }
        if (fadeTarget.style.opacity > 0) {
            fadeTarget.style.opacity -= 0.1;
        } else {
            fadeTarget.style.zIndex = "-1";
            clearInterval(fadeEffect);
        }
    }, 50);
}

document.body.style.overflow = "hidden";

setTimeout(function() {
    fadeOut('loading');
    document.body.style.overflow = "visible";
}, 3000);