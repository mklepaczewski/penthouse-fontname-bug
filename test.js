const penthouse = require('penthouse');
const fs = require('fs')
const url = require('url');
fs.readFile("style.css", 'utf8', function(err, data) {

    if(err !== null) {
        console.err(err);
        return;
    }

    const path = url.pathToFileURL("./index.html");

    penthouse({
        url: path,
        cssString: data
    })
    .then(criticalCss => {
        console.log(criticalCss)
    });
});