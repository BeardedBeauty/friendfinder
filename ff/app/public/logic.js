$(document).ready(function () {
    $(".dropdown-trigger").dropdown({
        constrainWidth: false
    });
    $('.modal').modal();
});
// var instance = M.Modal.getInstance(elem);
var answers = ["", "", "", "", ""];
// var q = require("data/friends.js");
// var u = document.createElement("script");
// u.src = "data/friends.js";
// document.getElementsByTagName("head")[0].append(u);
// console.log(q[0])
function match() {
    console.log(answers);
    var r = 0;
    for (e = 0; e < answers.length; e++) {
        var t = parseInt(answers[e]);
        r = r + t;
    };
    console.log(r);
    find(r);
};

//dropdown1
$(document).on("click", "#q1", function () {
    answers[0] = 1
});
$(document).on("click", "#q2", function () {
    answers[0] = 2
});
$(document).on("click", "#q3", function () {
    answers[0] = 3
});
$(document).on("click", "#q4", function () {
    answers[0] = 4
});

//dropdown2
$(document).on("click", "#w1", function () {
    answers[1] = 1;
});
$(document).on("click", "#w2", function () {
    answers[1] = 2;
});
$(document).on("click", "#w3", function () {
    answers[1] = 3;
});
$(document).on("click", "#w4", function () {
    answers[1] = 4;
});

//dropdown3
$(document).on("click", "#e1", function () {
    answers[2] = 1;
});
$(document).on("click", "#e2", function () {
    answers[2] = 2;
});
$(document).on("click", "#e3", function () {
    answers[2] = 3;
});
$(document).on("click", "#e4", function () {
    answers[2] = 4;
});

//dropdown4
$(document).on("click", "#r1", function () {
    answers[3] = 1;
});
$(document).on("click", "#r2", function () {
    answers[3] = 2;
});
$(document).on("click", "#r3", function () {
    answers[3] = 3;
});
$(document).on("click", "#r4", function () {
    answers[3] = 4;
});

//dropdown5
$(document).on("click", "#t1", function () {
    answers[4] = 1;
});
$(document).on("click", "#t2", function () {
    answers[4] = 2;
});
$(document).on("click", "#t3", function () {
    answers[4] = 3;
});
$(document).on("click", "#t4", function () {
    answers[4] = 4;
});

$(document).on("click", function () {
    console.log(answers);
})

$(document).on("click", "#0modal", function () {
    for (var w = 0; w < answers.length; w++) {
        if (answers[w] === "") {
            return;
        }
    }
    match();
})

function find(i) {
    $.get("/api/friends/" + i, function (data) {
        // log the data to our console
        console.log(data);
    });
}
