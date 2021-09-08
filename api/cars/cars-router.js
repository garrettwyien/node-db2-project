// DO YOUR MAGIC
const router = require('express').Router();
const Cars = require('./cars-model');
const { checkCarId, checkCarPayload, checkVinNumberUnique, checkVinNumberValid } = require('./cars-middleware');

router.get('/', async (req,res,next)=>{
    Cars.getAll()
    .then(cars=>{
        res.status(200).json(cars);
    })
    .catch(next)
});

router.get('/:id', async (req,res,next)=>{
});

router.post('/', checkCarPayload, checkVinNumberUnique,  async (req,res,next)=>{
    const newCar = {
        vin: req.body.vin,
        make: req.body.make,
        model: req.body.model,
        mileage: req.body.mileage,
        title: req.body.title,
        transmission: req.body.transmission
    }
    Cars.create(newCar)
    .then(obj=>{
        res.status(201).json(obj)
    })
    .catch(err=>{
        next(err)
    })
});

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      message: err.message,
      stack: err.stack,
    })
  })

module.exports=router;