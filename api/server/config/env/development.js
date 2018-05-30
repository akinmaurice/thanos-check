const development = {
  mongoDb: {
    uri: process.env.APP_DEV_MONGO_DB_URL,
  },
  mailTransport: {
    host: process.env.APP_DEV_MAIL_SMTP_HOST,
    port: process.env.APP_DEV_MAIL_PORT,
    user: process.env.APP_DEV_MAIL_USER,
    pass: process.env.APP_DEV_MAIL_PASS,
  },
};

export default development;
