"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_status_codes_1 = require("http-status-codes");
const message = 'Rate limit error';
/**
 * Rate limit error
 */
class RateLimitError extends Error {
    constructor(rateLimits) {
        super(message);
        this.status = http_status_codes_1.TOO_MANY_REQUESTS;
        this.rateLimits = rateLimits;
        Object.setPrototypeOf(this, RateLimitError.prototype);
    }
}
exports.RateLimitError = RateLimitError;
//# sourceMappingURL=rate-limit.error.js.map