// Get a reference to the form and submit button
const bookingForm = document.getElementById('bookingForm');
const submitButton = document.getElementById('submitBooking');

// Function to handle form submission
function submitForm() {
  // Collect data from form fields
  const patientName = document.getElementById('patientName').value;
  const patientEmail = document.getElementById('patientEmail').value;
  const patientPhone = document.getElementById('patientPhone').value;
  const appointmentDateTime = document.getElementById('appointmentDateTime').value;
//   const appointmentTime = document.getElementById('appointmentTime').value;

  // You can collect data from other form fields similarly

  // Create an object to hold the collected data
  const formData = {
    patientName,
    patientEmail,
    patientPhone,
    appointmentDateTime
    // appointmentTime,
    // Add other form fields as needed
  };

  // Now, you can use the formData object to send the data to your server or perform other actions
  console.log(formData);

  // Optionally, you can reset the form after submission
  bookingForm.reset();
}

// Add a click event listener to the submit button
submitButton.addEventListener('click', submitForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
