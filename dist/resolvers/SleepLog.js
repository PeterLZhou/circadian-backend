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
// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.
exports.SleepLog = __assign({}, graphqlgen_1.SleepLogResolvers.defaultResolvers, { data: function (parent) {
        console.log(parent.id);
        return prisma_client_1.prisma.sleepDatas({
            where: {
                sleepLogId: parent.id
            }
        });
    } });
//# sourceMappingURL=SleepLog.js.map