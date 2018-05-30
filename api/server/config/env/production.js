const production = {
  mongoDb: {
    uri: process.env.APP_PROD_MONGO_DB_URL,
  },
  mailTransport: {
    host: process.env.APP_PROD_MAIL_SMTP_HOST,
    port: process.env.APP_PROD_MAIL_PORT,
    user: process.env.APP_PROD_MAIL_USER,
    pass: process.env.APP_PROD_MAIL_PASS,
  },
};

export default production;
