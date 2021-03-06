import express from "express";
import morgan from "morgan";

class App {
  constructor() {
    this.app = express();
  }

  config() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("tiny"));
  }
}

export default new App().app;
