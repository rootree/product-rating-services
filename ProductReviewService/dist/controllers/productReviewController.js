"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const productReview_1 = require("../entities/productReview");
class ProductReviewController {
    getProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield productReview_1.ProductReview.findOne({ productId: req.params.id });
            if (product === null) {
                res.sendStatus(404);
            }
            else {
                res.json(product);
            }
        });
    }
    createProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const newProductReview = new productReview_1.ProductReview(req.body);
            const product = yield productReview_1.ProductReview.findOne({ productId: req.body.productId });
            if (product === null) {
                const result = yield newProductReview.save();
                if (result === null) {
                    res.sendStatus(500);
                }
                else {
                    res.status(201).json({ status: 201, data: result });
                }
            }
            else {
                res.sendStatus(422);
            }
        });
    }
    updateProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield productReview_1.ProductReview.findOneAndUpdate({ productId: req.params.id }, req.body);
            if (product === null) {
                res.sendStatus(404);
            }
            else {
                const updatedProduct = Object.assign({ productId: req.params.id }, req.body);
                res.json({ status: res.status, data: updatedProduct });
            }
        });
    }
    deleteProductReview(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const product = yield productReview_1.ProductReview.findOneAndDelete({ productId: req.params.id });
            if (product === null) {
                res.sendStatus(404);
            }
            else {
                res.json({ response: "Product Review deleted Successfully" });
            }
        });
    }
}
exports.ProductReviewController = ProductReviewController;
//# sourceMappingURL=productReviewController.js.map