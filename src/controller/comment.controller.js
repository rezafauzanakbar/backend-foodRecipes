const commentModel = require('../model/comment.model')
const commentController = {
  // method
  list: async (req, res) => {
    // method untuk input data
    const limit = parseInt(req.query.limit) || 4
    const page = parseInt(req.query.page) || 1
    const offset = (page - 1) * limit
    const getUser = await commentModel.selectAll(limit, offset)
    try {
      res.json(getUser)
    } catch (err) {
      res.json(err)
    }
  }
}

module.exports = commentController
