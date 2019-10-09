var friends = require("../data/friends.js")
 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(req)
        // console.log(friends)
        return res.json(friends);
    });

    // Displays a single character, or returns false
    app.post("/api/friends", function (req, res) {
        var q = req.body;
        console.log("----Hit the POST route breh")
        console.log(q);
        res.send(q);
    });
}