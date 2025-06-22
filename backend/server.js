const express = require('express');
const cors = require('cors'); // ✅ Added CORS
const app = express();
const PORT = 3000;

app.use(cors()); // ✅ Enable CORS
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Backend!');
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact form submitted:');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Message: ${message}`);

  res.status(200).json({ success: true, message: 'Message received!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});