var phantom = require('phantom');

var url = 'http://www.lanacion.com.ar/';


/* Set the log level to 'error' at creation, and use the default logger  */
phantom.create([], { logLevel: 'error' }).then(function(ph) {
    ph.createPage().then(function(page){
        page.property('viewportSize', {width: 1024, height: 600});
        
        // page.property('clipRect', { top: 200, left: 100, width: 224, height: 300 });
        
        page.open(url).then(function(status){
            console.log("WAITING...", status);   
            if(status){
                page.render('ln22.png').then(function(){
                    console.log("ok")
                    ph.exit();
                });            
            }
        
        });
    });
});

