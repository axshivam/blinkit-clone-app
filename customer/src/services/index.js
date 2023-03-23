const AccountUtils = require("../utils");

const { AccountModel } = require("../database/models");
const { AddressModel } = require("../database/models");

class CustomerService {
  constructor() {
    require("../database/config").connet();
  }

  async Signup(userInputs) {
    const { name, email, username, password } = userInputs;

    const utilFunctions = new AccountUtils();

    const salt = await utilFunctions.createSalt();

    const generatedPassword = await utilFunctions.createPassword({
      password,
      salt,
    });

    // check if account is already exist not not
    const existingAccount = await AccountModel.findOne({ email: email });

    console.log("existing account -> ", existingAccount);

    if (existingAccount) {
      return "Account already exist, please login";
    }

    // create a new account
    const account = AccountModel({
      name,
      email,
      username,
      password: generatedPassword,
      salt,
    });

    const accountResult = await account.save();

    console.log(accountResult);

    // generate token
    const token = await utilFunctions.generateToken({
      email: email,
      _id: accountResult._id,
    });

    return { _id: accountResult._id, token };
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

    if (generatedPassword == account.password) {
      // generate token
      const token = await utilFunctions.generateToken({
        email: email,
        _id: account._id,
      });

      return { _id: account._id, token, message: "Login successful" };
    } else {
      return "wrong password";
    }
  }

  async Profile({ email }) {
    const account = await AccountModel.findOne({ email: email });

    // populate

    console.log("Account -> ", account);

    if (account) {
      return {
        name: account.name,
        email: account.email,
        username: account.username,
      };
    } else {
      return "Account not found";
    }
  }

  async AddAddress({ email, address_line_1, city, state, country, pinCode }) {
    const account = await AccountModel.findOne({ email: email });

    if (account) {
      const address = AddressModel({
        address_line_1,
        city,
        state,
        country,
        pinCode,
      });

      await address.save();
      account.address.push(address);
    }

    return await account.save();
  }
}

module.exports = CustomerService;
