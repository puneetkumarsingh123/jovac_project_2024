const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Dummy user data
const users = [
  { email: 'test@test.com', password: '$2a$10$J2PpRdwAI.Y/.8D9UbElOehTLQYK/jnmXTuxIG6ckcGJxtClLrcXW' } // password: 'password123'
];

// Root route
app.get('/', (req, res) => {
  res.send('Backend is working!');
});

// Login route
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // Find the user by email
  const user = users.find(user => user.email === email);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Compare the password with the hashed password stored
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  // Generate a JWT token
  const token = jwt.sign({ email: user.email }, 'secret', { expiresIn: '1h' });

  // Send the token back to the client
  res.json({ token });
});

// Run the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
