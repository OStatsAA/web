/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.ts$": "ts-jest",
    "^.+\\.svelte$": [
      "svelte-jester",
       {
        "preprocess": true
      } 
    ],
  },
  moduleFileExtensions: ["js", "ts","svelte"],
  transformIgnorePatterns: [
    "node_modules/(?!(flowbite-svelte)|(svelte-heros))"
  ],
};