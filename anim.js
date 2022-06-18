
  var str=[" Bonjour, Nanou. ","Une peu considération,","une petite pensée pour les autres,","Fait toute la différence.","Joyeux anniversaire ma Super Nanou ❤"];
  var pos=0,a=0;
  var html="";
    function displayText(){
    
      //console.log("entered");
      //$(".text-change").html(str[pos++]);  
      if(pos>4)pos=0;
      
          //console.log("entered loop")
          if(a<str[pos].length)
          {
            html+=str[pos].charAt(a);
            $(".text-change").html(html);
            a++;
          }
      else {
        a=0;
        pos++;
        html="";
      }
          //console.log("done"); 
     }
     setTimeout(setInterval(displayText,150),2000);
var colors = ["#8b5642", "#6a696b"];

function frame() {
  confetti({
    particleCount: 2,
    angle: 60,
    spread: 55,
    origin: { x: 0 },
    colors: colors,
  });
  confetti({
    particleCount: 2,
    angle: 120,
    spread: 55,
    origin: { x: 1 },
    colors: colors,
  });

  if (Date.now() < Date.now() + 15000) {
    requestAnimationFrame(frame);
  }
}

window.onload = frame();