// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var score = 0;

var data = {data }

    $(document).ready(function () {
        $("#option1").click(function () {
            score += 10;
            //alert(score);
            $("#score").html(score);

            $("#question").html("Question2");
            
        });
    });
