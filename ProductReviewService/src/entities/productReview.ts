import { Document, Schema, Model, model, Error } from "mongoose";

export interface IProductReview extends Document {
  productId: String;
  averageReviewScore: Number;
  numberOfReviews: Number;
}

export const productReviewSchema = new Schema({
  productId: {
    type: String,
    required: true,
    unique: true,
  },
  averageReviewScore: Number,
  numberOfReviews: Number,
});

export const ProductReview: Model<IProductReview> = model<IProductReview>("ProductReview", productReviewSchema);
