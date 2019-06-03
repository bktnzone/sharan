const apis = require("./api/api-config");
const PORT = 4000;

apis.app.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT);
});


var bcrypt = require('bcryptjs');
bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("shivbaba1", salt, function(err, hash) {
        // Store hash in your password DB.
        console.log(hash);
    });
});