import { Router } from "express";
import { ProductReviewController } from "../controllers/productReviewController";
import { AuthController } from "../controllers/authController";

export class ProductReviewRoutes {

    public router: Router;
    public productController: ProductReviewController = new ProductReviewController();
    public authController: AuthController = new AuthController();

    constructor() {
        this.router = Router();
        this.routes();
    }

    routes() {
        this.router.get("/:id", this.productController.getProductReview);
        this.router.post("/", this.authController.authenticateJWT, this.productController.createProductReview);
        this.router.put(
            "/:id",
            this.authController.authenticateJWT,
            this.productController.updateProductReview
        );
        this.router.delete(
            "/:id",
            this.authController.authenticateJWT,
            this.productController.deleteProductReview
        );
    }
}
