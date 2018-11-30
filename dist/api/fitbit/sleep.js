"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
exports.__esModule = true;
var axios_1 = require("axios");
var prisma_client_1 = require("../../generated/prisma-client");
var refresh_1 = require("./refresh");
// Date is yyyy-MM-dd
exports.getSleepLogs = function (ctx, userId, date) { return __awaiter(_this, void 0, void 0, function () {
    var fitbitAccount, fitbitUserId, accessToken, newTokens, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_client_1.prisma.fitbitAccount({ userId: userId })];
            case 1:
                fitbitAccount = _a.sent();
                fitbitUserId = fitbitAccount.fitbitUserId;
                accessToken = fitbitAccount.accessToken;
                if (!(new Date(fitbitAccount.expiration).getTime() < new Date().getTime())) return [3 /*break*/, 3];
                return [4 /*yield*/, refresh_1.refreshToken(fitbitAccount.id, fitbitAccount.refreshToken)];
            case 2:
                newTokens = _a.sent();
                accessToken = newTokens.accessToken;
                _a.label = 3;
            case 3: return [4 /*yield*/, axios_1["default"].get("https://api.fitbit.com/1.2/user/" + fitbitUserId + "/sleep/date/" + date + ".json", {
                    headers: {
                        Authorization: "Bearer " + accessToken
                    }
                })];
            case 4:
                response = _a.sent();
                // console.log(response.data.sleep[0].data);
                response.data.sleep.forEach(function (sleepLog) {
                    exports.createSleepLog(userId, sleepLog);
                });
                return [2 /*return*/, response];
        }
    });
}); };
exports.getAllSleepLogs = function (ctx, userId) { return __awaiter(_this, void 0, void 0, function () {
    var fitbitAccount, fitbitUserId, accessToken, newTokens, earliestDate, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_client_1.prisma.fitbitAccount({ userId: userId })];
            case 1:
                fitbitAccount = _a.sent();
                fitbitUserId = fitbitAccount.fitbitUserId;
                accessToken = fitbitAccount.accessToken;
                if (!(new Date(fitbitAccount.expiration).getTime() < new Date().getTime())) return [3 /*break*/, 3];
                return [4 /*yield*/, refresh_1.refreshToken(fitbitAccount.id, fitbitAccount.refreshToken)];
            case 2:
                newTokens = _a.sent();
                accessToken = newTokens.accessToken;
                _a.label = 3;
            case 3:
                earliestDate = "2007-03-26";
                return [4 /*yield*/, axios_1["default"].get("https://api.fitbit.com/1.2/user/" + fitbitUserId + "/sleep/list.json?afterDate=" + earliestDate + "&sort=asc&offset=0&limit=100", {
                        headers: {
                            Authorization: "Bearer " + accessToken
                        }
                    })];
            case 4:
                response = _a.sent();
                // .catch(error => {
                //   console.log(error.response.data.errors);
                // });
                response.data.sleep.forEach(function (sleepLog) {
                    exports.createSleepLog(userId, sleepLog);
                });
                return [2 /*return*/];
        }
    });
}); };
exports.createSleepLog = function (userId, sleepLog) { return __awaiter(_this, void 0, void 0, function () {
    var dbSleepLog;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, prisma_client_1.prisma.createSleepLog({
                    userId: userId,
                    dateOfSleep: sleepLog.dateOfSleep,
                    duration: sleepLog.duration,
                    efficiency: sleepLog.efficiency,
                    isMainSleep: sleepLog.isMainSleep || false,
                    logId: sleepLog.logId,
                    minutesAfterWakeup: sleepLog.minutesAfterWakeup,
                    minutesAsleep: sleepLog.minutesAsleep,
                    minutesAwake: sleepLog.minutesAwake,
                    minutesToFallAsleep: sleepLog.minutesToFallAsleep,
                    startTime: sleepLog.startTime,
                    timeInBed: sleepLog.timeInBed,
                    type: sleepLog.type,
                    summaryDeepCount: sleepLog.type == "stages" ? sleepLog.levels.summary.deep.count : 0,
                    summaryDeepMinutes: sleepLog.type == "stages" ? sleepLog.levels.summary.deep.minutes : 0,
                    summaryDeepThirtyDayAvgMinutes: sleepLog.type == "stages"
                        ? sleepLog.levels.summary.deep.thirtyDayAvgMinutes
                        : 0,
                    summaryLightCount: sleepLog.type == "stages" ? sleepLog.levels.summary.light.count : 0,
                    summaryLightMinutes: sleepLog.type == "stages" ? sleepLog.levels.summary.light.minutes : 0,
                    summaryLightThirtyDayAvgMinutes: sleepLog.type == "stages"
                        ? sleepLog.levels.summary.light.thirtyDayAvgMinutes
                        : 0,
                    summaryRemCount: sleepLog.type == "stages" ? sleepLog.levels.summary.rem.count : 0,
                    summaryRemMinutes: sleepLog.type == "stages" ? sleepLog.levels.summary.rem.minutes : 0,
                    summaryRemThirtyDayAvgMinutes: sleepLog.type == "stages"
                        ? sleepLog.levels.summary.rem.thirtyDayAvgMinutes
                        : 0,
                    summaryWakeCount: sleepLog.type == "stages" ? sleepLog.levels.summary.wake.count : 0,
                    summaryWakeMinutes: sleepLog.type == "stages" ? sleepLog.levels.summary.wake.minutes : 0,
                    summaryWakeThirtyDayAvgMinutes: sleepLog.type == "stages"
                        ? sleepLog.levels.summary.wake.thirtyDayAvgMinutes
                        : 0,
                    summaryAsleepCount: sleepLog.type == "classic" ? sleepLog.levels.summary.asleep.count : 0,
                    summaryAsleepMinutes: sleepLog.type == "classic" ? sleepLog.levels.summary.asleep.minutes : 0,
                    summaryAwakeCount: sleepLog.type == "classic" ? sleepLog.levels.summary.awake.count : 0,
                    summaryAwakeMinutes: sleepLog.type == "classic" ? sleepLog.levels.summary.awake.minutes : 0,
                    summaryRestlessCount: sleepLog.type == "classic" ? sleepLog.levels.summary.restless.count : 0,
                    summaryRestlessMinutes: sleepLog.type == "classic" ? sleepLog.levels.summary.restless.minutes : 0
                })];
            case 1:
                dbSleepLog = _a.sent();
                sleepLog.levels.data.forEach(function (data) {
                    prisma_client_1.prisma
                        .createSleepData({
                        sleepLogId: dbSleepLog.id,
                        dateTime: data.dateTime,
                        level: data.level,
                        second: data.seconds
                    })["catch"](function (error) {
                        console.log(error);
                    });
                });
                if (sleepLog.levels.shortData) {
                    sleepLog.levels.shortData.forEach(function (data) {
                        prisma_client_1.prisma
                            .createSleepData({
                            sleepLogId: dbSleepLog.id,
                            dateTime: data.dateTime,
                            level: data.level,
                            second: data.seconds
                        })["catch"](function (error) {
                            console.log(error);
                        });
                    });
                }
                return [2 /*return*/];
        }
    });
}); };
//# sourceMappingURL=sleep.js.map