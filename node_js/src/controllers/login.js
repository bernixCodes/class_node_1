const loginUser = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const password = req.body.password;

  //simulate database
  if (email != "ben@gmail.com") {
    res.status(303).json({ message: "user not found" });
  } else {
    res.status(200).json({
      name: "Bernice",
      password: "admin1234",
      email: req.body.email,
    });
  }
};

module.exports.loginUser = loginUser;
