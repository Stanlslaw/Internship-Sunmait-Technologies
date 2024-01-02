class Auth {
  constructor() {}

  async login(req, res) {
    try {
      const { username, password } = req.body;
      if (username === "admin" || password === "1234") {
        res.json({
          authenticated: true,
          message: "Success",
        });
        return;
      }
      res.json({
        message: "Incorrect username or password",
      });
    } catch (err) {
      res.json({
        message: err.message,
      });
    }
  }
}

export default new Auth();
