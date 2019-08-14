import express from 'express';
import {
    check,
    validationResult,
    body,
    param,
    query
} from 'express-validator';
import {
    createAccount,
    updateAccount,
    getAccount
} from './account';

const router = express.Router();

router.post('/create', [
    body('name', 'name is required').exists(),
    body('ubn', 'ubn is required').exists(),
    body('address', 'address is required').exists(),
    body('phone', 'phone is required').exists(),
], async(req, res, next) => {

    try {
        validationResult(req).throw();

        const response = await createAccount(req.body);
        return res.send(response);
    } catch (err) {
        next(err);
    }
});

router.post('/update/:ubn', [
    body('ubn', 'ubn cannot change').isEmpty(),
], async(req, res, next) => {

    try {
        validationResult(req).throw();

        const ubn = req.path.split('/').pop();
        const response = await updateAccount(ubn, req.body);
        return res.send(response);
    } catch (err) {
        next(err);
    }
});

export default router;

router.get('/:ubn'
, async(req, res, next) => {
    
    try {
        validationResult(req).throw();
        const ubn = req.path.split('/').pop();
        
        let data = await getAccount(ubn);
        //console.log(data);
        return res.send(data);
    } catch (err) {
        return res.status(403).send({
            message: `${err.message}`
        })
    }
});