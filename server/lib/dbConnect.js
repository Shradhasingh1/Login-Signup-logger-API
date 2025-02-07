const mongoose = require("mongoose");
const dbConnect = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://shradha1512:yUizOZ487OwmlceY@cluster0.lrb8o.mongodb.net/",
      {
        dbName: "react-login-with-node",
      }
    );
    console.log("Connected to MongoDB!");
  } catch (error) {
    console.log("failed to connect to database!");
  }
};

module.exports = dbConnect;
