var Hotel = require('../model/hotelModel')

async function list(req, res, next) {
    await Hotel.find().then((data, err) => {
        if (err) {
            res.status(503).json(err)
        } else {
            res.status(200).json(data)
        }
    })
}

const create = async (req, res, next) => {
    const { name, fabricationDate } = req.body;
    try {
        const hotel = new Hotel({
            name: name,
            fabricationDate: fabricationDate,
            nbrRooms: 10
        });

        await hotel.save();
        res.status(201).json({ message: 'Hotel created successfully', hotel });
    } catch (err) {
        console.log('Error creating Hotel: ' + err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

async function updateHotel(req, res, next) {
    Hotel.findByIdAndUpdate(req.params.id, req.body)
        .then((data, err) => {
            if (err) {
                res.status(500).json(err)
            }
            res.status(200).json(data)
        })
}


async function deleteHotel(req, res, next) {
    await Hotel.findByIdAndDelete(req.params.id).then((data, err) => {
        if (err) {
            res.status(500).json(err)
        }
        res.status(200).json("Hotel deleted successfully! ")

    })
}

const searchHotels = async (req, res, next) => {
    try {
        const hotels = await Hotel.find({ nbrRooms: { $gte: 10, $lte: 100 } });
        res.status(200).json(hotels);
    } catch (err) {
        console.log('Error searching Hotels: ' + err);
        res.status(500).json({ message: 'Internal server error', error: err.message });
    }
};

module.exports = { create, list, updateHotel, deleteHotel, searchHotels }