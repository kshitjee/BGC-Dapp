export default function (req, res) {

    let nodemailer = require('nodemailer')
    // TODO: change html message and email body

    // creates nodemailer trasnporter to send email
    const transporter =  nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: 'akumar190500@gmail.com', 
              pass: 'etthpslizpnzxvho', // unique password for third party gmail
            },
          });

    // message data

    const mailData = {
        from: '"Machis Navani" <akumar190500@gmail.com>', // sender address
        to: `${req.body.candidateEmail}`, // list of receivers
        subject: "Please Complete Your Background Check Form", // Subject line
        text: `localhost:3000/initiate-bg-check/${req.body.uuid}`// plain text body
        // change this to html so we can add formatting and more professional email
    }

    // function call to send email logs error message incase of error
    transporter.sendMail(mailData, function (err, info) {
      if(err)
        console.log(err)
    })
    res.status(200)
  }