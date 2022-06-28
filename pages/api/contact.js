export default async function (req, res) {
  // // store email info in moralis db
  const Moralis = require("moralis/node");

  const serverUrl = "https://kbuw5v7jxsxa.usemoralis.com:2053/server";
  const appId = "eWgF6hJUPK14XZCfttLTsYw4yxITR3If5CLfFctR";
  const masterKey = "r8y7zATiNFbpsCML1L5ES961mrJqwlaAV1D4C3hH";
  await Moralis.start({ serverUrl, appId, masterKey });

  const candidateEmailInfo = Moralis.Object.extend("CandidateEmailInfo");
  const candidateEmail = new candidateEmailInfo();

  candidateEmail.set("Name", req.body.candidateName);
  candidateEmail.set("Email", req.body.candidateEmail);
  candidateEmail.set("UUID", req.body.uuid);

  await candidateEmail.save();

  console.log(req.body);

  let nodemailer = require("nodemailer");
  // TODO: change html message and email body

  // creates nodemailer transporter to send email
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "akumar190500@gmail.com",
      pass: "etthpslizpnzxvho", // unique password for third party gmail
    },
  });

  // message data
  const mailData = {
    from: '"Machis Navani" <akumar190500@gmail.com>', // sender address
    to: `${req.body.candidateEmail}`, // list of receivers
    subject: "Please Complete Your Background Check Form", // Subject line
    text: `localhost:3000/bg-check-form/${req.body.uuid}`, // plain text body
    // change this to html so we can add formatting and more professional email
  };

  // function call to send email logs error message incase of error
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
  });
  res.status(200);
}
