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
var bodyParser = require("body-parser");
var querystring = require("querystring");
var axios_1 = require("axios");
var utils_1 = require("./utils");
var aggregate_1 = require("./api/googlefit/aggregate");
var graphql_yoga_1 = require("graphql-yoga");
var permissions_1 = require("./permissions");
var prisma_client_1 = require("./generated/prisma-client");
var resolvers_1 = require("./resolvers");
var server = new graphql_yoga_1.GraphQLServer({
    typeDefs: "src/schema.graphql",
    resolvers: resolvers_1.resolvers,
    middlewares: [permissions_1.permissions],
    context: function (request) {
        return __assign({}, request, { db: prisma_client_1.prisma });
    }
});
// CORS
server.express.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
// BodyParsing for JSON
server.express.use(bodyParser.json());
server.express.use(bodyParser.urlencoded({ extended: true }));
server.express.get("/hello", function (req, res) {
    aggregate_1.fetchAggregateSteps("me", 1538798400000, 1541217600000);
    res.send("HELLO NONGRAPHQL ENDPOINT");
});
server.express.get("/oauthcallback", function (req, res) { });
server.express.post("/user/:id/googlefitauthenticate", function (req, res) {
    var userId = req.params.id;
    var oneTimeCode = req.body.code;
    // WE ARE HERE, NOW TO REFRESH THE TOKEN!
});
server.express.post("/user/:id/fitbitauthenticate", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var userId, oneTimeCode;
    var _this = this;
    return __generator(this, function (_a) {
        userId = req.params.id;
        oneTimeCode = req.body.code;
        axios_1["default"]({
            method: "post",
            url: "https://api.fitbit.com/oauth2/token?" +
                querystring.stringify({
                    grant_type: "authorization_code",
                    code: oneTimeCode,
                    client_id: process.env.FITBIT_CLIENT_ID,
                    redirect_uri: "http://localhost:3000/auth/fitbit"
                }),
            data: {},
            headers: {
                Authorization: "Basic " + utils_1.base64Hash(process.env.FITBIT_CLIENT_ID + ":" + process.env.FITBIT_CLIENT_SECRET),
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
            .then(function (response) { return __awaiter(_this, void 0, void 0, function () {
            var payload, expirationDate, existingAccount, acct, _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        payload = response.data;
                        expirationDate = new Date();
                        expirationDate.setSeconds(expirationDate.getSeconds() + payload.expires_in);
                        existingAccount = prisma_client_1.prisma.fitbitAccount({
                            userId: userId
                        });
                        if (!!existingAccount) return [3 /*break*/, 1];
                        prisma_client_1.prisma
                            .createFitbitAccount({
                            userId: userId,
                            accessToken: payload.access_token,
                            refreshToken: payload.refresh_token,
                            fitbitUserId: payload.user_id,
                            expiration: expirationDate.toISOString()
                        })
                            .then(function (acct) { })["catch"](function (error) {
                            console.log(error);
                        });
                        return [3 /*break*/, 3];
                    case 1:
                        _b = (_a = prisma_client_1.prisma).updateFitbitAccount;
                        _c = {
                            data: {
                                userId: userId,
                                accessToken: payload.access_token,
                                refreshToken: payload.refresh_token,
                                fitbitUserId: payload.user_id,
                                expiration: expirationDate.toISOString()
                            }
                        };
                        _d = {
                            userId: userId
                        };
                        return [4 /*yield*/, existingAccount.id()];
                    case 2:
                        acct = _b.apply(_a, [(_c.where = (_d.id = _e.sent(),
                                _d),
                                _c)])
                            .then(function (ok) { })["catch"](function (error) {
                            console.log(error);
                        });
                        _e.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        }); })["catch"](function (error) {
            // console.log(error);
            console.log(error);
            console.log(error.response.data.errors);
        });
        return [2 /*return*/];
    });
}); });
server.start(function () { return console.log("Server is running on http://localhost:4000"); });
//# sourceMappingURL=index.js.map