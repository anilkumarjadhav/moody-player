require("dotenv").config(); // loads .env variables

module.exports = {
  port: process.env.PORT || 3000, // server port
  mongoUri: process.env.MONGO_URI, // cloud DB URI
  imageKit: {
    // ImageKit config
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
  },
};
