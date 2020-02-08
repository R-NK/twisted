"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const request_promise_1 = __importDefault(require("request-promise"));
const promise_queue_1 = __importDefault(require("promise-queue"));
class RequestBase {
    static sendRequest(options) {
        return new Promise((resolve, reject) => {
            request_promise_1.default(options)
                .then(resolve)
                .catch(reject);
        });
    }
    static setConcurrency(concurrency) {
        RequestBase.queue = new promise_queue_1.default(concurrency, Infinity);
    }
    static request(options) {
        return RequestBase.queue.add(() => RequestBase.sendRequest(options));
    }
}
exports.RequestBase = RequestBase;
//# sourceMappingURL=request.base.js.map