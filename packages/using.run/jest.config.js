/** @type {import('ts-jest').JestConfigWithTsJest} */
export default {
  "setupFilesAfterEnv": ["./setupJest.js"],
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
};