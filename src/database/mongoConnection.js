const mongoose = require("mongoose");

const connectToMongoDB = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}/healthData`,
    (error) => {
      if (error) {
        return console.log("Error to connect in mongoDB: ", error);
      }

      return console.log("Mongodb Connected Successfully!");
    }
  );
};

module.exports = connectToMongoDB;
