const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

class AccountUtils {

    async createSalt() {
        return await bcrypt.genSalt();
    }

    async createPassword({password, salt}) {
        return await bcrypt.hash(password, salt);
    }

    async generateToken(payload) {
        try {
            console.log(process.env.SECRET_KEY);
            return await jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '30d' } )
        } catch (error) {
            console.log('Error: ', error);
            return error;
        }
    }
}

module.exports = AccountUtils;