const { AddressModel } = require('../database/models');
const { AccountModel } = require('../database/models');


class AddressService {
    constructor() {
        require('../database/config').connet();
    }

    async AddAddress({ id, address_line_1, city, state, country, pinCode }) {
        const account = await AccountModel.findOne({ _id: id });

        if(account) {
            const address = AddressModel({
                address_line_1,
                city,
                state,
                country, 
                pinCode
            });

            await address.save();
            account.address.push(address);
        }

        return await account.save();
    }

}


module.exports = AddressService;