require("dotenv").config();
const debug = require("debug")("starterbot:main");
const { App } = require("@slack/bolt");
const MainMenuBlock = require("./visuals/blocks/mainMenuBlock");
const ActionHandler = require("./actions/handlers/blockActionHandler");
const successHandler = require("./actions/handlers/modalSubmissionHandler");

// Define socket connection (no external site needed)
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Capture all messages and respond with main modal
app.message(/[^]*/, async ({ message, say }) => {
  debug("main block shown");
  await say(MainMenuBlock.getBlock());
});

// Capture the modal submit event and pass data to handler
app.view({ type: "view_submission" }, async ({ ack, body, view, client }) =>
  successHandler.handleSuccess({ ack, body, view, client })
);

// Capture modal closes (NOT NEEDED CURRENTLY BUT MIGHT BE USEFUL)
app.view({ type: "view_closed" }, async ({ ack, body, view, client, say }) => {
  await ack();
  debug("modal closed");
});

// Send all actions to action handler
app.action(/[^]*/, async ({ action, ack, respond, context, body, client }) =>
  ActionHandler.handleActions({
    action,
    ack,
    respond,
    context,
    body,
    client,
  })
);

// Catch all errors
app.error((error) => {
  if (process.env.NODE_ENV === "production") {
    console.log("Uncaught error: ", error);
  } else {
    debug("Uncaught error: ", error);
  }
});

// Start the app and get user profiles
(async () => {
  await app.start(process.env.PORT || 3000);
  if (process.env.NODE_ENV === "production") {
    console.log("Slack bot is running!");
  } else {
    debug("Slack bot is running!");
  }
})();
