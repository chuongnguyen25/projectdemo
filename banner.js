var j = 0;
var im = [];
im[0] = 'IMG/banner.jpg';
im[1] = 'IMG/banner1.jpg';
im[2] = 'IMG/banner2.jpg';
var time = 2500;
var names = [];
names[0] = '☺♥ GAME ONLINE ♥♥♥ GAME ONLINE ♥♥♥ GAME ONLINE ♥☺';
names[1] = 'DESIGN - &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ♥ CHUONG NGUYEN ♥ &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp - DESIGN';
names[2] = 'DESIGN - &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp ♥ VIET MUI ♥ &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp - DESIGN';
function banner() {
    document.banner.src = im[j];
    document.getElementById('caption').innerHTML = names[j];
    var text = document.getElementById("caption");
    if(j < images.length - j){
        j++;
    }
    else
    {
        j = 0;
    }
    setTimeout("banner()", time);
}
window.onload = banner();