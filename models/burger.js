var orm = require("../config/orm.js");

var burger = {
    all: function (cb) {
        orm.all("burger_name", function (res) {
            cb(res);
            console.log(res);
        });
    },
    update: function (objColVals, condition, cb) {
        orm.update("burger_name", objColVals, condition, function (res) {
            cb(res);
        });
    },
};


module.exports = burger;