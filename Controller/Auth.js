const User = require("../Models/User");
const bcrypt = require("bcrypt");
exports.signup = (req, res, next) => {
  let { sifre, user } = req.body.data;

  if (!sifre || !user) {
    return res
      .status(400)
      .json({ message: "kullanıcı adı ve sifreyi bos bırakmayınız" });
  }
  return User.find().then((r) => {
    const newPassword = r.find((i) => {
      return i.user == user;
    });
    if (newPassword) {
      return res.status(400).json({ message: "Kullancı bulunmaktadır." });
    }
    return bcrypt
      .hash(sifre, 10)
      .then((hash) =>
        User.Insert({ user, sifre: hash }).then((r) => res.json(r))
      );
  });
};
exports.signin = (req, res, next) => {
  const { sifre, user } = req.body.data;
  return User.find().then((r) => {
    const newDeger = r.find((i) => i.user == user);
    console.log(newDeger);
    if (!newDeger) {
      return res
        .status(400)
        .json({ message: "KULLANICI ADI VEYA SİFRE HATALI" });
    }
    bcrypt.compare(sifre, newDeger.sifre).then((r) => {
      if (r) {
        return res.status(200).json({ message: "SUCCESS" });
      }
      return res
        .status(400)
        .json({ message: "KULLANICI ADI YA DA PAROLA HATALI" });
    });
  });

  //   if (checkUser) {
  //   }
};
