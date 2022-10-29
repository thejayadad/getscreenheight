
const height = document.getElementById("height")
const width = document.getElementById("width")
const heightavail = document.getElementById("heightavail")
const pixel = document.getElementById("pixel")
const yourHeight = (screen.height);
const yourwidth = (screen.width)
const availheight = (screen.availHeight);
const pixelDepth = (screen.pixelDepth);




function getInfo(){
    height.innerText = yourHeight
    width.innerText = yourwidth
    heightavail.innerText = availheight
    pixel.innerText = pixelDepth

}