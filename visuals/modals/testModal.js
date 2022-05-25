const {
  menuTextInputSection,
  menuSelectInputSection,
  plainTextItem,
} = require("./modal_helper");

/**
 * @return {array} An array of report options
 */
function getReportOptions() {
  return [plainTextItem("test_1", "Test 1"), plainTextItem("test_2", "Test 2")];
}

exports.getModal = async () => {
  return {
    type: "modal",
    callback_id: "testModalCallback",
    notify_on_close: true,
    clear_on_close: true,
    title: {
      type: "plain_text",
      text: "Test",
    },
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Please provide some more info so I can do something.",
        },
      },
      {
        type: "divider",
      },
      menuSelectInputSection(
        "dropdown",
        "dropdown",
        "Dropdown",
        getReportOptions()
      ),
      menuTextInputSection("text_input", "textInput", "Text Input"),
    ],
    submit: {
      type: "plain_text",
      text: "Go",
    },
    close: {
      type: "plain_text",
      text: "Cancel",
    },
  };
};
