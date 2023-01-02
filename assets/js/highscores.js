var highScoresText = document.querySelector("#highScores");
var highScoreInfo = '';

for (var i = 0; i < localStorage.length; i++) {
var highScoreData = JSON.parse(localStorage.getItem(i + 1));
highScoreInfo += '<p>'+ highScoreData.initials + " : " + highScoreData.score +' seconds left</p>';
highScoresText.innerHTML = highScoreInfo;
};