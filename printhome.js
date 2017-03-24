/*https://docs.slimerjs.org/current/api/webpage.html*/
var webpage = require('webpage').create();
var url = 'http://www.lanacion.com.ar/';

webpage.settings.userAgent = "Mozilla/5.0 (X11; Linux x86_64; rv:21.0) Gecko/20100101 SlimerJS/0.7";
webpage.settings.resourceTimeout = 60000;

webpage.viewportSize = { width:1100, height:5000 };
webpage
  .open(url, function(status){ // executed after loading
    // store a screenshot of the page
    
      // webpage.scrollPosition = { top: 0, left: 0 };

      console.log("Rendering...")
      setTimeout(function(){
      
        webpage.render('print_phantom.png',
                       {onlyViewport:false});
        
        phantom.exit();

      }, 60000);

  }); // loads a page

/* $ phantomjs printhome.js */