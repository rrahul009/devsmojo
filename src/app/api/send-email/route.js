// import nodemailer from 'nodemailer';

// export async function POST(request) {
//   try {
//     // Parse the JSON body of the request
//     const { name, email, phone, message, startDate } = await request.json();

//     // Configure the email transporter using direct credentials
//     const transporter = nodemailer.createTransport({
//       service: 'gmail', // or use another service
//       auth: {
//         user: 'rrahulkumaryadav347@gmail.com', // Replace with your email address
//         pass: 'nhjp lsgo esnw wfle',   // Replace with your email password
//       },
//     });

//     // Define the email options
//     const mailOptions = {
//       from:email, // Replace with your email address
//       to: 'rrahulkumaryadav347@gmail.com', // Replace with the recipient's email address
//       subject: 'New Contact Form Submission',
//       replyTo: email,
//       text: `
//         Name: ${name}
//         Email: ${email}
//         Phone: ${phone}
//         Preferred Date and Time: ${startDate}
//         Message: ${message}
//       `,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Preferred Date and Time:</strong> ${startDate}</p>
//         <p><strong>Message:</strong> ${message}</p>
//       `,
//     };

//     // Send the email
//     await transporter.sendMail(mailOptions);

//     // Return a success response
//     return new Response(JSON.stringify({ success: true }), { status: 200 });
//   } catch (error) {
//     console.error('Error sending email:', error);
//     // Return an error response
//     return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
//   }
// }
