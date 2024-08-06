const fs = require('fs')
const pdf = require('html-pdf')
const path = require('path')
const nodemailer = require('nodemailer')
const env = require('dotenv')
env.config()

const pdfTemplate = require("../utills/document.js")
exports.createPdf = async(req, res) => {
    pdf.create(pdfTemplate(req.body), {timeout: 300000 }).toFile(`pdfs/${req.body.reg}.pdf`, (err) => {
    if (err) {
        console.log(err);
        res.status(500).send('Error generating PDF');
    } else {
        res.send('pdf generated successfuly')
    }
    });

    // const browser = await pupp

    
};


exports.fetchPdf = (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname),'pdfs',`${req.body.reg}.pdf`))
}

exports.sendPdf = (req, res) => {
    const {email,reg} = req.body;
  console.log(email,reg)
    if (!reg) {
        console.log("no reg no")
      return res.status(400).send("Error: 'reg' parameter is missing.");
    }
  
    const pathToAttachment = path.join(path.dirname(__dirname), 'pdfs', `${reg}.pdf`);
  
    fs.readFile(pathToAttachment, (err, data) => {
      if (err) {
        console.error("File not found:", err);
        return res.status(404).send("Error: File not found.");
      }
  
      const attachment = data.toString("base64");
  
      const smtpTransport = nodemailer.createTransport({
        service: 'Outlook',
        auth: {
          user: process.env.EMAILID,
          pass: process.env.EMAILPASSWORD
        },
        tls: { rejectUnauthorized: false }
      });
  
      smtpTransport.sendMail({
        from: process.env.EMAILID,
        to: email,
        subject: "Test Pdf",
        html: "Testing pdf generate document, thanks",
        attachments: [
          {
            content: attachment,
            filename: 'invoice.pdf',
            contentType: 'application/pdf',
            encoding: 'base64'
          }
        ]
      }, (err, info) => {
        if (err) {
          console.error("Error sending email:", err);
          return res.status(500).send("Error sending email.");
        }
        res.send("Mail has been sent to your email. Check your mail.");
      });
    });
  };