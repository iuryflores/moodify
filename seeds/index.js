const data = require("./data.json");
const axios = require("axios");

for(movie of data){
    axios.put(`https://ironrest.herokuapp.com/moodify/${movie._id}`, {image:movie.image})
}
