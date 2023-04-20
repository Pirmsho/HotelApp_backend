exports.getAllHotels = (req, res) => {
    res.status(200).json({
        message: 'success',
        requestedAt: req.requestTime,
        results: 0,
        data: {
            data: 'all hotels route',
        },
    });
};

exports.getHotel = (req, res) => {
    const id = req.params.id * 1;
    res.status(200).json({
        status: 'success',
        data: {
            data: `hotel number ${id}`,
        },
    });
};

exports.createHotel = (req, res) => {
    // new hotel code
    res.status(201).json({
        status: 'success',
        data: {
            message: 'created hotel',
        },
    });
};

exports.updateHotel = (req, res) => {
    // check if hotel in db
    res.status(200).json({
        status: 'success',
        data: {
            message: '<Updated Hotel>',
        },
    });
};

exports.deleteHotel = (req, res) => {
    // check hotel in db
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
