const fs = require('fs')
const pdf = require('html-pdf')
const path = require('path')
const nodemailer = require('nodemailer')
const env = require('dotenv')
env.config()

const pdfTemplate = require("../utills/document.js")
exports.createPdf = (req, res) => {
    pdf.create(pdfTemplate(req.body), {timeout: 300000 }).toFile('pdfs/invoice.pdf', (err) => {
    if (err) {
        console.log(err);
        res.status(500).send('Error generating PDF');
    } else {
        res.send('PDF generated');
    }
    });
};


exports.fetchPdf = (req, res) => {
    res.sendFile(path.join(path.dirname(__dirname),'pdfs','invoice.pdf'))
}

exports.sendPdf = (req, res) => {
    const pathToAttachment = path.join(path.dirname(__dirname), 'pdfs', 'invoice.pdf');
    const attachment = fs.readFileSync(pathToAttachment).toString("base64")

    let smptTransport = nodemailer.createTransport({
        host:'hotmail',
        service:'Outlook',
        port:587,
        secure:false,
        auth:{
            user:process.env.EMAILID,
            pass: process.env.EMAILPASSWORD
        },
        tls:{rejectUnauthorized:false}
    })

    smptTransport.sendMail({
        from:process.env.EMAILID,
        to:req.body.email,
        subject:"Test Pdf",
        html:`
        Teting pdf generate document , thanks`,
        attachments:[
            {
                content:attachment,
                filename: 'invoice.pdf',
                contentType: 'application/pdf' ,
                contentDisposition:'attachment',
                encoding: 'base64'
            }
        ]
    }, function(err,info){
        if(err){
            console.log(err);
        }
        res.send("Mail has been sended to you email. Check your mail")
    })
}