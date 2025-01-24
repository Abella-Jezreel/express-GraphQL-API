const User = require("../models/user");
const bcrypt = require("bcryptjs");
const validator = require("validator");

module.exports = {
    createUser: async function ({ userInput }, req) {
        // const email = args.userInput.email;
        if (!validator.isEmail(userInput.email)) {
            const error = new Error("E-Mail is invalid.");
            throw error;
        }
        if (validator.isEmpty(userInput.password) || !validator.isLength(userInput.password, { min: 5 })) {
            const error = new Error("Password too short!");
            throw error;
        }
        if (validator.isEmpty(userInput.name)) {
            const error = new Error("Name is invalid.");
            throw error;
        }
        const existingUser = await User.findOne({ email: userInput.email });
        if (existingUser) {
            const error = new Error("User exists already!");
            throw error;
        }
        const hashedPw = await bcrypt.hash(userInput.password, 12);
        const user = new User({
            email: userInput.email,
            name: userInput.name,
            password: hashedPw,
        });
        const createdUser = await user.save();
        return { ...createdUser._doc, _id: createdUser._id.toString() };
    }
};