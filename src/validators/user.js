const { check } = require ('express-validator')
const { validateResult } = require ('../helpers/validateHelper')

const validateCreate = [
    check('rut')
        .exists()
            .not()
        .isEmpty(),
    check('pass')
    .isLength({min: 8})
    .exists(),
    (req,res,next) => {
        validateResult(req,res,next)

    }

]

module.exports = { validateCreate }