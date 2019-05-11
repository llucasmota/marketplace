const Ad = require('../models/Ad')
const User = require('../models/User')
const Purchase = require('../models/Purchase')
const Mail = require('../services/Mail')
const PurchaseMail = require('../jobs/PurchaseMail')
const Queue = require('../services/Queue')

class PurchaseController {
  async store (req, res) {
    const { ad, content } = req.body // ad será o id do anúncio e contente será a mensagem que o comprador enviará

    const purchaseAd = await Ad.findById(ad).populate('author')
    const user = await User.findById(req.userId)

    const purchaseSave = await Purchase.create({
      content,
      ad,
      user: user._id
    })

    Queue.create(PurchaseMail.key, {
      ad: purchaseAd,
      user,
      content
    }).save()

    return res.json(purchaseSave)
  }

  async index (req, res) {
    const user = await User.findById(req.userId)
    const myPurchase = await Ad.findOne({
      author: user._id,
      purchasedBy: { $ne: null }
    })

    if (!myPurchase) {
      return res
        .status(400)
        .json({ erro: 'Você não possui nenhuma venda aprovada' })
    }
    return res.status(200).json(myPurchase)
  }
}
module.exports = new PurchaseController()
