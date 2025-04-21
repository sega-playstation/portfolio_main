import express from 'express';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Loads .env variables
dotenv.config(); 

const app = express();
app.use(express.json());

// Initialize Resend with API key
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
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
