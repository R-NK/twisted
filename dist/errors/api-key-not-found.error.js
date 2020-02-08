"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const HttpCodes = __importStar(require("http-status-codes"));
const message = 'Api key not found';
/**
 * Not api key found
 */
class ApiKeyNotFound extends Error {
    // This isn't a useless constructor because this error doesn't need a message parameter
    constructor() {
        super(message);
        this.status = HttpCodes.NOT_IMPLEMENTED;
        this.name = 'ApiKeyNotFound';
        Object.setPrototypeOf(this, ApiKeyNotFound.prototype);
    }
}
exports.ApiKeyNotFound = ApiKeyNotFound;
//# sourceMappingURL=api-key-not-found.error.js.map