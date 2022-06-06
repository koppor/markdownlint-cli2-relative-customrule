"use strict";

module.exports = [{
    names: ["demo"],
    description: "demo",
    tags: ["headings", "headers", "changelog"],
    function: (params, onError) => {
        params.tokens.filter(function filterToken(token) {
            return token.type === "heading_open";
        }).forEach(function forToken(token) {
            if (token.tag === "h1") {
                if (/markdown/m.test(token.line)) {
                    return onError({
                        lineNumber: token.lineNumber,
                        detail: "Please uppercase \"Markdown\"",
                        context: token.line
                    });
                }
                return;
            }
        });
    }
}];
