const user = require('./user.router');
const history = require('./history.router');
const item = require('./item.router');
function router(app){
    app.use('/auth',user);
    app.use('/history',history);
    app.use('/item',item);
}
module.exports = router;