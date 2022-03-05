module.exports = {
  presets: ['@babel/preset-env'],
  plugins: [
    ['@babel/transform-runtime'],
    '@babel/plugin-proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    [
      'module-resolver',
      {
        root: ['src'],
      },
    ],
  ],
};
