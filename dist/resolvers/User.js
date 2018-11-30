"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var prisma_client_1 = require("../generated/prisma-client");
var graphqlgen_1 = require("../generated/graphqlgen");
exports.User = __assign({}, graphqlgen_1.UserResolvers.defaultResolvers, { createdAt: function (parent) { return parent.createdAt; }, googleFitAccount: function (parent) {
        throw new Error("Resolver not implemented");
    }, fitbitAccount: function (parent) {
        return prisma_client_1.prisma.fitbitAccount({
            userId: parent.id
        });
    }, sleepLogs: function (parent) {
        return prisma_client_1.prisma.sleepLogs({
            where: {
                userId: parent.id
            }
        });
    } });
//# sourceMappingURL=User.js.map