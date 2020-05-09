require("dotenv").config();

//Require Express
var express = require("express");

//Require database model
var db = require("./models");

//Initialise express
var app = express();

//PORT assign
var PORT = process.env.PORT || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

//Require Routes
require("./routes/apiroutes.js")(app);

var syncOptions = { force: true };

//Clearing database only if the node environment is test
if (process.env.NODE_ENV === "test") {
  syncOptions.force = true;
}

//Starting server and syncing models
db.sequelize.sync(syncOptions).then(function() {
  db.Projects.bulkCreate([
    {
      project: "Burgeat",
      description:
        "Are you a burger lover ? And have dreams of devouring a burger you just saw on social media or a mate told you about? What to make a burger bucket list? Then this app is just for you! List a burger you would love to try and keep in in your bucket list. Tick it off after you have tried it and click devoured it! Burppp !!!",
      image: "img-burgeat",
      github: "https://github.com/priyam009/burger",
      website: "https://burgeat.herokuapp.com/",
      gif: "gif-burgeat",
      hashTags: "html,css,bootstrap,nodejs,express,mysql,handlebars"
    },
    {
      project: "Gifme Giphy",
      description:
        "This app is a fun way to find out stats about your favourite Pokemon. It uses Pokemon api and giphy api and gives the user gifs and stats when a Pokemon is requested.",
      image: "img-giphy",
      github: "https://github.com/priyam009/GiphyAPI",
      website: "https://priyam009.github.io/GiphyAPI/",
      gif: "gif-giphy",
      hashTags: "html,css,bootstrap,javascript,jquery,ajax,githubPinned"
    },
    {
      project: "Staxx",
      description:
        "Staxx is a web application that allows its users to categorically track their expenses over a chosen peroid of time. After the user has created an account they are then presented with a pop-up modal that allows them to select the chosen time period of either a week or a month and enter the amount of money they would like to allot for that chosen time period. Through the dashboard interface the user can then easily enter their transactions as they go, view all their transactions, and view a summary of their transactions as a graph.",
      image: "img-staxx",
      github: "https://github.com/priyam009/Staxx",
      website: "https://shrouded-brook-64155.herokuapp.com/",
      gif: "gif-staxx",
      hashTags:
        "html,css,javascript,jquery,nodejs,express,sequelize,handlebars,passportjs,chartjs,githubPinned"
    },
    {
      project: "Twist Eat",
      description:
        "An app that uses the users location to search for restaurants in the area. It will then spit out one of the worst rated restaurant, and tell the user to eat there, along with a light-hearted insult.",
      image: "img-eat-sht",
      github: "https://github.com/priyam009/Group-Project",
      website: "https://gerardwp.github.io/Group-Project/",
      gif: "gif-eat-sht",
      hashTags: "html,css,javascript,jquery,ajax,firebase,githubPinned"
    },
    {
      project: "Train Schedular",
      description:
        "A single page train schedular which allows the user to add train details and then calculates its arrival automatically. Set the frequency and wait for it to do the math for you",
      image: "img-train-schedular",
      github: "https://github.com/priyam009/Train-Scheduler",
      website: "https://priyam009.github.io/Train-Scheduler/",
      gif: "gif-train-schedular",
      hashTags: "html,css,bootstrap,javascript,jquery,firebase"
    },
    {
      project: "Trivia Game",
      description:
        "Love trivia ? Then you would love this app! A colourful app with random general knowledge questions which gives you a gif when you answer. Be quick because the time is ticking !",
      image: "img-trivia-game",
      github: "https://github.com/priyam009/TriviaGame",
      website: "https://priyam009.github.io/TriviaGame/",
      gif: "gif-trivia-game",
      hashTags: "html,css,bootstrap,javascript,jquery,firebase"
    },
    {
      project: "Word Guess Game",
      description:
        "A classic hangman style game but for cities around the world. You have got 10 guesses to guess the letters and each correct and incorrect guess is recorded and shown on the screen to the user and respective sounds are rendered on the webpage. This game is addictive in a fun way.",
      image: "img-word-guess",
      github: "https://github.com/priyam009/Word-Guess-Game",
      website: "https://priyam009.github.io/Word-Guess-Game/",
      gif: "gif-word-guess",
      hashTags: "html,css,bootstrap,javascript"
    },
    {
      project: "Friend Finder",
      description:
        "This simple app helps you find a friend based on the questions you answer in the survey. As soon s you click submit a new friend with their profile picture is displayed.",
      image: "img-friend-finder",
      github: "https://github.com/priyam009/FriendFinder",
      website: "https://friendlookup.herokuapp.com/",
      gif: "gif-friend-finder",
      hashTags: "html,css,bootstrap,javascript,jquery,express"
    },
    {
      project: "Cartoon Click",
      description:
        "Remember the 90’s memory game ? See it once and remember in forever, this app does just that. Click an image and make sure you don’t click that cartoon again if you do, be sure to lose points!",
      image: "img-cartoon-click",
      github: "https://github.com/priyam009/clicky-game",
      website: "https://priyam009.github.io/clicky-game/",
      gif: "gif-cartoon-click",
      hashTags: "react,bootstrap,githubPinned"
    },
    {
      project: "News Scraper",
      description:
        "Bookmark a news and save articles from news.com. This app lets you save each news story in your bookmarks to read it later.",
      image: "img-news-scraper",
      github: "https://github.com/priyam009/news-scraper",
      website: "https://news-scrape-it.herokuapp.com/",
      gif: "gif-news-scraper",
      hashTags:
        "handlebars,css,bootstrap,mongoose,express,nodejs,axios,cheerio,javascript,jquery"
    },
    {
      project: "Cool Beans",
      description:
        "This app is as cool as it sounds because being caring is cool and as a Melbournian what’s more cool than a cup of coffee. It helps you log your coffee count and contribute a portion of it to a good cause.",
      image: "img-cool-beans",
      github: "https://github.com/priyam009/cool-beans",
      website: "https://cool-beans-coffee.herokuapp.com/",
      gif: "gif-cool-beans",
      hashTags:
        "react,mongoose,nodejs,express,axios,css,bootstrap,reactstrap,chartjs,jwt,googleoauth,githubPinned"
    },
    {
      project: "Google Book Search",
      description:
        "Are you as curious as Bill gates and love reading books? Want to keep a checklist of all the books you want to read? Then this app is for you. This app lets you search for your desired book criteria from the Google's Books API and save it as your future checklist item.",
      image: "img-google-books-search",
      github: "https://github.com/priyam009/google-book-search",
      website: "https://gbooksrch.herokuapp.com/",
      gif: "gif-google-books-search",
      hashTags: "react,mongoose,nodejs,express,axios,css,githubPinned"
    }
  ]);

  app.listen(PORT, function() {
    console.log("Listening on port http://localhost:" + PORT);
  });
});
