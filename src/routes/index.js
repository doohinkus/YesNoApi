const chance = require('../chance');
module.exports = app =>{
  app.route('/yesno')
    .get((req, res, next) =>{
      let answer = chance() == 1 ? "Yes" : "No";
      console.log('Yes No Route is working!!');
      res.json({ answer });
    });
  app.route('/flip')
    .get((req, res, next) =>{
      let answer = chance() == 1 ? "Heads" : "Tails";
      console.log('Flip Route is working!!');
      res.json({ answer });
    });
  app.route('/traffic')
    .get((req, res, next) =>{
      let answer = chance() == 1 ? "Go" : "Stop";
      console.log('Traffic Route is working!!');
      res.json({ answer });
    });
}
