import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  modulePaths: ["<rootDir>/src"],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "\\.(scss)": "identity-obj-proxy",
  },
};

module.exports = config;
