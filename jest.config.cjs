module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx|js|jsx)$": ["babel-jest", { configFile: "./config/babel.config.cjs" }],
  },
  transformIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/__mocks__/"
  ],
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
  },
  testMatch: ["<rootDir>/src/app/**/*.test.{ts,tsx,js,jsx}"],
};