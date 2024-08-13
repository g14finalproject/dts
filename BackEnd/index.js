const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { UserModel, AttendeeModel } = require("./model"); // Import models
const dotenv = require("dotenv");

dotenv.config({
  path: ".env", // Give .env file location
});

const port = process.env.PORT || 5000; // Use the PORT environment variable with a default value
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*'
}));

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("MongoDB connected successfully");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
  process.exit(1); // Exit process on connection failure
});

// User Routes

// Register a new user
app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then((user) => res.status(201).json(user))
    .catch((error) => res.status(400).json({ message: error.message }));
});

// Update user details
app.post('/update', async (req, res) => {
  const { id, email, phone, companyName, eventName, specialization, startDate, endDate, time } = req.body;

  if (!id) {
    return res.status(400).json({ error: 'ID is required' });
  }

  // Validate date fields
  let start = new Date(startDate);
  let end = new Date(endDate);

  if (isNaN(start.getTime()) || isNaN(end.getTime())) {
    return res.status(400).json({ error: 'Invalid date format' });
  }

  try {
    const updatedUser = await UserModel.findByIdAndUpdate(
      id,
      { email, phone, companyName, eventName, specialization, startDate: start, endDate: end, time },
      { new: true, runValidators: true } // Return the updated document and run schema validators
    );

    if (!updatedUser) {
      return res.status(404).json({ error: 'User not found' });
    }

    res.json(updatedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all custom users
app.get("/getUsers", async (req, res) => {
  try {
    const allData = await UserModel.find({ type: 'CUSTOM' });
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get all admins
app.get("/getAdmins", async (req, res) => {
  try {
    const allData = await UserModel.find({ type: 'ADMIN' });
    res.json(allData);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Attendee Routes

// Register a new attendee
app.post("/attendeesregister", async (req, res) => {
  try {
    const attendee = new AttendeeModel(req.body);
    await attendee.save();
    res.status(201).json(attendee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get all attendees
app.get("/attendees", async (req, res) => {
  try {
    const attendees = await AttendeeModel.find();
    res.json(attendees);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
