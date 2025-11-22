require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const querySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    message: { type: String, required: true },
    relationToStudent: { type: String },
    studentName: { type: String },
    className: { type: String },
    preferredContactMethod: { type: String },
    preferredContactTime: { type: String },
  },
  { timestamps: true }
);

const Query = mongoose.model("Query", querySchema);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/query", async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      subject,
      message,
      relationToStudent,
      studentName,
      className,
      preferredContactMethod,
      preferredContactTime,
    } = req.body;

    if (!name || !email || !phone || !subject || !message) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    const query = new Query({
      name,
      email,
      phone,
      subject,
      message,
      relationToStudent,
      studentName,
      className,
      preferredContactMethod,
      preferredContactTime,
    });
    await query.save();

    const adminMailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      subject: `New Query from ${name} - ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1f2933;">
          <h2 style="margin-bottom: 8px;">New Query Received</h2>
          <p style="margin: 0 0 16px;">You have received a new enquiry from the school website.</p>
          <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tbody>
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Name</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${name}</td>
              </tr>
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Email</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${email}</td>
              </tr>
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Phone</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${phone}</td>
              </tr>
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Subject</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${subject}</td>
              </tr>
              ${relationToStudent ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Relation to Student</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${relationToStudent}</td>
              </tr>` : ""}
              ${studentName ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Student Name</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${studentName}</td>
              </tr>` : ""}
              ${className ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Class / Grade</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${className}</td>
              </tr>` : ""}
              ${preferredContactMethod ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Preferred Contact Method</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${preferredContactMethod}</td>
              </tr>` : ""}
              ${preferredContactTime ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Preferred Contact Time</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${preferredContactTime}</td>
              </tr>` : ""}
            </tbody>
          </table>
          <h3 style="margin: 24px 0 8px;">Message</h3>
          <p style="white-space: pre-line; border: 1px solid #e5e7eb; padding: 12px; border-radius: 4px; background-color: #f9fafb;">${message}</p>
          <p style="margin-top: 24px; font-size: 12px; color: #6b7280;">This email was generated automatically from the school website query form.</p>
        </div>
      `,
    };

    const clientMailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: "We have received your query",
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1f2933;">
          <h2 style="margin-bottom: 8px;">Thank you for contacting us, ${name}.</h2>
          <p style="margin: 0 0 16px;">We have received your query and our team will get back to you within 24 working hours.</p>
          <h3 style="margin: 16px 0 8px;">Summary of your query</h3>
          <table cellpadding="6" cellspacing="0" style="border-collapse: collapse; width: 100%; max-width: 600px;">
            <tbody>
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Subject</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${subject}</td>
              </tr>
              ${relationToStudent ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Relation to Student</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${relationToStudent}</td>
              </tr>` : ""}
              ${studentName ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Student Name</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${studentName}</td>
              </tr>` : ""}
              ${className ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Class / Grade</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${className}</td>
              </tr>` : ""}
              ${preferredContactMethod ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Preferred Contact Method</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${preferredContactMethod}</td>
              </tr>` : ""}
              ${preferredContactTime ? `
              <tr>
                <td style="font-weight: 600; border-bottom: 1px solid #e5e7eb;">Preferred Contact Time</td>
                <td style="border-bottom: 1px solid #e5e7eb;">${preferredContactTime}</td>
              </tr>` : ""}
            </tbody>
          </table>
          <h3 style="margin: 24px 0 8px;">Your message</h3>
          <p style="white-space: pre-line; border: 1px solid #e5e7eb; padding: 12px; border-radius: 4px; background-color: #f9fafb;">${message}</p>
          <p style="margin-top: 24px;">If you need to share any additional information, you can reply directly to this email.</p>
          <p style="margin-top: 16px; font-size: 12px; color: #6b7280;">Abhimanyu Public Higher Secondary School</p>
        </div>
      `,
    };

    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(clientMailOptions),
    ]);

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error handling /api/query:", err);
    return res.status(500).json({ success: false, error: "Internal server error" });
  }
});

// Admin: list all queries
app.get("/api/admin/queries", async (req, res) => {
  try {
    const queries = await Query.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, data: queries });
  } catch (err) {
    console.error("Error fetching queries:", err);
    return res.status(500).json({ success: false, error: "Failed to fetch queries" });
  }
});

// Admin: send custom email from dashboard
app.post("/api/admin/send-email", async (req, res) => {
  try {
    const { to, subject, message } = req.body;

    if (!to || !subject || !message) {
      return res.status(400).json({ success: false, error: "To, subject and message are required" });
    }

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; font-size: 14px; color: #1f2933;">
          <p style="margin: 0 0 16px; white-space: pre-line;">${message}</p>
          <p style="margin-top: 24px; font-size: 12px; color: #6b7280;">Sent from the Abhimanyu Public Higher Secondary School admin dashboard.</p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Error in /api/admin/send-email:", err);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
});

app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(PORT, () => {
  console.log(`Backend server running on port ${PORT}`);
});
