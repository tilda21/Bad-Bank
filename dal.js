var mongoose = require('mongoose');
let db = null;

const userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
  });
const User = mongoose.model("User", userSchema);

// return all users by using the collection.find method
async function all(req, res) {
    try {
        const users = await User.find();

        res.status(201).json(users);
    } catch (error) {
        console.error(error.message);
        res.status(404).json({
            message: error.message,
          });
    }
}

// create user account using the collection.insertOne function
async function create(req, res){

    const newAccount = new User(req.params);
    try {
      await newAccount.save();
      res.status(201).json(newAccount);
    } catch (error) {
      res.status(409).json({
        message: error.message,
      });
    }
  }

// // find user account 
// async function find(email) {
//     if(db === null) {
//         await connect();
//     }
//     return new Promise((resolve, reject) => {
//         const customers = db
//             .collection('users')
//             .find({ email: email })
//             .toArray(function (err, docs) {
//                 err ? reject(err) : resolve(docs);
//             });
//     })
// }

// // find user account
// async function findOne(email) {
//     if(db === null) {
//         await connect();
//     }
//     return new Promise((resolve, reject) => {
//         const customers = db
//             .collection('users')
//             .findOne({ email: email })
//             .then((doc) => resolve(doc))
//             .catch((err) => reject(err));
//     })
// }

// // update - deposit/withdraw amount
// async function update(email, amount) {
//     if(db === null) {
//         await connect();
//     }
//     return new Promise((resolve, reject) => {
//         const customers = db
//             .collection('users')
//             .findOneAndUpdate(
//                 { email: email },
//                 { $inc: { balance: amount } },
//                 { returnOriginal: false },
//                 function (err, documents) {
//                     err ? reject(err) : resolve(documents);
//                 }
//             );


//     });
// }


module.exports = {create, findOne, find, update, all};