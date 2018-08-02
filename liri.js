var readenv = require("dotenv").config();
var request = require("request");
var Spotify = require("node-spotify-api");
var Twitter = require("twitter");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);

var input = process.argv[2];
var inputTwo = process.argv.slice(3);

if (input == undefined){
    console.log("For music details, run command 'spotify-this-song <songname>'");
    console.log("For my last 20 tweets, run command 'my-tweets'");
    console.log("For movie details, run command 'movie-this <movie>'");
    console.log("For a random action, run command 'do-what-it-says'"); 
};

if (input == 'movie-this'){
  
    inputTwo.slice(' ');
    inputTwo.join('+');

    request("http://www.omdbapi.com/?t=" + inputTwo + "&y=&plot=short&apikey=trilogy", function(error, response, body) {

        if (!error && response.statusCode === 200) {
            console.log("The movie's title is: " + JSON.parse(body).Title + ".");
            console.log("It was released in the year " + JSON.parse(body).Year + ".");
            console.log("Rotten Tomatoes rating is: " + JSON.parse(body).Ratings[1].Value + ".");
            console.log("The movie was produced in: " + JSON.parse(body).Country + ".");
            console.log("Languages: " + JSON.parse(body).Language + ".");
            console.log("Plot synopsis: " + JSON.parse(body).Plot);
            console.log("Major actors include: " + JSON.parse(body).Actors + ".");
    }
});
}

if (input == 'spotify-this'){

    spotify.search({ type: 'track', limit: 1, offset: 0, query: inputTwo }, function(err, body) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      console.log("Artist name(s): " + body.tracks.items[0].album.artists[0].name);
      console.log("Song name: " + body.tracks.items[0].name);  
      console.log("Preview link: " + body.tracks.items[0].album.artists[0].external_urls.spotify);  
      console.log("From album titled: " + body.tracks.items[0].album.name);    
    });
}  
