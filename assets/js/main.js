window.addEventListener('load', function(){
  console.log('DOMContentLoaded')

  var divA       = document.querySelector(".top__child--1");
  var divB       = document.querySelector(".bottom");
  //var arrowLeft  = document.querySelector("#arrowLeft");
  var arrowRight = document.querySelector("#arrowRight");

  function drawConnector() {
    // let posnALeft = {
    //   x: divA.getBoundingClientRect().left - 8,
    //   y: divA.getBoundingClientRect().top  + divA.getBoundingClientRect().height / 2
    // };
    let posnARight = {
      x: divA.getBoundingClientRect().left + divA.getBoundingClientRect().width + 8,
      y: divA.getBoundingClientRect().top  + divA.getBoundingClientRect().height / 2
    };
    // let posnBLeft = {
    //   x: divB.getBoundingClientRect().left - 8,
    //   y: divB.getBoundingClientRect().top  + divB.getBoundingClientRect().height  / 2
    // };
    let posnBRight = {
      x: divB.getBoundingClientRect().left + divB.getBoundingClientRect().width + 8,
      y: divB.getBoundingClientRect().top  + divB.getBoundingClientRect().height / 2
    };
    // var dStrLeft =
    //     "M" +
    //     (posnALeft.x      ) + "," + (posnALeft.y) + " " +
    //     "C" +
    //     (posnALeft.x - 100) + "," + (posnALeft.y) + " " +
    //     (posnBLeft.x - 100) + "," + (posnBLeft.y) + " " +
    //     (posnBLeft.x      ) + "," + (posnBLeft.y);
    //arrowLeft.setAttribute("d", dStrLeft);
    let dStrRight =
        "M" +
        (posnBRight.x      ) + "," + (posnBRight.y) + " " +
        "C" +
        (posnBRight.x + 100) + "," + (posnBRight.y) + " " +
        (posnARight.x + 100) + "," + (posnARight.y) + " " +
        (posnARight.x      ) + "," + (posnARight.y);

    arrowRight.setAttribute("d", dStrRight);
  };

  console.log(divA);
  console.log(divB);
  console.log(arrowLeft)
  console.log(arrowRight);

  $("#a, #b").draggable({
    drag: function(event, ui) {
      console.log(document.querySelector(".top__child--1").getBoundingClientRect().left);
      drawConnector();
    }
  });

  setTimeout(drawConnector, 250);
  /* The setTimeout delay here is only required to prevent
    * the initial appearance of the arrows from being
    * incorrect due to the animated expansion of the
    * Stack Overflow code snippet results after clicking
    * "Run Code Snippet." If this was a simpler website,
    * a simple command, i.e. `drawConnector();` would suffice.
    */
}, false)
