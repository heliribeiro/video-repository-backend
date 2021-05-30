const { Router } = require('express')
const router = Router()
const Video = require('./../models/Video')
const Category = require('./../models/Category')

router.post('/', async (req, res) => {

  try {
    const { name, urlImage, urlVideo, description, categoryId } = req.body

    const category = await Category.findById({_id:categoryId});

   
      const video = new Video({ 
        name, 
        urlImage, 
        urlVideo, 
        description, 
        categoryId
      })
    
       await video.save()

       category.videos.push(video)
       await category.save()

      res.json({ video })

  } catch (error) {
    res.json({ error: true, message: error.message })
  }
})


router.get('/:videoId', async (req, res) => {
  try {

    const {videoId} = req.params

    const video = await Video.findById({_id:videoId});

    res.json({ video });

  } catch (error) {
    res.json({ error: true, message: error.message })
  }
})


module.exports = router;