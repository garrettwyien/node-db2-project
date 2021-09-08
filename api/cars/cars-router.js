// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model');
const middleWare = require('./cars-middleware');

router.get('/', async (req,res,next)=>{});

router.get('/:id', async (req,res,next)=>{});

router.post('/', async (req,res,next)=>{});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports=router;