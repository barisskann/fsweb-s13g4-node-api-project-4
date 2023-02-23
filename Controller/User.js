const User = require("../Models/User");

exports.getUser = (req, res, next) => {
  User.find().then((r) => res.json(r));
};
exports.addUser = (req, res, next) => {
  const { data } = req.body;
  User.Insert(data).then((r) => console.log(r));
};
