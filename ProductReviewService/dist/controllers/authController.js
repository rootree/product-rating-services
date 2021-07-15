"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport_1 = __importDefault(require("passport"));
require("../auth/passportHandler");
class AuthController {
    authenticateJWT(req, res, next) {
        passport_1.default.authenticate("jwt", function (err, user, info) {
            if (err) {
                console.log(err);
                return res.status(401).json({ status: "error", code: "unauthorized #2" });
            }
            if (!user) {
                return res.status(401).json({ status: "error", code: "unauthorized #2" });
            }
            else {
                return next();
            }
        })(req, res, next);
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map