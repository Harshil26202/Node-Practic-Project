const sgMail = require('@sendgrid/mail')


const SENDGRID_API_KEY = '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'

sgMail.setApiKey(SENDGRID_API_KEY)


const msg = {
  to: 'harshil26202@gmail.com', // Change to your recipient
  from: 'hkharshil26202@gmail.com', // Change to your verified sender
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}
sgMail
  .send(msg)
  .then(() => {
    console.log('Email sent')
  })
  .catch((error) => {
    console.error(error)
  })