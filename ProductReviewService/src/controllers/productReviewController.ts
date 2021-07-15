import { Request, Response } from "express";
import { IProductReview, ProductReview } from "../entities/productReview";

export class ProductReviewController {

    public async getProductReview(req: Request, res: Response): Promise<void> {
        const product = await ProductReview.findOne({productId: req.params.id});
        if (product === null) {
            res.sendStatus(404);
        } else {
            res.json(product);
        }
    }

    public async createProductReview(req: Request, res: Response): Promise<void> {
        const newProductReview: IProductReview = new ProductReview(req.body);
        const product = await ProductReview.findOne({productId: req.body.productId});
        if (product === null) {
            const result = await newProductReview.save();
            if (result === null) {
                res.sendStatus(500);
            } else {
                res.status(201).json({status: 201, data: result});
            }
        } else {
            res.sendStatus(422);
        }
    }

    public async updateProductReview(req: Request, res: Response): Promise<void> {
        const product = await ProductReview.findOneAndUpdate({productId: req.params.id}, req.body);
        if (product === null) {
            res.sendStatus(404);
        } else {
            const updatedProduct = {productId: req.params.id, ...req.body};
            res.json({status: res.status, data: updatedProduct});
        }
    }

    public async deleteProductReview(req: Request, res: Response): Promise<void> {
        const product = await ProductReview.findOneAndDelete({productId: req.params.id});
        if (product === null) {
            res.sendStatus(404);
        } else {
            res.json({response: "Product Review deleted Successfully"});
        }
    }
}
