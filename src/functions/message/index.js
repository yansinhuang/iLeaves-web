import express from 'express';
import line from './lineUtils';

const router = express.Router();

router.post('/linewebhook', async(req, res) => {
    console.log(req.body.events[0])
    try {
        var event = req.body.events[0];
        line.replyMessage(event);
        return res.send('=====> success linewebhook');
    } catch (err) {
        return res.status(400).send({
            message: `${err.message}`
        });
    }
});

router.post('/sendMulticast', async(req, res) => {
    try {
        var event = req.body;
        line.sendMulticast(event);
        return res.send('=====> success sendMulticast');
    } catch (err) {
        return res.status(406).send({
            message: `${err.message}`
        });
    }
});


export default router;