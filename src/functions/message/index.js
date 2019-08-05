import express from 'express';
import line from './lineUtils';
import Config from '../config';

const router = express.Router();

router.post('/linewebhook', async(req, res) => {
    try {
        var event = req.body.events[0];
        switch (event.type){
            // text event
            case "text":
                line.replyMessage(event);
                return res.send('success');
                break;
            // postback event
            case "postback":
            var data = event.postback.data;
            switch (data){
                case "punch in":
                    line.switchMenuTo(event, Config.line.richMenuId_punchIn);
                    return res.send('success');
                    break;
                case "back":
                    line.switchMenuTo(event, Config.line.richMenuId_main);
                    return res.send('success');
                    break;
                }       
        }   
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
        return res.send('success');
    } catch (err) {
        return res.status(406).send({
            message: `${err.message}`
        });
    }
});

/*
router.post('/switchMenuTo', async(req, res) => {
    console.log("####");
    try {
        var event = req.body.events[0];
        line.switchMenuTo(event);
        return res.send('success');
    } catch (err) {
        return res.status(400).send({
            message: `${err.message}`
        });
    }
});
*/

/*
router.post('/linewebhook', async(req, res) => {
    try {
        var event = req.body;
        console.log(event);
        return res.send('success');
    } catch (err) {
        return res.status(400).send({
            message: `${err.message}`
        });
    }
});*/


export default router;