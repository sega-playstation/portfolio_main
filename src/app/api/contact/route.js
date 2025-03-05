// server.js (run this with "node server.js" or via your dev script)

import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config(); // Loads .env variables like RESEND_API_KEY, EMAIL_FROM, EMAIL_TO

const app = express();
app.use(express.json()); // Parse JSON request bodies

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });

    // Respond to the client with success
    return res.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
