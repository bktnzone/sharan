const apis = require("./api/api-config");
const PORT = 4000;

apis.app.listen(process.env.PORT || PORT, function() {
    console.log("server connected to port " + PORT);
});
