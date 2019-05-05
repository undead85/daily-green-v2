// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var score = 0;

var data = [
    { "id": "1", "title": "After a refreshing sleep, you wake up and feel ready to start the day. You head over to the washroom to brush your teeth. Do you leave the water running or turn off the tap?", "option1": "images/tapWaterRunning.png", "option2": "images/tapWaterNoRunning.png", "points1": "-10", "points2": "10", "nextquest": "2" , "bg":"images/brushingTeeth.png"},
    { "id": "2", "title": "If you turned off the tap, you realize that even saving small amounts of water every day will add up. Now it's time to take a shower. You aim to take a short shower to save water, but what temperature should you choose? Hot or a little cooler than usual?", "option1": "https://www.pinclipart.com/picdir/big/35-354331_bikram-bikram-audio-bikram-express-emotional-thermometer-autism.png", "option2": "https://www.pinclipart.com/picdir/big/63-639931_buti-yoga-vinyasa-thermometer-clipart.png", "points1": "-10", "points2": "10", "nextquest": "3", "bg":"images/bathroom.jpg" },
    { "id": "3", "title": "Using less hot water helps to save energy! After you finish your shower, you head over to the kitchen to make breakfast. After making a coffee and picking up your favourite fruit and cereal, would you like to choose a vegetarian protein (ex eggs), or another breakfast meat?", "option1": "images/foodSalad.png", "option2": "images/foodMeat.png", "points1": "10", "points2": "-10", "nextquest": "4", "bg":"https://cdn.notonthehighstreet.com/system/product_images/images/001/155/310/original_mid-century-modern-dining-room-art-print.jpg" },
    { "id": "4", "title": "Question", "option1": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "option2": "https://cdn4.buysellads.net/uu/1/41629/1547651742-slack-carbon-red_2x.png", "points1": "10", "points2": "-10", "nextquest": "0", "bg":"" },

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
