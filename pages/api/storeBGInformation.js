export default async function (req, res) {
  /* import moralis */
  const Moralis = require("moralis/node");

  /* Moralis init code */
  const serverUrl = "https://hgifqgo45pby.usemoralis.com:2053/server";
  const appId = "KvVxjZkZnuMdbyIQvgW1YjRJw9sAyZUr2SUOMr92";
  const masterKey = "T7hn5HVChjLa17Xxx7wvn3NcDVkqdqz7D67c5CPP";

  await Moralis.start({ serverUrl, appId, masterKey });

  const body = req.body;
  console.log(body);

  const candidateBackgroundInfo = Moralis.Object.extend("CandidateBGInfo");

  // gotta change this shit thats why its commented out

  // const candidateInfo = new candidateBackgroundInfo();
  // candidateInfo.set("prefix", body.prefix);
  // candidateInfo.set("suffix", body.suffix);
  // candidateInfo.set("firstName", body.first);
  // candidateInfo.set("middleName", body.middle);
  // candidateInfo.set("lastName", body.last);
  // candidateInfo.set("email", body.email);
  // candidateInfo.set("phoneNumber", body.number);
  // candidateInfo.set("country", body.country);
  // candidateInfo.set("state", body.state);
  // candidateInfo.set("city", body.city);
  // candidateInfo.set("postalCode", body.postal[0]);
  // candidateInfo.set("address", body.address);
  // candidateInfo.set("gender", body.gender);

  // const savedInfo = await candidateInfo.save();

  res.status(200).json("stored in db!");
}
