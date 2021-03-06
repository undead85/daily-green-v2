
// Write your Javascript code.

var score = 0;

var data = [
    {
        "id": "1", "title": "After a refreshing sleep, you wake up and feel ready to start the day. You head over to the washroom to brush your teeth. Do you leave the water running or turn off the tap?",
        "option1": "https://image.flaticon.com/icons/svg/1683/1683052.svg",
        "option2": "https://image.flaticon.com/icons/svg/286/286203.svg",
        "points1": "-10", "points2": "10", "nextquest": "2", "bg": "images/brushingTeeth.png"
    },
    {
        "id": "2", "title": "If you turned off the tap, you realize that even saving small amounts of water every day will add up. Now it's time to take a shower. You aim to take a short shower to save water, but what temperature should you choose? Hot or a little cooler than usual?",
        "option1": "https://image.flaticon.com/icons/svg/362/362410.svg",
        "option2": "https://image.flaticon.com/icons/svg/362/362412.svg",
        "points1": "-10", "points2": "10", "nextquest": "3", "bg": "images/bathroom.jpg"
    },
    {
        "id": "3", "title": "Using less hot water helps to save energy! After you finish your shower, you head over to the kitchen to make breakfast. After making a coffee and picking up your favourite fruit and cereal, would you like to choose a vegetarian protein (ex eggs), or another breakfast meat?",
        "option1": "img/foodSalad.png",
        "option2": "img/foodMeat.png",
        "points1": "10", "points2": "-10", "nextquest": "4", "bg": "https://cdn.notonthehighstreet.com/system/product_images/images/001/155/310/original_mid-century-modern-dining-room-art-print.jpg"
    },
    {
        "id": "4", "title": "Meat requires more energy and resources to produce compared to plant-based foods, so making an effort to reduce the amount of meat you eat makes a difference. Now it's almost time to head to work! <BR/>Should you turn the lights off in the house, or leave them on because you're running a little late?",
        "option1": "https://image.flaticon.com/icons/svg/385/385266.svg",
        "option2": "https://image.flaticon.com/icons/svg/385/385417.svg", "points1": "10", "points2": "-10", "nextquest": "5", "bg": "images/neighborhood.jpg"
    },
    {
        "id": "5", "title": "Now, what's the best way to get to work? It's pretty close to home.",
        "option1": "https://image.flaticon.com/icons/svg/1615/1615123.svg",
        "option2": "https://image.flaticon.com/icons/svg/1615/1615104.svg", "points1": "10", "points2": "-10", "nextquest": "6", "bg": "images/neighborhood.jpg"
    }, //bike is option1, car is option2
    {
        "id": "6", "title": "A good way to reduce your carbon emissions is to avoid using the car whenever possible. <BR/>You start working and before you know it, it's time for a quick lunch! Should you grab some take out or eat a packed lunch?",
        "option1": "img/eat out.png",
        "option2": "img/lunchBox.png", "points1": "-10", "points2": "10", "nextquest": "7", "bg": "images/office.jpg"
    },
    {
        "id": "7", "title": "Bringing your own lunch or drink in a resusable container helps reduce packaging waste from single-use items. <BR/>A few hours pass and the workday ends. You need to stop by the grocery store before heading home. Do you choose the local market or the grocery store with more imported foods?",
        "option1": "https://us.123rf.com/450wm/echiechi/echiechi1606/echiechi160600001/59716053-stock-vector-vegetables-shop-stall-farmers-market-cartoon-characters-vector-local-market-farmer-vegetables.jpg?ver=6",
        "option2": "http://leestrugnell.com/wp-content/uploads/2014/06/idea2-1024x651.jpg",
        "points1": "10", "points2": "-10", "nextquest": "8", "bg": "images/grocery.jpg"
    },
    {
        "id": "8", "title": "What's the best way to carry your groceries home?",
        "option1": "img/plasticGrocery.png",
        "option2": "img/reusableGroceryBag.png",
        "points1": "-10", "points2": "10", "nextquest": "9", "bg": "images/grocery.jpg"
    }, //plastic bag is option1, reusable bag is option2
    {
        "id": "9", "title": "Buying local foods reduces carbon emissions needed to transport food grown in other places.<BR/>You arrive at home and find that the house feels rather cold. Should you turn up the heat or save enerergy and put on a sweater?",
        "option1": "https://image.flaticon.com/icons/svg/1677/1677120.svg",
        "option2": "https://image.flaticon.com/icons/svg/1685/1685507.svg",
        "points1": "-10", "points2": "10", "nextquest": "10", "bg": "images/coldHouse.jpg"
    },
    {
        "id": "10", "title": "After cooking a tasty dinner with your groceries, you realize you have to wash a few dishes. Should you start the dishwasher or handwash them?",
        "option1": "https://mastergolflivestream.com/images/dish-clipart-load-dishwasher-13.jpg",
        "option2": "https://www.pinclipart.com/picdir/big/35-352309_big-image-clipart-dishwasher-png-download.png",
        "points1": "-10", "points2": "10", "nextquest": "11", "bg": "images/kitchen.jpg"
    }, //dishwasher is option1, handwash is option2
    {
        "id": "11", "title": "If you only have a few dishes, handwashing saves electricity! <BR/>Finally you have some leisure time! How about watching TV? Or maybe go for a walk?",
        "option1": "img/watching_tv.png",
        "option2": "img/park2.jpg", "points1": "-10",
        "points2": "10", "nextquest": "12", "bg": "images/kitchen.jpg"
    },
    {
        "id": "12", "title": "There's a pile of stuff lying on the counter that you don't need. Should you take the time to sort and recycle them or throw them all in the trash to save time?",
        "option1": "https://image.flaticon.com/icons/svg/1614/1614901.svg",
        "option2": "https://image.flaticon.com/icons/svg/364/364488.svg", "points1": "10",
        "points2": "-10", "nextquest": "0", "bg": "https://media.istockphoto.com/vectors/dirty-room-vector-id885461068?k=6&m=885461068&s=612x612&w=0&h=GxDhVWRqJYoqsVGJG7Ji6ExxFP6qfhaLQlZrcjDglpo="
    }
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
		$("#nav-to-about").click();
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

    //var bgImage = 'background-image:url(' + questData.bg + '); ';
    //$("#gameSection").attr("style", bgImage);
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
}

function endGame() {
    $("#playAgain").show();
    setMeme()
	$("#nav-to-projects").click();
}

function setMeme()
{
	var memeUrl = 'img/meme-obama.jpg';
	
	if (score <= 20)
	{
		memeUrl = "img/meme-seriously.jpg";
	}		
	else if(score <= 50)
	{
		memeUrl = "img/meme-dicaprio.jpg";
	}
	
	$("#meme").attr("src", memeUrl);
}