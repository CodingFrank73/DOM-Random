
function changeBgColor() {

    const x = ('rgb(' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ', ' + Math.floor(Math.random() * 256) + ')');

    document.getElementById("bg-main").style.backgroundColor = x;

}