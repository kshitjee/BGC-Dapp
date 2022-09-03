export default async function (req, res) {
  // Moralis Init
  console.log(req.body);
  const Moralis = require("moralis/node");

  const serverUrl = "https://kbuw5v7jxsxa.usemoralis.com:2053/server";
  const appId = "eWgF6hJUPK14XZCfttLTsYw4yxITR3If5CLfFctR";
  const masterKey = "r8y7zATiNFbpsCML1L5ES961mrJqwlaAV1D4C3hH";
  await Moralis.start({ serverUrl, appId, masterKey });

  const userInfo = Moralis.Object.extend("_User");
  const query = new Moralis.Query(userInfo);
  query.equalTo("objectId", req.body);
  const user = await query.first({ useMasterKey: true });
  const userType = user.get("type");
  console.log(userType);

  if (userType.toString() == "NA") {
    res.status(200).json("NA");
  } else if (userType.toString() == "candidate") {
    res.status(200).json("candidate");
  } else if (userType.toString() == "company") {
    res.status(200).json("company");
  }
}
