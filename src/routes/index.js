import express from "express";

class Routes {
  constructor() {
    this.router = express.Router();

    this.setRoutes();
  }

  setRoutes() {
    this.router.get("/version", (req, res) => {
      res.status(200).json({
        author: process.env.npm_package_author_name,
        version: process.env.npm_package_version,
      });
    });
  }
}

export default new Routes().router;
