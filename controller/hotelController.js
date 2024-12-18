var express = require('express')
var router = express.Router()
const { list, create, updateHotel, deleteHotel, searchHotels} = require('../service/hotelService')


router.get('/list', list)
router.get('/searchHotels', searchHotels)
router.post('/create', create)
router.put('/update/:id', updateHotel)
router.delete('/delete/:id', deleteHotel)


module.exports = router