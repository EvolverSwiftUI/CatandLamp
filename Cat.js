function switchOff() {
    console.log("Switch Off")
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png";
    document.getElementById("switchStatus").textContent = "Switched Off"
    document.getElementById("onSwitch").style.backgroundColor = "#22c55e"
    document.getElementById("offSwitch").style.backgroundColor = "#cbd2d9"
}

function switchOn() {
    console.log("Switch On")
    document.getElementById("bulbImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png";
    document.getElementById("catImage").src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png";
    document.getElementById("switchStatus").textContent = "Switched On"
    document.getElementById("onSwitch").style.backgroundColor = "#cbd2d9"
    document.getElementById("offSwitch").style.backgroundColor = "#e12d39"
}