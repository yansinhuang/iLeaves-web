import express from 'express';

const router = express.Router();

router.post('/linewebhook', async(req, res) => {
    try {
        console.log('=====> source:', req.body.events[0].source);
        console.log('=====> message:', req.body.events[0].message);
        return res.send('success');
    } catch (err) {
        return res.status(400).send({
            message: `${err.message}`
        });
    }
});

export default router;