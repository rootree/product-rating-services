import { ProductRatingResponse } from "./productRatingResponse";

export interface ProductResponse {
  productId: String;
  name: String;
  rating: ProductRatingResponse;
}
