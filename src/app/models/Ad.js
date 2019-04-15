const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')

const Ad = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  /**
   * abaixo está sendo criado um relacionamento referenciando outro model(User)
   * Nota: se fosse o caso ter vários autores, teríamos um array, seria a única diferença
   */
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
Ad.plugin(mongoosePaginate)
module.exports = mongoose.model('Ad', Ad)
