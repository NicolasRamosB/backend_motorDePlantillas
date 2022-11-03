const express = require("express");
const router = express.Router();
const productosRouter = require("./productos/productos.router");

router.get("/health", (_req, res) => {
    res.status(200).json({
      success: true,
      health: "Up",
      enviroment: process.env.ENVIRONMENT || "not found",
    });
  })
router.use("/products", productosRouter);

module.exports = router;
