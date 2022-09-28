const data = require("./data.json");
const axios = require("axios");

for(movie of data){
    axios.post('https://ironrest.herokuapp.com/moodify', movie)
}
