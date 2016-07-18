function colorfulBalloon(n, max, min) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.borderRadius = "50%";
    balloon.style.position = "fixed";
    balloon.style.zIndex = "-1";

    for (var i = 0; i < n; i++) {
        var balloonClone = balloon.cloneNode();
        balloonClone.style.backgroundColor = "hsla(" + Math.random() * 360 + ", 50%, 50%, .2)";
        var size = Math.random() * (max - min) + min;
        balloonClone.style.top = "calc(" + -1 * size * Math.random() + "px + " + Math.random() * 100 + "%)";
        balloonClone.style.left = "calc(" + -1 * size * Math.random() + "px + " + Math.random() * 100 + "%)";
        balloonClone.style.width = size + "px";
        balloonClone.style.height = size + "px";
        document.body.appendChild(balloonClone);
    };

}

colorfulBalloon(10, 550, 50);