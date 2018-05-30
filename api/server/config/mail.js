import Q from 'q';

import nodemailer from 'nodemailer';

// Import Config
import config from './';

const transport = nodemailer.createTransport({
  host: config.mailTransport.host,
  port: config.mailTransport.port,
  auth: {
    user: config.mailTransport.user,
    pass: config.mailTransport.pass,
  },
});

const send = async(options) => {
  const defer = Q.defer();
  const mailOptions = {
    from: config.mailTransport.user,
    subject: options.subject,
    to: options.user,
    html: options.message,
    text: options.message,
  };
  transport.sendMail(mailOptions)
    .then((response) => {
      defer.resolve(response);
    })
    .catch((error) => {
      defer.reject(error);
    });
  return defer.promise;
};

export default send;

