"use strict";
exports.__esModule = true;
var graphql_shield_1 = require("graphql-shield");
var utils_1 = require("../utils");
var rules = {
    isUser: graphql_shield_1.rule()(function (_parent, args, ctx) {
        var userId = utils_1.getUserId(ctx);
        return !!userId;
    })
};
exports.permissions = graphql_shield_1.shield({
    Query: {
        me: rules.isUser
    },
    Mutation: {}
});
//# sourceMappingURL=index.js.map