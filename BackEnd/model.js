const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  companyName: {
    type: String,
    trim: true
  },
  eventName: {
    type: String,
    trim: true
  },
  specialization: {
    type: String,
    trim: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    trim: true
  },
  picture: {
    type: String,
    trim: true
  }
}, { timestamps: true });

const UserModel = mongoose.model("User", UserSchema, "users");

// Attendee Schema
const AttendeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  tShirtSize: {
    type: String,
    trim: true
  },
  role: {
    type: String,
    trim: true
  },
  food: {
    type: String,
    trim: true
  },
  occupation: {
    type: String,
    trim: true
  },
  gender: {
    type: String,
    trim: true
  }
  // Uncomment if used
  // paymentReceipt: {
  //   type: String,
  //   trim: true
  // }
}, { timestamps: true });

const AttendeeModel = mongoose.model('Attendee', AttendeeSchema);

module.exports = { UserModel, AttendeeModel };
