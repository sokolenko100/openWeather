module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        extensions: [
          ".jsx",
          ".ts",
          ".tsx",
          ".android.js", //?
          ".android.tsx",
          ".ios.js", //?
          ".ios.tsx",
        ],
        root: ["./src"],
        alias: {
          "@assets": "./src/assets",
          "@components": "./src/components",
          "@constants": "./src/constants",
          "@helpers": "./src/helpers",
          "@interfaces": "./src/interfaces",
          "@navigation": "./src/navigation",
          "@screens": "./src/screens",
          "@store": "./src/store",
          "@test-mocks": "./__mocks__",
        },
      },
    ],
    [
      "react-native-reanimated/plugin",
      {
        relativeSourceLocation: true,
      },
    ],

    [
      "@babel/plugin-transform-private-methods",
      {
        loose: true,
      },
    ],
  ],
  env: {
    production: {
      plugins: [
        [
          "react-remove-properties",
          {
            properties: ["testID"],
          },
        ],
        ["react-native-paper/babel"],
      ],
    },
  },
};
