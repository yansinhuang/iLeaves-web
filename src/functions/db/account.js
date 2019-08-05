import * as admin from 'firebase-admin';
import {
    getNowInSec
} from '../utils/dateTime';

const KEY_ACCOUNT = 'Account';

export const checkExist = async (ubn) => {
    const docRef = admin.firestore().collection(KEY_ACCOUNT).doc(ubn);
    return new Promise((resolve, reject) => {
        docRef.get().then(doc => {
            resolve(doc.exists);
        }).catch(err => {
            reject(err);
        });
    });
}

export const fetch = async (ubn) => {
    const docRef = admin.firestore().collection(KEY_ACCOUNT).doc(ubn);
    return new Promise((resolve, reject) => {
        docRef.get().then(doc => {
            resolve(doc.data());
        }).catch(err => {
            reject(err);
        });
    });
}

export const update = async (data) => {
    const docRef = admin.firestore().collection(KEY_ACCOUNT).doc(data.ubn);
    data.lastUpdated = getNowInSec();
    return new Promise((resolve, reject) => {
        docRef.set(data).then(ref => {
            resolve(data);
        }).catch(err => {
            reject(err);
        });
    });
}