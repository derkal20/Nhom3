var mongoose = require('mongoose')

module.exports = async function() {
  let url = process.env.DATABASE_URL
  try {
    await mongoose.connect(url)
    console.log('connect successful');
  } catch (error) {
    console.log(error);
  }
}