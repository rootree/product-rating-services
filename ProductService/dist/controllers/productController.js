"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_1 = require("../entities/product");
const secrets_1 = require("../util/secrets");
const axios_1 = __importDefault(require("axios"));
class ProductController {
    getProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield product_1.Product.findOne({ productId: req.params.id });
            if (product === null) {
                res.sendStatus(404);
            }
            else {
                const productDetails = {};
                productDetails.productId = product.productId;
                productDetails.name = product.name;
                try {
                    const reviewUrl = `${secrets_1.PRODUCT_REVIEW_SERVICE_URI}/review/${req.params.id}`;
                    const reviews = yield axios_1.default.get(reviewUrl);
                    if (reviews !== null) {
                        productDetails.rating = {};
                        productDetails.rating.averageReviewScore = reviews.data.averageReviewScore;
                        productDetails.rating.numberOfReviews = reviews.data.numberOfReviews;
                    }
                }
                catch (exception) {
                    process.stderr.write(`ERROR received from ${secrets_1.PRODUCT_REVIEW_SERVICE_URI}: ${exception}\n`);
                }
                res.json(productDetails);
            }
        });
    }
}
exports.ProductController = ProductController;
//# sourceMappingURL=productController.js.map