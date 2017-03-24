/*https://docs.slimerjs.org/current/api/webpage.html*/
var webpage = require('webpage').create();
var url = 'http://www.lanacion.com.ar/';

webpage.settings.userAgent = "Mozilla/5.0 (X11; Linux x86_64; rv:21.0) Gecko/20100101 SlimerJS/0.7";
webpage.settings.resourceTimeout = 60000;

webpage.viewportSize = { width:1200, height:5000 };

webpage
  .open(url) // loads a page
  .then(function(page){ // executed after loading
    // store a screenshot of the page
    
      // webpage.scrollPosition = { top: 0, left: 0 };

      console.log("start...")
      setTimeout(function(){
      
      console.log("waiting ...")

      webpage.render('print_slimer.png',
                     {onlyViewport:false});
      slimer.exit();
      
    }, 60000);

  });

/* slimerjs screen_slimer.js */