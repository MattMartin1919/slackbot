const debug = require("debug")("starterbot:success_handler");
const testFunctions = require("../tasks/test");

exports.handleSuccess = async ({ ack, body, view, client }) => {
  // Acknowledge the view_submission event
  await ack();

  try {
    await client.chat.postMessage({
      channel: body.user.id,
      text: "Working on this request for you ... ",
    });
  } catch (error) {
    debug(`error posting the "working on it" message: ${error}`);
  }

  // Adjust action based on input
  switch (view.callback_id) {
    case "testModalCallback":
      debug("test model submitted");
      await testFunctions.handleTestCallback(body, client);
      break;
    default:
      debug(`Unhandled success callback: ${view.callback_id}`);
      break;
  }
};
