module.exports = {
  plugins: [
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
  presets: ['module:metro-react-native-babel-preset'],
};
