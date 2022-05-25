const debug = require("debug")("starterbot:test_function");
const { logRequest } = require("../../connections/db_connection");
const { getPrams } = require("./task_helper");

exports.handleTestCallback = async (body, client) => {
  const paramValues = await getPrams(body.view.state.values);
  const dropdownOption = paramValues["dropdown"];
  const textInput = paramValues["textInput"];

  // log the interaction for reporting
  debug(`test modal callback: ${dropdownOption} & ${textInput}`);
  logRequest(
    "test",
    {
      textInput: textInput,
      dropdown: dropdownOption,
    },
    body.user.username
  );
};
