var readenv = require("dotenv").config();
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var input = process.argv[2];

if (input == undefined){
    console.log("For music details, run command 'spotify-this-song <songname>'");
    console.log("For my last 20 tweets, run command 'my-tweets'");
    console.log("For movie details, run command 'movie-this <movie>'");
    console.log("For a random action, run command 'do-what-it-says'"); 
} else if (input == 'spotify-this-song'){

}else if (input == 'my-tweets'){

}else if (input == 'movie-this'){

}else if (input == 'do-what-it-says'){

};