const Cars = require('./cars-model');

const checkCarId = async (req, res, next) => {
  try{
    const possibleCar = await Cars.getById(req.params.id)
    if (!possibleCar){
      next({status: 404, message: `car with id ${req.params.id} is not found`})
    } else {
      req.car = possibleCar
      next()
    }
  } catch (err){
    next(err)
  }
}

const checkCarPayload = (req, res, next) => {
  const error = { status: 400 }
  if (req.body.vin === undefined || typeof req.body.vin !== 'string'){
    error.message = 'vin is missing'
    next(error)
  } else if (req.body.make === undefined || typeof req.body.make !== 'string'){
    error.message = 'make is missing'
    next(error)
  } else if (req.body.model === undefined || typeof req.body.model !== 'string'){
    error.message = 'model is missing'
    next(error)
  } else if (req.body.mileage === undefined || typeof req.body.mileage !== 'number'){
    error.message = 'mileage is missing'
    next(error)
  } else {
    next()
  }
}

const checkVinNumberValid = (req, res, next) => {
  
}

const checkVinNumberUnique = async (req, res, next) => {
  try{
    const possibleCar = await Cars.getByVin(req.body.vin)
    if (possibleCar) {
      next({status:400, message: `vin ${req.body.vin} already exists`})
    } else {
      next()
    }
  } catch (err) {
    next(err)
  }
}

module.exports = 
{
  checkCarId, 
  checkCarPayload, 
  checkVinNumberUnique, 
  checkVinNumberValid 
};