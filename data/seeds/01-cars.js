// STRETCH
const cars = [
    {
        vin: '12345678901',
        make: 'ford',
        model: 'explorer',
        mileage: 20000,
        title: 'clean',
        transmission: 'automatic'
    },
    {
        vin: '12345678902',
        make: 'honda',
        model: 'civic',
        mileage: 20000,
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '12345678903',
        make: 'toyota',
        model: 'prius',
        mileage: 20000,
        title: 'clean',
        transmission: 'CVT'
    }
]

exports.seed = function(knex) {
    return knex('cars')
    .truncate().then(()=>{
     return knex('cars').insert(cars)
    })
}