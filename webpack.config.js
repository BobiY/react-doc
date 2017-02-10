const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    plugins: [new ExtractTextPlugin("index.css")],
    entry: __dirname + "/app/app.js",
    output:{
       path: __dirname,
       filename:"bundle.js"
    },
    module:{
      loaders:[
        {
          test:/\.js$/,
          loader:"babel",
          query:{
            presets:["es2015","react"]
          }
        },
        {
          test:/\.css$/,
          loader:"style!css",
        }
      ]
    },
    devServer:{
      contentBase: __dirname,
      colors: true,
      historyApiFallback: true,
      inline: true
    }
}
