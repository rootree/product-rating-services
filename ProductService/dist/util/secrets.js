"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MONGODB_URI = process.env["MONGODB_URI"];
if (!exports.MONGODB_URI) {
    console.log("No mongo connection string. Set MONGODB_URI environment variable.");
    process.exit(1);
}
exports.PRODUCT_REVIEW_SERVICE_URI = process.env["PRODUCT_REVIEW_SERVICE_URI"];
if (!exports.PRODUCT_REVIEW_SERVICE_URI) {
    console.log("No ProductReviewService connection string. Set PRODUCT_REVIEW_SERVICE_URI environment variable.");
    process.exit(1);
}
//# sourceMappingURL=secrets.js.map