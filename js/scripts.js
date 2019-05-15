$(document).ready(function() {

  $('.column').on({
    mouseenter: function(){
      $('.footnote').css({
        '-webkit-transform' : 'translateY(0vh)',
        '-moz-transform'    : 'translateY(0vh)',
        '-ms-transform'     : 'translateY(0vh)',
        '-o-transform'      : 'translateY(0vh)',
        'transform'         : 'translateY(0vh)',
        'transition': 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'
      }),

      $('.title').css({
        '-webkit-transform' : 'translateY(0vh)',
        '-moz-transform'    : 'translateY(0vh)',
        '-ms-transform'     : 'translateY(0vh)',
        '-o-transform'      : 'translateY(0vh)',
        'transform'         : 'translateY(0vh)',
        'transition': 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'
      }),

      $('.crip').css({
        'opacity' : '1',
        'transition' : 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'
      })
    },


    mouseleave: function(){
      $('.footnote').css({
        '-webkit-transform' : 'translateY(-40px)',
        '-moz-transform'    : 'translateY(-40px)',
        '-ms-transform'     : 'translateY(-40px)',
        '-o-transform'      : 'translateY(-40px)',
        'transform'         : 'translateY(-40px)',}),

      $('.title').css({
        '-webkit-transform' : 'translateY(40px)',
        '-moz-transform'    : 'translateY(40px)',
        '-ms-transform'     : 'translateY(40px)',
        '-o-transform'      : 'translateY(40px)',
        'transform'         : 'translateY(40px)'
      }),

      $('.crip').css({
        'opacity' : '0',
        'transition' : 'all 1s cubic-bezier(0.19, 1, 0.22, 1)'
      })
    }
  });


});
