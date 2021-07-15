"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.productReviewSchema = new mongoose_1.Schema({
    productId: {
        type: String,
        required: true,
        unique: true,
    },
    averageReviewScore: Number,
    numberOfReviews: Number,
});
exports.ProductReview = mongoose_1.model("ProductReview", exports.productReviewSchema);
//# sourceMappingURL=productReview.js.map