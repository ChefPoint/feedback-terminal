/* * */
/* * */
/* * * * * */
/* STRINGER */
/* * */

function extractStringInBetween(leftSide, stringToExtractFrom, rightSide) {
  return stringToExtractFrom
    .split(leftSide)
    .pop()
    .split(rightSide)[0];
}

export default {
  extractStringInBetween
};
