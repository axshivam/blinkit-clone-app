const { AccountModel } = require("../database/models");

const AccountUtils = require("../utils");

class LoginService {
  constructor() {
    require("../database/config").connet();
  }

  async Login({ email, password }) {
    const account = await AccountModel.findOne({ email: email });

    console.log(account);

    if (!account) {
      return "Account is not exist, please sign up";
    }

    const utilFunctions = new AccountUtils();

    const generatedPassword = await utilFunctions.createPassword({
      password,
      salt: account.salt,
    });

    if(generatedPassword == account.password) {
        // generate token
        const token = await utilFunctions.generateToken({email: email, _id: account._id});

        return {_id: account._id, token, message: 'Login successful'};
    } else {
        return "wrong password";
    }

    console.log(generatedPassword);
  }
}

module.exports = LoginService;
