import express from 'express';
import line from './lineUtils';

const router = express.Router();

router.post('/linewebhook', async(req, res) => {
    try {
        var event = req.body.events[0];
        line.replyMessage(event);
        return res.send('success');
    } catch (err) {
        return res.status(400).send({
            message: `${err.message}`
        });
    }
});

export default router;