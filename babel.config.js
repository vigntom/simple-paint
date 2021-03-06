module.exports = {
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: [
    ['react-css-modules', {
      filetypes: {
        '.scss': {
          syntax: 'postcss-scss'
        }
      }
    }]
  ]
}
