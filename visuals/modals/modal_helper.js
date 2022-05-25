/**
 * Returns a text section
 * @param {str} blockId Block name
 * @param {str} actionId Action ID
 * @param {str} labelText Label text
 * @param {str} options Options to display / search
 * @return {object} Input section for menu
 */
function menuTextInputSection(blockId, actionId, labelText) {
  return {
    type: "input",
    block_id: blockId,
    element: {
      type: "plain_text_input",
      action_id: actionId,
      min_length: 1,
      max_length: 10,
      placeholder: {
        type: "plain_text",
        text: labelText,
      },
      action_id: actionId,
    },
    label: {
      type: "plain_text",
      text: labelText,
      emoji: true,
    },
  };
}

/**
 * Returns an input section
 * @param {str} blockId Block name
 * @param {str} actionId Action ID
 * @param {str} labelText Label text
 * @param {str} options Options to display / search
 * @return {object} Input section for menu
 */
function menuSelectInputSection(blockId, actionId, labelText, options) {
  return {
    type: "input",
    block_id: blockId,
    element: {
      type: "static_select",
      action_id: "input",
      options: options,
      action_id: actionId,
    },
    label: {
      type: "plain_text",
      text: labelText,
      emoji: true,
    },
  };
}

/**
 * Returns a plain text item for the menu sections
 * @param {str} value Internal value of the item
 * @param {str} text Displayable text for the item
 * @return {object} Plain text object
 */
function plainTextItem(value, text) {
  return {
    text: {
      type: "plain_text",
      text: text,
      emoji: true,
    },
    value: value,
  };
}

module.exports = {
  menuTextInputSection,
  menuSelectInputSection,
  plainTextItem,
};
