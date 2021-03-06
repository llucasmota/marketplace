const Purchase = require('../models/Purchase')
const Ad = require('../models/Ad')

class ApprovePurchaseController {
  async update (req, res) {
    const { id } = req.params

    const { ad } = await Purchase.findById(id).populate({
      path: 'ad',
      populate: {
        path: 'author'
      }
    })
    console.log(ad)

    if (!ad.author._id.equals(req.userId)) {
      return res.status(401).json({ error: 'Você não é o autor' })
    }
    if (ad.purchasedBy) {
      return res.status(400).json({
        error: 'Uma outra compra com as mesmas caracteristicas já foi realizada'
      })
    }
    ad.purchasedBy = id
    await ad.save()
    return res.status(200).json({ ad })
  }
}

module.exports = new ApprovePurchaseController()
