import fetch from 'node-fetch';
import {
    URL, URLSearchParams
} from 'url';

const post = async (url, postData, encoder, headers) => {
    try {
        var url = new URL(url);
        var params;
        if (encoder === 'json') {
            params = JSON.stringify(postData);
        } else {
            const urlParams = new URLSearchParams();
            Object.getOwnPropertyNames(postData).filter((prop) => {
                urlParams.append(prop, postData[prop]);
            });
            params = urlParams;
        }
        var response = await fetch(url.toString(), {
            method: 'POST',
            body: params,
            headers
        });

        if (response.status == 200) {
            const result = await response.json();
            return result;
        }
        var err = await response.json();
        throw err;
    } catch (err) {
        console.log('[ERROR] ', err);
        return err;
    }
};

const get = async (url, params, encoder, headers) => {
    try {
        var url = new URL(url);
        const urlParams = new URLSearchParams();
        Object.getOwnPropertyNames(params).filter((prop) => {
            url.searchParams.append(prop, params[prop]);
        });

        var response = await fetch(url, {
            method: 'GET',
            headers
        });

        if (response.status == 200) {

            if (encoder === 'json') {
                return await response.json();
            }
            return await response.text();
        }

        var err = await response.json();
        throw err;
    } catch (err) {
        console.log('[ERROR] ', err);
        return err;
    }
};

module.exports = {
    post,
    get
};