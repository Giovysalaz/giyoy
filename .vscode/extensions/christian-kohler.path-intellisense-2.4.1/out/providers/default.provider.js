"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultProvider = void 0;
const javascript_provider_1 = require("./javascript/javascript.provider");
exports.DefaultProvider = {
    selector: "*",
    provider: javascript_provider_1.JavaScriptProvider.provider,
    triggerCharacters: ["/", '"', "'"]
};
//# sourceMappingURL=default.provider.js.map