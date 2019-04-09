const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
})
/**
 * Sempre que houver uma req de alteração ou de criação de um usuário
 * haverá encriptação com o uso do bcryptjs e será verficado, para o caso
 * de alteração se o password foi alterado
 */
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }
  this.password = await bcrypt.hash(this.password, 8)
})
UserSchema.methods = {
  compareHash (password) {
    return bcrypt.compare(password, this.password)
  }
}
UserSchema.statics = {
  generateToken ({ id }) {
    // gera token de acordo como id
    return jwt.sign({ id }, 'GoNode03', {
      // informa o que terá no jwt: o id do user, nome da aplicação
      expiresIn: 86400 // em quanto tempo expira
    })
  }
}
module.exports = mongoose.model('User', UserSchema)
