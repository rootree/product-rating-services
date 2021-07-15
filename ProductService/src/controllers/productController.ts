import { Request, Response } from "express";
import { IProduct, Product } from "../entities/product";
import { PRODUCT_REVIEW_SERVICE_URI } from "../util/secrets";
import axios from "axios";
import { ProductResponse } from "../models/product";
import { ProductRatingResponse } from "../models/productRatingResponse";

export class ProductController {

    public async getProduct(req: Request, res: Response): Promise<void> {
        const product = await Product.findOne({productId: req.params.id});
        if (product === null) {
            res.sendStatus(404);
        } else {
            const productDetails = <ProductResponse>{};
            productDetails.productId = product.productId;
            productDetails.name = product.name;
            try {
                const reviewUrl = `${PRODUCT_REVIEW_SERVICE_URI}/review/${req.params.id}`;
                const reviews = await axios.get(reviewUrl);
                if (reviews !== null) {
                    productDetails.rating = <ProductRatingResponse>{};
                    productDetails.rating.averageReviewScore = reviews.data.averageReviewScore;
                    productDetails.rating.numberOfReviews = reviews.data.numberOfReviews;
                }

            } catch (exception) {
                process.stderr.write(`ERROR received from ${PRODUCT_REVIEW_SERVICE_URI}: ${exception}\n`);
            }
            res.json(productDetails);
        }
    }
}
