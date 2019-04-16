
const axios = require('axios');
const key = require('../secret');
const giphyUrl =`http://api.giphy.com/v1/gifs/search?`;

const chance = () =>{
  return Math.round(Math.random()) === 1;
};
const randomGiph = (num) => {
   return Math.round(Math.random() * num);
}

exports.returnAnswer = (optionA, optionB, gifs) => { 
  const answer = chance() == 1 ? optionA : optionB;
  const gif = randomGiph(gifs);
  // 25 gifs
  return axios
    .get(`${giphyUrl}q=${answer}&api_key=${key}`)
    .then(response => {
      return {
        answer,
        gif: response.data.data[gif].images.downsized_large.url
      }
    })
    .catch(function (error) {
      console.log(error);
      return { answer, gif: ''};
    });
}