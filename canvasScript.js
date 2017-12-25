function init() {
    var img = new Image();
    img.src = '9.png';
    img.width=100;
    img.height=100;

	var canvas = document.getElementById("kovka");
    canvas.width = 500;
    canvas.height = 500;
    var ctx = canvas.getContext("2d");
   
    
    canvas.onclick = function(){
        ctx.drawImage(img,10,10);
    }
}