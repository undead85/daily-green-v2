// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var score = 0;

var data = [
    { "id": "1", "title": "After a refreshing sleep, you wake up and feel ready to start the day. You head over to the washroom to brush your teeth. Do you: ", "Leave the water running while brushing": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "Turn off the tap before brushing": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "2" },
    { "id": "2", "title": "Question 2 If you turned off the tap, you realize that even saving small amounts of water every day will add up. Now it's time to take a shower. You aim to take a short shower to save water, but what temperature should you choose?", "Hot (as usual)": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "A little cooler than usual": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "-10", "points2": "10", "nextquest": "3" },
    { "id": "3", "title": "Question 3", "Using less hot water helps to save energy! After you finish your shower, you head over to the kitchen to make breakfast. After making a coffee and picking up your favourite fruit and cereal, you wonder what type of protein to eat:", "Something vegetarian (eggs, etc)?": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "Sausage or other breakfast meat?": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "4" },
    { "id": "4", "title": "Question 4", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "0" }
];

function getQuestById(id) {
    var data_length = data.length;
    for (var i = 0; i < data_length; i++) {
        if (data[i]["id"] == id) {
            
            return data[i];
        }
    }
}

$(document).ready(function () {

    init();    

    $("#option1").click(function () {
        processOption(this);
    });


    $("#option2").click(function () {
        processOption(this);
    });

    $("#playAgain").click(function () {
        init();
    });
});

function init() {
    score = 0;
    $("#score").html(score);

    $("#option1").show();
    $("#option2").show();

    setQuestion(1);
    $("#playAgain").hide();
}

function setQuestion(questId) {

    var questData = getQuestById(questId);

    $("#question").html(questData.title);
    $("#option1").data("points", questData.points1).data("nextquest", parseInt(questData.nextquest));
    $("#option2").data("points", questData.points2).data("nextquest", parseInt(questData.nextquest));
    $("#option1").attr("src", questData.option1);
    $("#option2").attr("src", questData.option2);
}

function processOption(obj) {
    
    score += parseInt($(obj).data("points"));

    $("#score").html(score);

    if ($(obj).data("nextquest") == "0") {

        endGame();
    }
    else {

        setQuestion($(obj).data("nextquest"));
    }
};

function endGame() {
    $("#option1").hide();
    $("#option2").hide();
    $("#playAgain").show();
}
