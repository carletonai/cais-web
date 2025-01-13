module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js",
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    "^react-social-icons$": "<rootDir>/__mocks__/react-social-icons.js",
  },
  testMatch: ["<rootDir>/src/**/*.{test,spec}.{ts,tsx}"],
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
};
