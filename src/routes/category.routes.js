const { Router } = require('express')
const router = Router()
const Category = require('./../models/Category')
const Video = require('./../models/Video');

router.post('/', async (req, res) => {

  try {
    const { name, description, color } = req.body
    const category = await new Category({
       name, 
       description, 
       color
      }).save();

    res.json({ category })

  } catch (error) {
    res.json({ error: true, message: error.message })
  }
})

router.get('/', async (req, res) => {
  try {

    const categories = await Category.find().populate('videos');

    res.json({ categories })

  } catch (error) {
    res.json({ error: true, message: error.message })
  }
})


module.exports = router;