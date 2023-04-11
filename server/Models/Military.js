const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
let militarySchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  id_no: {
    type: Number
  }
}, {
    collection: 'militaries'
  })
  
module.exports = mongoose.model('Military', militarySchema)