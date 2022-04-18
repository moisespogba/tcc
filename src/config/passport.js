var passport = require("passport");
var LocalStrategy = require("passport-local");
var Usuario = require("../model/Usuario");
var bcrypt = require("bcrypt");

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  Usuario.findByPk(id, function (err, usuario) {
    return done(null, usuario);
  });
});

passport.use(
  new LocalStrategy(async function (username, password, cb) {
    var usuario = await Usuario.findOne({ where: { email: username } });

    if (!usuario) {
      return cb(null, false, {
        msg: "Usuário inexistente",
      });
    }

    bcrypt.compare(password, usuario.senha, function (err, result) {
      if (!result) {
        return cb(null, false, {
          msg: "Senha incorreta",
        });
      } else {
        return cb(null, usuario);
      }
    });
  })
);

module.exports = passport;
