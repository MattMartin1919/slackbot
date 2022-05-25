const debug = require("debug")("starterbot:test_function");
const { logRequest } = require("../../connections/db_connection");
const { getPrams } = require("./task_helper");

exports.handleTestCallback = async (body, client) => {
  const paramValues = await getPrams(body.view.state.values);
  const reportType = paramValues["dropdown"];
  const partnerId = paramValues["textInput"];

  // log the interaction for reporting
  logRequest(
    "test",
    {
      partnerId: partnerId,
      report_type: reportType,
    },
    body.user.username
  );
};
