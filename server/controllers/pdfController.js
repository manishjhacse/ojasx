const fs = require("fs");
const pdf = require("html-pdf");
const path = require("path");
const nodemailer = require("nodemailer");
const env = require("dotenv");
const stream = require("stream");
const pdfTemplate = require("../utills/document.js");
const cloudinary = require("cloudinary").v2;
const { User } = require("../models/userModel.js");
const sendMail = require("../utills/sendEmail.js");
const { admin, bucket } = require("../config/firebase.js");

env.config();
exports.createPdf = async (req, res) => {
  const userId = req.body.userId;

  pdf
    .create(pdfTemplate(req.body), { timeout: 300000 })
    .toBuffer(async (err, buffer) => {
      if (err) {
        console.log(err);
        return res.status(500).send("Error generating PDF");
      } else {
        try {
          // Create a readable stream from the buffer
          const readableStream = new stream.PassThrough();
          readableStream.end(buffer);

          const fileName = `pdfs/${userId}_${Date.now()}.pdf`;
          const file = bucket.file(fileName);

          await new Promise((resolve, reject) => {
            const stream = file.createWriteStream({
              metadata: {
                contentType: "application/pdf",
              },
            });

            readableStream
              .pipe(stream)
              .on("finish", () => resolve())
              .on("error", (error) => reject(error));
          });

          const [fileUrl] = await file.getSignedUrl({
            action: "read",
            expires: "03-09-2491",
          });

          // Save Firebase URL to user model's invoices array
          const user = await User.findById(userId);
          if (!user) {
            return res.status(404).send("User not found");
          }

          user.invoices.push({ url: fileUrl });
          await user.save();

          // Respond to the client
          res.send("PDF generated and uploaded to Firebase successfully");
        } catch (uploadErr) {
          console.log(uploadErr);
          res.status(500).send("Error uploading PDF to Firebase");
        }
      }
    });
};

exports.fetchPdf = (req, res) => {
  res.sendFile(
    path.join(path.dirname(__dirname), "pdfs", `${req.body.userId}.pdf`)
  );
};

exports.sendPdf = async (req, res) => {
  const { email, userId } = req.body;

  if (!userId) {
    console.log("no userId");
    return res.status(400).send("Error: 'userId' parameter is missing.");
  }

  try {
    // Find the user by userId
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).send("Error: User not found.");
    }

    // Get the last invoice link from the user's invoices array
    if (!user.invoices || user.invoices.length === 0) {
      return res.status(404).send("Error: No invoices found for the user.");
    }

    const lastInvoice = user.invoices[user.invoices.length - 1];
    const invoiceLink = lastInvoice.url;
    const mailMessage = `Congratulations! You have successfully registered for the event. You can download your pass from the following link: ${invoiceLink}`;
    const result = await sendMail(email, "Invoice", mailMessage);

    if (result.success) {
      return res.status(201).json({
        success: true,
        invoice: invoiceLink,
      });
    } else {
      console.log("unable to send message")
      return res.status(501).json(result);
    }
  } catch (err) {
    console.error("Error finding user or sending email:", err);
    res.status(500).send("Error processing request.");
  }
};
