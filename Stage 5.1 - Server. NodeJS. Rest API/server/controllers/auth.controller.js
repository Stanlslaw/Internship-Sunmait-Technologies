class Auth {
  constructor() {}

  async login(req, res) {
    try {
      const { username, password } = req.body;
      if (username === "admin" || password === "1234") {
        console.log("dwdw");
        res.json({
          authenticated: true,
          message: "Success",
        });
        return;
      }
      res.json({
        authenticated: false,
        message: "Incorrect username or password",
      });
    } catch (err) {
      res.json({
        authenticated: false,
        message: err.message,
      });
    }
  }
}

export default new Auth();
