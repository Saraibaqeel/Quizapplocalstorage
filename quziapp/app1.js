



var ctx1 = document.getElementById('progress1').getContext('2d'),
    ctx2 = document.getElementById('progress2').getContext('2d'),
    ctx3 = document.getElementById('progress3').getContext('2d');
 var mark=window.localStorage.getItem("mark")
 if(mark<7){
    var color="red";
 }
 else{
    color="green";
 }
draw(ctx1,color,mark*10,'HTML');  
draw(ctx2,'red', 0,'CSS'); 
draw(ctx3,'red', 0,'JS');
    
if(mark>7){
    document.getElementById("name").innerHTML="Congrats"+" " + window.localStorage.getItem("name")+" "+ "Passed"
}
else{
    document.getElementById("name").innerHTML="Sorry"+ " "+window.localStorage.getItem("name")+ " "+"Failed! Better Luck Next Time!"
    
    document.getElementById("name").innerHTML+=`<a href="quizes.html"><button style="background-color:#3f4964; color:white; margin-top:4%;"  class="button start-quiz">Try Again</button></a>`
}

function draw(ctx,color,prec,text){
    var    al  = 0;
    var    start = 4.72;
    var    cw  = ctx.canvas.width;
    var    ch  = ctx.canvas.height;
    var    diff;
    
    function progressSim(){
      diff = ((al / 100) * Math.PI*2*10).toFixed(2);
      ctx.clearRect(0, 0, cw, ch);
      ctx.lineWidth = 10;
      ctx.fillStyle = color;
      ctx.strokeStyle = color;
      ctx.textAlign = 'center';
      ctx.fillText(al + '%', cw*.5, ch*.45+2, cw);
        ctx.fillText(text, cw*.5, ch*.55+2, cw);
      ctx.beginPath();
      ctx.arc(50, 50, 40, start, diff/10+start, false);
      ctx.stroke();
      if(al >= prec){
        clearTimeout(sim);
      }
      al++;
    }
var sim = setInterval(progressSim, 50);
} 