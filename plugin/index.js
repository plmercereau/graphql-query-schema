"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.plugin = void 0;
var introspection_1 = require("@urql/introspection");
var typescript_1 = require("@graphql-codegen/typescript");
var plugin = function (schema, documents, config) {
    var conf = __assign(__assign({}, config), { declarationKind: 'type' });
    var minifiedData = (0, introspection_1.minifyIntrospectionQuery)((0, introspection_1.minifyIntrospectionQuery)((0, introspection_1.getIntrospectedSchema)(schema), {
        includeDirectives: false,
        includeEnums: true,
        includeInputs: true,
        includeScalars: true
    }));
    var _a = (0, typescript_1.plugin)(schema, documents, conf), prepend = _a.prepend, content = _a.content;
    // * https://stackoverflow.com/questions/2008279/validate-a-javascript-function-name
    var types = __spreadArray(__spreadArray([], Array.from(content.matchAll(/^export type ([$A-Z_][0-9A-Z_$]*) = {/gim)), true), Array.from(content.matchAll(/^export enum ([$A-Z_][0-9A-Z_$]*) {/gim)), true).map(function (_a) {
        var name = _a[1];
        return "\n".concat(name, ": ").concat(name);
    })
        .join(',');
    var result = "\nexport default {\n  introspection: ".concat(JSON.stringify(minifiedData, null, 2).replace(/^/gm, '  ').slice(2), " as const,\n  types: {} as {").concat(types.replace(/^/gm, '    ').slice(4), "\n  }\n}");
    return {
        prepend: prepend,
        content: [content, result].join('\n')
    };
};
exports.plugin = plugin;
exports["default"] = exports.plugin;
