"use strict";
exports.__esModule = true;
var jsonwebtoken_1 = require("jsonwebtoken");
exports.APP_SECRET = "appsecret321";
function getUserId(context) {
    var Authorization = context.request.get("Authorization");
    if (Authorization) {
        var token = Authorization.replace("Bearer ", "");
        var verifiedToken = jsonwebtoken_1.verify(token, exports.APP_SECRET);
        return verifiedToken && verifiedToken.userId;
    }
}
exports.getUserId = getUserId;
function base64Hash(value) {
    return Buffer.from(value, "binary").toString("base64");
}
exports.base64Hash = base64Hash;
//# sourceMappingURL=utils.js.map