const key = require('../../secret');
const chance = require('../chance');

exports.yesNo = (req, res, next) =>{
  let answer = chance() == 1 ? "Yes" : "No";
  console.log('Yes No Route is working!!');
  res.json({ answer });
};

exports.flip = (req, res, next) =>{
  let answer = chance() == 1 ? "Heads" : "Tails";
  console.log('Flip Route is working!!');
  res.json({ answer });
};
exports.traffic = (req, res, next) =>{
  let answer = chance() == 1 ? "Go" : "Stop";
  console.log('Traffic Route is working!!');
  res.json({ answer });
};
