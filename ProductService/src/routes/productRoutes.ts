import { Router } from "express";
import { ProductController } from "../controllers/productController";

export class ProductRoutes {
  public router: Router;
  public productController: ProductController = new ProductController();

  constructor() {
    this.router = Router();
    this.routes();
  }

  routes() {
    this.router.get("/:id", this.productController.getProduct);
  }
}
