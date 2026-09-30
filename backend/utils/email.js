const nodemailer = require('nodemailer');

const sendWelcomeEmail = async (email, name, role) => {
  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Registration Successful - Home Tutoring Platform',
      text: `Hello ${name},\n\nYour registration as a ${role} on the Home Tutoring Platform was successful. We will contact you soon.\n\nBest regards,\nThe Team`
    };

    await transporter.sendMail(mailOptions);
    console.log(`Welcome email sent to ${email}`);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

module.exports = { sendWelcomeEmail };
