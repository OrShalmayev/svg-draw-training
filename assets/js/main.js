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

/** MIAMI **/


$(document).ready(function() {
    // Check if this element exists in the DOM
    if( document.querySelector('.the-power__boxes') ) {

      $(document).on('click', '.the-power__box', function() {
        let box = $(this)
        console.log(box)
        if(box.hasClass('active')) {
          return
        } else {
          const mq = window.matchMedia( '(max-width: 578px)' );

          if(!mq.matches) {

            box.siblings().removeClass('active')
            box.addClass('active')
            let panel = box.data('panel')
            let p = $(`div#${panel}.the-power-content`)
            p.siblings().removeClass('active')
            p.addClass('active')
            // console.log(p);
          } else { ////resolution mobile
            let mobPanel = box.data('mob');
            let arrowPanel = box.data('arrow');
            let m = $(`div#${mobPanel}.the-power__boxes`); /// add class 'active' to the-power__box
            let m2 = $(`div#${mobPanel}.the-power__box--desc`)/// add class 'active'
            let arrow = $(`#${arrowPanel}.the-power__box--arrow`)
            box.siblings().removeClass('active');
            box.addClass('active');
            arrow.addClass('active')
            m.siblings().removeClass('active');
            m.addClass('active');
            m2.addClass('active');
          }
        }
      });//END $(document).on('click', '.the-power__box',
    }//END if( document.querySelector('.the-power__boxes') )

    /**
     * POPUP
    */
    toggle();

    $('.popup-right-close').click(function() {
      $('.popup').fadeOut()
    })
    /**
     * Future section logic
     */
    // if the user is clicking the checkbox then update the value in the msg hidden fields
    const msgField = $('[name="msg"]');
    $('[data-text]').click(function(){
      // let text = $(this).data('text');
      let parent = $('.future__list-wrapper');
      // on clicking a checkbox detect which one is check and inset it to the hidden field
      $(parent).find('[data-text]:checked').each(function(indx, elm){//checking for checked inputs
        if (indx===0) {//if were in the first checked elment we want to remove previous data
          $(msgField).val($(elm).data('text'));
        } else {// were in the next index we can append text
          $(msgField).val(function(i, v){
            return v + $(elm).data('text');
          });
        }
      });//END each
    });//END $('[data-text]').click

    /**
     * CTA
    */
    m_actions();


    // MOVING ARROW FUNCTION //

  const staticBox       = document.querySelector(".the-power__desc");
  const dynamic_box_default_class = '.the-power__box--0';
  const line = document.querySelector("#line");
  const plus = $("#plus");
  const desk = window.matchMedia( '(max-width: 1431px)' );
  const md = window.matchMedia( '(max-width: 768px)' );

  function drawConnector(box = dynamic_box_default_class) {
    let dynamicBox       = $(box)[0]

    let curve = 110
    
    let lineOffset = 20

    if(md.matches) {
      lineOffset = 42
      curve = 70
    } else if(desk.matches) {
      lineOffset = 36
      curve = 80
    }

    
    
    let arrowSymbol = {//where the plus at
      x: dynamicBox.offsetLeft + dynamicBox.offsetWidth ,
      y: dynamicBox.offsetTop  + dynamicBox.offsetHeight - lineOffset
    };
    
    let lineStart = {//where the line starts
      x: staticBox.offsetLeft + staticBox.offsetWidth / 2,
      y: staticBox.offsetTop -70
    };

    
    
    let dStrRight =
        "M" +
        // c= cordinates
        // c of  X            ||        c of Y
        (lineStart.x      ) + "," + (lineStart.y) + " " +
        "C" +
        // c of X on the middle line  || c of Y on the middle line
        (lineStart.x  ) + "," + (lineStart.y - curve) + " " +
        (arrowSymbol.x ) + "," + (arrowSymbol.y + curve) + " " +
        (arrowSymbol.x  ) + "," + (arrowSymbol.y);

        console.log(dStrRight)
    line.setAttribute("d", dStrRight);
    
    plus.css('left', dynamicBox.offsetLeft + dynamicBox.offsetWidth -17)
    
  };

  window.addEventListener('load', function(){

    drawConnector();
  },false)

  window.onresize = function() {
    drawConnector();
  }

  // when clicking the box draw again with the function and change the lement
  $('.the-power__box').each(function(idx, elm){
    // console.log(elm)
    $(elm).click(function(){
      // console.log(this)
      drawConnector(this);
    });
  });
 
});
