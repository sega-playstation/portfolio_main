import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);
console.log('Resend initialized.');


app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;
  try {
    await resend.emails.send({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_TO,
      subject: `New Contact from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    });
    return res.json({ success: true });
  } catch (error) {
    console.error("Email Error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
});

// Serve frontend static files (Vite production build)
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback (React Router, etc.)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Express server is listening on http://0.0.0.0:${PORT}`);
});

