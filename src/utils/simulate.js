/* * */
/* * */
/* * * * * */
/* SIMULATOR */
/* * */

async function slowNetworkRequest(stallTime = 3000) {
  await new Promise(resolve => setTimeout(resolve, stallTime));
}

export default {
  slowNetworkRequest
};
