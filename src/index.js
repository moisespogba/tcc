const express = require("express");
const app = express();
var porta = process.env.PORT || 3000;
var produtoRoute = require("./routes/produtoRoute");
var usuarioRoute = require("./routes/usuarioRoute");
const passport = require("./config/passport");
var aut = require("./config/autenticacao");

const path = require("path");
const flash = require("req-flash");
var session = require("express-session");

require("./database/index");

app.use(session({ secret: "123", resave: true, saveUninitialized: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(flash());

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(path.join("src", "public")));

app.use("/admin/produto", produtoRoute);
app.use("/admin/usuario", usuarioRoute);
app.get("/admin", function (req, res) {
  res.render("login");
});
app.post(
  "/admin",
  passport.authenticate("local", {
    successRedirect: "/admin/produto",
    failureRedirect: "/admin",
  })
);
//app.use('/admin/quadra',quadraRoute)
//app.use('/caixa',caixaRoute)

app.listen(porta);
