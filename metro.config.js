module.exports = {
  resolver: {
    sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Gerekli dosya uzantıları
  },
  transformer: {
    babelTransformerPath: require.resolve('metro-react-native-babel-transformer'),
  },
};
