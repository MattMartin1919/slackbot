const debug = require("debug")("starterbot:action_handler");
const TestModal = require("../../visuals/modals/testModal");

/**
 * Pulls up the test modal for the user
 * @param {object} client Object for view functions
 * @param {object} body Object for view info
 */
async function showTestModal(client, body) {
  try {
    await client.views.open({
      trigger_id: body.trigger_id,
      view: await TestModal.getModal(),
    });
  } catch (error) {
    debug(`Error calling test modal: ${error}`);
  }
}

exports.handleActions = async ({
  action,
  ack,
  respond,
  context,
  body,
  client,
}) => {
  // Acknowledge the action
  await ack();

  // Adjust the response modal based on input
  switch (action.action_id) {
    case "Test":
      debug("test action seen");
      await showTestModal(client, body);
      break;
    default:
      debug(`extra data action seen: ${action.action_id}`);
      break;
  }
};
