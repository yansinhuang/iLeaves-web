import httpClient from '../utils/httpClient';
import Config from '../config';

const LINE_HEADER = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${Config.line.accessToken}`
};

// message handler
const replyMessage = async (event) => {
    var body = {
        replyToken: event.replyToken,
        messages: [
            {
                type: 'text',
                text: event.message.text
            }
        ]
    };
    var uri = Config.line.url + '/reply';
    httpClient.post(uri, body, 'json', LINE_HEADER);
};

module.exports = {
    replyMessage
};