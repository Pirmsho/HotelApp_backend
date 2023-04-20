exports.getAllUsers = (req, res) => {
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestedAt,
        results: 0,
        data: {
            data: 'all users path',
        },
    });
};

exports.getUser = (req, res) => {
    const id = req.params.id * 1;
    res.status(200).json({
        status: 'success',
        requestedAt: req.requestedAt,
        data: {
            message: `user ${id} requested`,
        },
    });
};

exports.createUser = (req, res) => {
    // new user code
    res.status(201).json({
        status: 'success',
        data: {
            message: 'create user success',
        },
    });
};

exports.updateUser = (req, res) => {
    // check user id
    const id = req.params.id * 1;
    res.status(200).json({
        status: 'success',
        data: {
            message: `user ${id} updated`,
        },
    });
};

exports.deleteUser = (req, res) => {
    res.status(204).json({
        status: 'success',
        data: null,
    });
};
