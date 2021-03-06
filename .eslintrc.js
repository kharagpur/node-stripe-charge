module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "sourceType": "module"
    },
    "rules": {
        "prefer-arrow-callback": "error",
        "one-var": "off",
        "no-var": "error",
        "prefer-const": "error",
        "no-param-reassign": [
            "warn",
            {
                "props": false
            }
        ],
        "brace-style": "error",
        "no-else-return": "error",
        "quote-props": [
            "error",
            "as-needed"
        ],
        "no-mixed-spaces-and-tabs": "error",
        "prefer-template": "error",
        "newline-per-chained-call": "error",
        "indent": ["error", 2, { "SwitchCase": 1 }],
        "dot-location": ["error", "property"],
        "quotes": ["error", "single"],
        "object-curly-spacing": [
            "error",
            "always"
        ],
        "space-in-parens": "error",
        "space-before-blocks": "error",
        "keyword-spacing": "error",
        "no-multi-spaces": "error",
        "comma-spacing": "error",
        "key-spacing": "error",
        "block-spacing": "error",
        "padded-blocks": "off",
        "space-before-function-paren": [
            "error",
            "never"
        ],
        "spaced-comment": "error",
        "object-shorthand": "error",
        "array-bracket-spacing": "off",
        "no-console": "off",
        "max-len": [
            "error",
            140
        ],
        "no-trailing-spaces": "error",
        "eol-last": "error",
        "no-use-before-define": "off",
        "no-useless-escape": "error",
        "one-var-declaration-per-line": "off",
        "vars-on-top": "error",
        "no-mixed-operators": "off",
        "no-prototype-builtins": "warn",
        "object-property-newline": "error",
        "prefer-rest-params": "error",
        "no-shadow": "off",
        "no-undef": "error",
        "no-unused-vars": "error",
        "no-spaced-func": "error",
        "no-underscore-dangle": "off", // Unexpected dangling '_' in '__testonly__'
        "arrow-spacing": "error",
        "dot-notation": "error",
        "semi": ["error", "always"],
        "arrow-body-style": [
            "off",
            "as-needed"
        ],
        "space-infix-ops": "error",
        "no-multi-str": "error",
        "no-sequences": "error",
        "guard-for-in": "error",
        "no-restricted-syntax": "error",
        "no-nested-ternary": "error",
        "no-return-assign": "error",
        "no-unused-expressions": "error",
        "block-scoped-var": "error",
        "radix": "warn",
        "consistent-return": "off",
        "default-case": "error",
        "operator-assignment": "off",
        "no-lonely-if": "off",
        "space-unary-ops": "error",
        "no-unneeded-ternary": "error",
        "no-whitespace-before-property": "error",
        "prefer-spread": "error",
        "wrap-iife": "error",
        "no-multiple-empty-lines": "error",
        "no-duplicate-case": "error",
        "no-extra-boolean-cast": "error",
        "semi-spacing": "error",
        "no-extra-bind": "error",
        "comma-style": "error",
        "no-useless-concat": "error",
        "no-void": "error",
        "array-callback-return": "error",
        "no-empty-function": "error",
        "no-useless-constructor": "error",
        "no-unreachable": "error",
        "no-redeclare": "error",
        "no-dupe-keys": "error",
        "new-cap": "warn",
        "camelcase": "error",
        "eqeqeq": "error",
        "curly": "error",
        "computed-property-spacing": "error",
        "no-shadow-restricted-names": "error",
        "no-confusing-arrow": "off",
        "new-parens": "error",
        "no-throw-literal": "error",
        "yoda": "error",
        "no-func-assign": "warn", // cashoutPage.js 165:7
        "no-extra-semi": "error",
        "no-cond-assign": "error",
        "no-loop-func": "error",
        "func-names": "off",
        "no-unexpected-multiline": "error",
        "import/no-mutable-exports": "off",
        "import/prefer-default-export": "off",
        "no-plusplus": "off",
        "arrow-parens": [
            "error",
            "as-needed"
        ],
        "no-tabs": "off",
        "no-bitwise": "off",
        "class-methods-use-this": "off",
        "func-call-spacing": "off",
        "comma-dangle": [
            "error",
            "never"
        ],
        "strict": "off", // 'use strict' is unnecessary inside of modules
        "max-lines": "off"
    },
    "globals": {
        "require": false,
        "process": false,
        "describe": false,
        "it": false,
        "xit": false,
        "iit": false,
        "beforeEach": false,
        "afterEach": false,
        "before": false,
        "after": false,
        "should": false,
        "module": true,
        "__dirname": false
    }
};