window.addEventListener('load', function(){//only after css loaded
  console.log('DOMContentLoaded')

  const staticBox       = document.querySelector(".bottom");
  const dynamic_box_default_class = '.top__child--1';
  //const arrowLeft  = document.querySelector("#arrowLeft");
  const arrowRight = document.querySelector("#arrowRight");

  function drawConnector(box = dynamic_box_default_class) {
    let dynamicBox       = $(box)[0];

    // let posnALeft = {
    //   x: divA.getBoundingClientRect().left - 8,
    //   y: divA.getBoundingClientRect().top  + divA.getBoundingClientRect().height / 2
    // };
    let arrowSymbol = {//where the is at
      x: dynamicBox.getBoundingClientRect().left + dynamicBox.getBoundingClientRect().width + 8,
      y: dynamicBox.getBoundingClientRect().top  + dynamicBox.getBoundingClientRect().height
    };
    // let posnBLeft = {
    //   x: staticBox.getBoundingClientRect().left - 8,
    //   y: staticBox.getBoundingClientRect().top  + staticBox.getBoundingClientRect().height  / 2
    // };
    let lineStart = {//where the line starts
      x: staticBox.getBoundingClientRect().left + staticBox.getBoundingClientRect().width / 2,
      y: staticBox.getBoundingClientRect().top
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
        // c= cordinates
        // c of  X            ||        c of Y
        (lineStart.x      ) + "," + (lineStart.y) + " " +
        "C" +
        // c of X on the middle line  || c of Y on the middle line
        (lineStart.x - 60) + "," + (lineStart.y) + " " +
        (arrowSymbol.x + 50) + "," + (arrowSymbol.y) + " " +
        (arrowSymbol.x  ) + "," + (arrowSymbol.y);

    arrowRight.setAttribute("d", dStrRight);
  };
  drawConnector();
  // $("#a, #b").draggable({
  //   drag: function(event, ui) {
  //     console.log(document.querySelector(".top__child--1").getBoundingClientRect().left);
  //   }
  // });

  // when clicking the box draw again with the function and change the lement
  $('.top__child').each(function(idx, elm){
    console.log(elm)
    $(elm).click(function(){
      console.log(this)
      drawConnector(this);
    });
  });
  // console.log(dynamicBox);
  // console.log(divB);
  // console.log(arrowLeft)
  // console.log(arrowRight);

}, false)
