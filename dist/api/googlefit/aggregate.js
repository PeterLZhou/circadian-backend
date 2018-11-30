"use strict";
exports.__esModule = true;
var request = require("request");
var google_auth_library_1 = require("google-auth-library");
exports.fetchAggregateSteps = function (userId, startTimeMillis, endTimeMillis) {
    var oAuth2Client = new google_auth_library_1.OAuth2Client({
        clientId: process.env["GOOGLE_FIT_CLIENT_ID"],
        clientSecret: process.env["GOOGLE_FIT_CLIENT_SECRET"],
        redirectUri: ""
    });
    var requestParameters = {
        uri: "https://www.googleapis.com/fitness/v1/users/" + userId + "/dataset:aggregate",
        body: JSON.stringify({
            aggregateBy: [
                {
                    dataSourceId: "derived:com.google.step_count.delta:com.google.android.gms:estimated_steps"
                }
            ],
            bucketByTime: { durationMillis: 86400000 },
            startTimeMillis: startTimeMillis,
            endTimeMillis: endTimeMillis
        }),
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer ya29.GltJBkyDYGISstu--y_GJrud2PrCD9vR9hyUukkb0n9xt10MwvUSSMpVRIyc3fjC-s7faN935Y251XLArxJkmmr29M5d3haKpxMuv9z8xVC6M_8_eGGbAo6PgBWo"
        }
    };
    request(requestParameters, function (error, response) {
        console.log("HERE");
        // console.log(error);
        console.log(response.body);
        // console.log(error, response.body);
        return;
    });
};
//# sourceMappingURL=aggregate.js.map