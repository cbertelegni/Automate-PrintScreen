// var fs = require('fs');
var page = require('webpage').create();

// var path = require('path');
// var __dirname = path.resolve(path.dirname(''));

var folder = "./gif/";
var _url = 'http://www.lanacion.com.ar/';
var filename = function(_v){ 
    // var _f = path.join(folder, "screen.v{}.png".replace("{}", _v|""));
    var _f = folder + "screen.v{}.png".replace("{}", _v|"");
    return _f;  
};


page.settings.userAgent = "Mozilla/5.0 (X11; Linux x86_64; rv:21.0) Gecko/20100101 SlimerJS/0.7";
// page.settings.resourceTimeout = 60000;
// set area print
// page.clipRect = { top: 514, left: 3, width: 400, height: 300 };

page.viewportSize = { width:1200, height:1000 };

page.onConsoleMessage = function (msg) {
    console.log("From page***");
    console.log(msg);
};

page.onLoadFinished = function(status, url, isFrame) {
    console.log('Loading of '+url+' is a '+ status);
    
    setTimeout(function(){

        var counter = 0;
        setInterval(function(){
            
            console.log(counter);
            page.scrollPosition = { top: counter*1000, left: 0 };
        
            page.render(filename(counter), {onlyViewport:false});
            
            if(counter > 5){
                // page.scrollPosition = { top: 0, left: 0 };
                
                phantom.exit();
                
            }else{
                counter++;
            }
          
        }, 1000);
    
    }, 15000)
};

page.open(_url); // loads a page;



/* 
* $ phantomjs screen_slimer.js 
*/
// http://www.aperturescience.com/
/*https://docs.slimerjs.org/current/api/webpage.html*/