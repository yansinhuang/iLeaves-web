import {
    checkExist,
    fetch,
    update
} from '../db/account';
import {
    ErrorWithCode
} from '../utils/error';
import {
    partialUpdateObject
} from '../utils/partialUpdate';

export const createAccount = async (account) => {
    try {
        const { ubn } = account;
        let isExist = await checkExist(ubn);
        if (isExist) throw(ErrorWithCode('Account is already create:' + ubn));
        
        const result = await update(account);
        return result;
    } catch(err) {
        throw(err)
    }
}

export const updateAccount = async (ubn, updateData) => {
    try {
        let data = await fetch(ubn);
        if (!data) throw(ErrorWithCode('Account is not create:' + ubn));

        const supportFields = [
            'name',
            'address',
            'phone',
            'status'
        ];
        data = partialUpdateObject(data, updateData, supportFields);
        var AccountResponse = {
            'name': data['name'],
            'address': data['address'],
            'phone': data['phone'],
            'status': data['status']
        }
        //console.log(AccountResponse);
        //return await update(data);
        return AccountResponse;
    } catch(err) {
        throw(err)
    }
}

export const getAccount = async (ubn) => {
    try {
        let data = await fetch(ubn);
        if (!data) throw(ErrorWithCode('Account is not create:' + ubn));
        var AccountResponse = {
            'name': data['name'],
            'address': data['address'],
            'phone': data['phone'],
            'status': data['status']
        }
        //console.log(data);
        return AccountResponse;
    } catch(err) {
        throw(err)
    }
}