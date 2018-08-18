"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const express_1 = __importDefault(require("express"));
dotenv_1.default.config({ path: ".env" });
const app = express_1.default();
app.set("port", process.env.PORT || 8000);
/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorhandler_1.default());
/**
 * Start Express server.
 */
const server = app.listen(8000, () => {
    console.log("\n  App is running at http://localhost:%d", app.get("port"));
    console.log("  Press CTRL-C to stop\n");
});
app.get("/", (req, res) => {
    res.send("Hello");
});
exports.default = server;
//# sourceMappingURL=server.js.map