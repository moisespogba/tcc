exports.autenticacao = function autenticacao() {
  return function (req, res, next) {
    console.log(req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    }
    res.redirect("/admin");
  };
};
