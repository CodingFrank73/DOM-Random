
function changeBgColor() {

    const x = ('rgb(' + Math.floor(Math.random() * 257) + ', ' + Math.floor(Math.random() * 257) + ', ' + Math.floor(Math.random() * 257) + ')');

    document.getElementById("bg-main").style.backgroundColor = x;

}