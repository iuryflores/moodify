const data = require("./data.json");
const axios = require("axios");

for(movie of data){
    axios.put(`https://misty-plum-crab.cyclic.app/medium`, {image:movie.image})
}
