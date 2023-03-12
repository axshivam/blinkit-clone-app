const AccountUtils = require('../utils');
const { AddressModel, AccountModel } = require('../database/models');

class SignupService {

    constructor() {
        require('../database/config').connet();
    }

    async Signup(userInputs) {
        const { name, email, username, password } = userInputs;

        const utilFunctions = new AccountUtils();

        const salt = await utilFunctions.createSalt();

        const generatedPassword = await utilFunctions.createPassword({password, salt});

        // check if account is already exist not not
        const existingAccount = await AccountModel.findOne({email: email});

        console.log('existing account -> ', existingAccount);

        if(existingAccount) {
            return "Account already exist, please login";
        }


        // create a new account
        const account = AccountModel({
            name,
            email,
            username,
            password: generatedPassword,
            salt
        });

        const accountResult = await account.save();

        console.log(accountResult);

        // generate token
        const token = await utilFunctions.generateToken({email: email, _id: accountResult._id});

        return {_id: accountResult._id, token};
    }
}

module.exports = SignupService;