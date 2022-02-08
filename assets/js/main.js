
function changeBgColor() {

    const x = ('rgb(' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ', ' + Math.floor(Math.random() * 255) + ')');

    document.getElementById("bg-main").style.backgroundColor = x;

}