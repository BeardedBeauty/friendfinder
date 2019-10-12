var friends = require("../data/friends.js")
 
module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        console.log(req)
        req.params.friend
        // console.log(friends)
        return res.json(friends);
    });

    app.get("/api/friends/:friend", function (req, res) {
        var o = request.params.friend;
        for (var p = 0; p < o.length; p++) {
            if (friends[p].match === o) {
                console.log(friends[p]);
            }
        }
        // var friend = req.params.friend
        // // console.log(friends)
        // var foundFriend
        // for (var i = 0; i < length; i++) {
        //     if (friends[i].name == friend) {
        //         foundFriend = friends[i]
        //     }
        // }
        // return res.json(foundFriend);
    });

    // Displays a single character, or returns false
    app.post("/api/friends", function (req, res) {
        var q = req.body;
        console.log("----Hit the POST route breh")
        console.log(q);
        res.send(q);
    });
}