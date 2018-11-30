"use strict";
exports.__esModule = true;
var utils_1 = require("../utils");
exports.Query = {
    me: function (parent, args, ctx) {
        return ctx.db.user({ id: utils_1.getUserId(ctx) });
    },
    fitbitAccounts: function (parent, args, ctx) {
        console.log("WHAT");
        return ctx.db.fitbitAccounts();
    },
    sleepDatas: function (parent, args, ctx) {
        console.log("WHAT");
        return ctx.db.sleepDatas();
    }
};
//# sourceMappingURL=Query.js.map