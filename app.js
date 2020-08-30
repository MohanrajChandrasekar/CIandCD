'use strict';
const processExec = require('./process');

function process() {
    try {
        processExec.result("sh git.sh", function(err, response){
            if(!err){
                console.log(response);
            }else {
                console.log(err);
            }
        });
    } catch(err) {
        console.log('inside -- app');
        console.log(err);
    }
}

process();

