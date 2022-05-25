exports.getBlock = () => {
  return {
    blocks: [
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "*Hey! Please select one of the options below.*",
        },
      },
      {
        type: "divider",
      },
      mainMenuItem("Test", "Test", "Test description here"),
      {
        type: "divider",
      },
      {
        type: "section",
        fields: [
          {
            type: "mrkdwn",
            text: " <https://test.com|Submit a bug or feature request!> :smile:",
          },
          {
            type: "plain_text",
            text: "\\ ゜ o ゜)ノ",
            emoji: true,
          },
        ],
      },
    ],
  };
};

/**
 * Returns a main menu item
 * @param {str} actionId ID for the action
 * @param {str} headerText Main text displayed for item
 * @param {str} subText Short description of item
 * @return {object} Object for menu
 */
function mainMenuItem(actionId, headerText, subText) {
  return {
    type: "section",
    text: {
      type: "mrkdwn",
      text: `*${headerText}*\n${subText}`,
    },
    accessory: {
      type: "button",
      text: {
        type: "plain_text",
        emoji: true,
        text: "Go",
      },
      action_id: actionId,
    },
  };
}
