const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({
        message: 'GET_SUCCESS',
    });
});

router.get('/:id', (req, res) => {
    res.status(200).json({
        message: 'GET by ID - Success',
        id: req.params.id,
    });
});

module.exports = router;

// tip of the day
// findUser(something)

// const findUser = (something)

// const findUser = async (something) => {
    // return await User.findOne() ....or User.find() ...[]
// }