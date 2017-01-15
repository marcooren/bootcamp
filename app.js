const shelljs = require("shelljs");
shelljs.exec("node_modules\\.bin\\http-server", { async: true });
//shelljs.exec("explorer http://127.0.0.1:8080");
var open = require("open");
open("http://127.0.0.1:8080/index.html", "chrome");






/*


var exec = require('child_process').exec,
    child;

child = exec('explorer http://127.0.0.1',
    function(error, stdout, stderr) {

        // console.log('stdout: ' + stdout);
        //   console.log('stderr: ' + stderr);
        if (error !== null) {
            //     console.log('exec error: ' + error);
        }

    });*/