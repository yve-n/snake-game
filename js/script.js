window.onload = function()            // fonction js qui va etre lancé qd la fenetre va s'afficher
{  

    var canvasWidth = 900;
    var canvasHeight = 600;
    var blockSize = 30;
    var ctx;
    var delay = 100;
    var xcoord = 0;
    var ycoord = 0;

    init();

    function init()
    {
        var canvas = document.createElement('canvas');  //canvas = elt html qui permet de dessiner
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        canvas.style.border = "1px solid";
        document.body.appendChild(canvas);  // appenchild(canvas) attache le canvas à notre html
      
        ctx = canvas.getContext('2d');
        refreshCanvas();

    }
    
    function refreshCanvas()
    {   xcoord += 5;
        ycoord += 5;
        ctx.fillStyle = "#ff0000";
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        ctx.fillRect(xcoord, ycoord, 100, 50); 
        setTimeout(refreshCanvas, delay);

    }
    
   
  
}                       