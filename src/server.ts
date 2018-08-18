import dotenv from 'dotenv';
import errorHandler from 'errorhandler';
import express from 'express';

dotenv.config({ path: ".env" });

const app = express();
app.set("port", process.env.PORT || 8000);

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

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

export default server;
