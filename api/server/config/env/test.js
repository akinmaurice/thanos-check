const test = {
  mongoDb: {
    uri: process.env.APP_TEST_MONGO_DB_URL,
  },
  mailTransport: {
    host: process.env.APP_TEST_MAIL_SMTP_HOST,
    port: process.env.APP_TEST_MAIL_PORT,
    user: process.env.APP_TEST_MAIL_USER,
    pass: process.env.APP_TEST_MAIL_PASS,
  },
};

export default test;
