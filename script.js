function getPlayerInfo() {

    var playerID = document.getElementById("playerId").value;

    var beginUrl = "https://new.scoresaber.com/api/player/";

    var endUrl = "/full";

    if (playerID === "") {
        console.log("Please Enter Player ID")
    } else {

        var baseURL = "https://new.scoresaber.com";

        fetch
            (beginUrl + playerID + endUrl)
            //Response resolves to a readable stream, 
            //so this statement helps us convert it into 
            //a static object
            .then(response => response.json())
            //Now that we have the data, let us see what it looks like in console
            .then(responseData => {
                document.getElementById("avatar").src = (baseURL + responseData.playerInfo.avatar);

                document.getElementById("name").innerHTML = (responseData.playerInfo.playerName);

                document.getElementById("rank").innerHTML = ("Rank: " + responseData.playerInfo.rank);

                document.getElementById("country").innerHTML = (responseData.playerInfo.country);

                document.getElementById("pp").innerHTML = ("PP: " + responseData.playerInfo.pp);

                document.getElementById("acc").innerHTML = (responseData.scoreStats.averageRankedAccuracy);

                document.getElementById("totalScore").innerHTML = ("Score: " + responseData.scoreStats.totalScore);

                document.getElementById("totalCount").innerHTML = ("Count: " + responseData.scoreStats.totalPlayCount);

                document.getElementById("rankScore").innerHTML = ("Rank Score: " + responseData.scoreStats.totalRankedScore);

                document.getElementById("rankCount").innerHTML = ("Rank Count: " + responseData.scoreStats.rankedPlayCount);


            });
    }
}
