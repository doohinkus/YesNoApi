const axios = require('axios');
const key = require('../../secret');
const giphyUrl =`http://api.giphy.com/v1/gifs/search?`;
const functions = require('../functions');

exports.yesNo = (req, res, next) =>{
  const answer = functions.chance() == 1 ? "Yes" : "No";
  const randomGiph = functions.randomGiph(25);
  let gif ='';
  // 25 gifs
  axios.get(`${giphyUrl}q=${answer}&api_key=${key}`)
    .then(response => {
      gif = response.data.data[randomGiph].images.downsized_large.url;
    })
    .catch(function (error) {
      console.log(error);
      res.json({ answer, gif: 'images/broken.gif'})
   })
   .then(()=>{
     res.json({ answer, gif });
   });
};

exports.flip = (req, res, next) =>{
  const answer = functions.chance() == 1 ? "Heads" : "Tails";
  const randomGiph = functions.randomGiph(25);
  let gif ='';
  // 25 gifs
  axios.get(`${giphyUrl}q=${answer}&api_key=${key}`)
    .then(response => {
      gif = response.data.data[randomGiph].images.downsized_large.url;
    })
    .catch(function (error) {
      console.log(error);
      res.json({ answer, gif: 'images/broken.gif'})
   })
    .then(()=>{
       res.json({ answer, gif });
    });
};

exports.traffic = (req, res, next) =>{
  const answer = functions.chance() == 1 ? "Go" : "Stop";
  const randomGiph = functions.randomGiph(25);
  let gif ='';
  // 25 gifs
  axios.get(`${giphyUrl}q=${answer}&api_key=${key}`)
    .then(response => {
      gif = response.data.data[randomGiph].images.downsized_large.url;
    })
    .catch(function (error) {
      console.log(error);
      res.json({ answer, gif: 'images/broken.gif'})
   })
   .then(()=>{
     res.json({ answer, gif });
   });
};
