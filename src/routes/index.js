const controllers = require('../controllers');

module.exports = app =>{
  app.route('/yesno')
    .get(controllers.yesNo);
  app.route('/flip')
    .get(controllers.flip);
  app.route('/traffic')
    .get(controllers.traffic);
}
