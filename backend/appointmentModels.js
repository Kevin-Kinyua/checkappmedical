// Import necessary modules
const mongoose = require('mongoose');

// Define the MongoDB connection URL (replace with your actual MongoDB URL)
const mongoURI = 'mongodb://localhost/your-database-name';

// Connect to MongoDB
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Define mongoose schemas
const Schema = mongoose.Schema;

// User Schema
const userSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  userType: { type: String, enum: ['patient', 'provider'] },
  // Add other user-specific fields here
});

// Appointment Schema
const appointmentSchema = new Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  appointmentDate: Date,
  appointmentTime: String,
  location: String,
  status: String,
  // Add other appointment-specific fields here
});

// Healthcare Provider Schema
const healthcareProviderSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  specialty: String,
  clinicName: String,
  location: String,
  officeHours: String,
  // Add other provider-specific fields here
});

// Patient Schema
const patientSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  dateOfBirth: Date,
  medicalHistory: String,
  insuranceInformation: String,
  // Add other patient-specific fields here
});

// Review Schema
const reviewSchema = new Schema({
  patientId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  providerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  rating: Number,
  comment: String,
  timestamp: { type: Date, default: Date.now },
});

// Message Schema
const messageSchema = new Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  message: String,
  timestamp: { type: Date, default: Date.now },
});

// Settings Schema
const settingsSchema = new Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  notificationPreferences: String,
  languagePreference: String,
  // Add other settings-specific fields here
});

// Define models based on the schemas
const User = mongoose.model('User', userSchema);
const Appointment = mongoose.model('Appointment', appointmentSchema);
const HealthcareProvider = mongoose.model('HealthcareProvider', healthcareProviderSchema);
const Patient = mongoose.model('Patient', patientSchema);
const Review = mongoose.model('Review', reviewSchema);
const Message = mongoose.model('Message', messageSchema);
const Settings = mongoose.model('Settings', settingsSchema);

// Export the models
module.exports = { User, Appointment, HealthcareProvider, Patient, Review, Message, Settings };
// _____________________________________________________________________//
// ________________________test code below_____________________________//
// _____________________________________________________________________//
// const mongoose = require('mongoose');
// const { Appointment } = require('./appointmentModels'); // Import your Mongoose model

// // Assuming you've collected the data in a formData object as shown earlier
// const formData = {
//   fullName: 'John Doe',
//   email: 'john@example.com',
//   appointmentDate: '2023-09-15',
//   appointmentTime: '14:00',
//   // Other form data
// };

// // Create a new instance of the Appointment model using the collected data
// const newAppointment = new Appointment(formData);

// // Save the new appointment to the MongoDB database
// newAppointment.save()
//   .then((result) => {
//     console.log('Appointment saved:', result);
//     // Handle success
//   })
//   .catch((error) => {
//     console.error('Error saving appointment:', error);
//     // Handle error
//   });
