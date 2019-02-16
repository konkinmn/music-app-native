module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true
  },
  "plugins": [
    "react"
  ],
  "extends": "airbnb",
  "rules": {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/prefer-stateless-function": "off"
  }
};
