const linststagedConfig = {
  // Target your source files for linting and formatting
  "*.{js,cjs,mjs,jsx,ts,cts,mts,tsx}": ["npm run lint:fix", "prettier --write"],

  // Non-code files (like markdown or css) only need Prettier formatting
  "*.{md,css}": ["prettier --write"],
};

export default linststagedConfig;
