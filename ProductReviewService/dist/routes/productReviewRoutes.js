"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const productReviewController_1 = require("../controllers/productReviewController");
const authController_1 = require("../controllers/authController");
class ProductReviewRoutes {
    constructor() {
        this.productController = new productReviewController_1.ProductReviewController();
        this.authController = new authController_1.AuthController();
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get("/:id", this.productController.getProductReview);
        this.router.post("/", this.authController.authenticateJWT, this.productController.createProductReview);
        this.router.put("/:id", this.authController.authenticateJWT, this.productController.updateProductReview);
        this.router.delete("/:id", this.authController.authenticateJWT, this.productController.deleteProductReview);
    }
}
exports.ProductReviewRoutes = ProductReviewRoutes;
//# sourceMappingURL=productReviewRoutes.js.map