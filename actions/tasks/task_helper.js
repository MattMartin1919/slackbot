/**
 * Gets the select values from an success payload
 * @param {Array} valueArray response from payload
 * @return {object} An object of select params from a payload
 */
async function getPrams(valueArray) {
  const paramValues = {};
  Object.keys(valueArray).forEach((elem) => {
    const key = valueArray[elem];
    const subKey = Object.keys(key)[0];
    let value = null;
    if (key[subKey].type == "static_select") {
      value = key[subKey].selected_option.value;
    } else if (key[subKey].type == "plain_text_input") {
      value = key[subKey].value;
    }
    paramValues[subKey] = value;
  });
  return paramValues;
}

module.exports = {
  getPrams,
};
