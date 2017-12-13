module.exports = {
    "env": {
        "browser": true,
        "node": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "keyword-spacing": 2,
        "indent": [2, 2],
        "no-alert": 2,
        "no-bitwise": 2,
        "no-console": 0,
        "no-extra-boolean-cast": 0,
        "no-loop-func": 2,
        "no-multi-spaces": 2,
        "no-underscore-dangle": 0,
        "no-unused-vars": 0,
        "quote-props": [2, "as-needed"],
        "quotes": [2, "single", "avoid-escape"],
        "space-before-blocks": 2,
        "space-before-function-paren": [2, {"anonymous": "always", "named": "never"}],
        "space-infix-ops": 2,
        "strict": 0
    }
};