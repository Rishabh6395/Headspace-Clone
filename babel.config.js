module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@": "./src", // Set the alias '@' to resolve to the 'src' directory
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
