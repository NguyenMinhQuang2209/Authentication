const user = require('./user.router');
const history = require('./history.router');
function router(app){
    app.use('/auth',user);
    app.use('/history',history);
}
module.exports = router;