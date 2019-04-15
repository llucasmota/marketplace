const Ad = require('../models/Ad')

class AdController {
  async index (req, res) {
    const ads = await Ad.find()

    return res.json(ads)
  }
  async show (req, res) {
    const ad = await Ad.findById(req.params.id)

    return res.json(ad)
  }
  async store (req, res) {
    const ad = await Ad.create({ ...req.body, author: req.userId })
    return res.json(ad)
  }
  async update (req, res) {
    const ad = await Ad.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    return res.json(ad)
  }
  async destroy (req, res) {
    const ad = await Ad.findByIdAndDelete(req.params.id)

    return res.status(200).json({ mensagem: 'deleted sucess' })
  }
}
module.exports = new AdController()