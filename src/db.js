import mongoose from 'mongoose';

const connectToDB = (url = process.env.DB_CONNECTION_URL) =>
  mongoose.connect(
    url,
    { useNewUrlParser: true, useCreateIndex: true }
  );

export default connectToDB;
