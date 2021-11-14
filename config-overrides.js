/* config-overrides.js */

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.module.rules.push (
    {
      test: /\.html$/i,
      loader: "html-loader",
    }
  )
  
  return config;
}