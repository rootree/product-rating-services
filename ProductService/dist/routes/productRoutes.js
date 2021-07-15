"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productController_1 = require("../controllers/productController");
class ProductRoutes {
    constructor() {
        this.productController = new productController_1.ProductController();
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/:id", this.productController.getProduct);
    }
}
exports.ProductRoutes = ProductRoutes;
//# sourceMappingURL=productRoutes.js.map