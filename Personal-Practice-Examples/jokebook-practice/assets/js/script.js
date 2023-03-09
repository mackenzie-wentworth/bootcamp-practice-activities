console.log("script running");
var $jokeList = $("#joke-list");

var jokes = [];

var saveJokes = function(){
    console.log("save jokes");
    localStorage.setItem("jokes", JSON.stringify(jokes));
}

var loadJokes = function(){
    jokes = JSON.parse(localStorage.getItem("jokes"));
    console.log("load jokes", jokes);
    updateJokesList();
}

var addJoke = function(newJoke){
    jokes.unshift(newJoke);
    console.log("add joke", jokes);
    updateJokesList();
    saveJokes();
}

var updateJokesList = function(){
    console.log("update jokes list");

    var jokesHtml = "";
    for (var i=0; i<jokes.length; i++){
        jokesHtml += '<article>';
        jokesHtml += '<p class="setup">'+jokes[i].setup+'</p>';
        jokesHtml += '<p class="punchline">'+jokes[i].punchline+'</p>';
        jokesHtml += '</article>';
    }
    $jokeList.html(jokesHtml);
}


var initListeners = function(){
    console.log("init listeners");

    $("#new-joke").submit( function(event){
        event.preventDefault();
        console.log("submitted form");

        var newSetup = $("#new-setup").val();
        var newPunchline = $("#new-punchline").val();

        var newJoke = {
            setup: newSetup,
            punchline: newPunchline
        };

        addJoke(newJoke);
    });
}

$(function(){
    console.log("init");
    initListeners();
    loadJokes();
});