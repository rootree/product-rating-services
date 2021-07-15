export const MONGODB_URI = process.env["MONGODB_URI"];

if (!MONGODB_URI) {
  console.log("No mongo connection string. Set MONGODB_URI environment variable.");
  process.exit(1);
}

export const PRODUCT_REVIEW_SERVICE_URI = process.env["PRODUCT_REVIEW_SERVICE_URI"];

if (!PRODUCT_REVIEW_SERVICE_URI) {
  console.log("No ProductReviewService connection string. Set PRODUCT_REVIEW_SERVICE_URI environment variable.");
  process.exit(1);
}