const functions = require('../functions');

exports.yesNo = (req, res, next) =>{
  functions.returnAnswer('Yes', 'No', 25)
    .then(data => {
     res.json(data);
    })
    .catch(err => console.log(err));
};

exports.flip = (req, res, next) =>{
  functions.returnAnswer('Heads', 'Tails', 25)
  .then(data => {
   res.json(data);
  })
  .catch(err => console.log(err));
};

exports.traffic = (req, res, next) =>{
  functions.returnAnswer('Stop', 'Go', 25)
  .then(data => {
   res.json(data);
  })
  .catch(err => console.log(err));
};
