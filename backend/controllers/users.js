const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const bodyParser = require("body-parser");

// get users
// GET /users
exports.getUsers = async (req, res, next) => {
    try {
        const users = await User.find();

        return res.status(200).json({
            success: true,
            count: users.length,
            data: users,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server error",
        });
    }
};

// get users/register
// GET /users/:id
// exports.getUser = async (req, res, next) => {
// try {

// } catch (error) {

// }

//     User.findOne({ _id: req.params.id }, (err, result) => {
//         if (result) {
//             res.send(result);
//         } else {
//             res.send("Can't find user with this ID");
//         }
//     }).catch((err) => res.send(err));
// });
// };

// add users/register
// POST /users
exports.addUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const user = await User.findOne({ username: req.body.username });
        if (!user) {
            const hash = bcryptjs.hashSync(req.body.password);
            const newUser = new User({
                _id: new mongoose.Types.ObjectId(),
                username: req.body.username,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
                watchlist: req.body.watchlist,
                balance: req.body.balance,
                location: req.body.location,
            });
            newUser.save();

            return res.status(201).json({
                success: true,
                data: newUser,
            });
        } else {
            return res.status(404).json({
                success: false,
                error: "User already exists",
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: `Server error: ${err}`,
        });
    }
};
// User.findOne({ username: req.body.username }, (err, result) => {
//     if (result) {
//         res.send("This username is already taken. Please try another one");
//     } else {
//         const hash = bcryptjs.hashSync(req.body.password);
//         const user = new User({
//             _id: new mongoose.Types.ObjectId(),
//             username: req.body.username,
//             firstName: req.body.firstName,
//             lastName: req.body.lastName,
//             email: req.body.email,
//             password: hash,
//             watchlist: req.body.watchlist,
//             balance: req.body.balance,
//             location: req.body.location,
//         });
//         user.save()
//             .then((result) => {
//                 res.send(result);
//             })
//             .catch((err) => res.send(err));
//     }
// });

// delete users
// DELETE /users/:id
exports.deleteUser = async (req, res, next) => {
    res.send("DELETE user");
};
