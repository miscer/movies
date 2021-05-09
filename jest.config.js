module.exports = {
  preset: "@vue/cli-plugin-unit-jest",
  testEnvironment: "jest-environment-jsdom-sixteen",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
};
