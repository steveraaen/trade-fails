module.exports = {

  entry: "./app/app.js",
  output: {
    filename: "public/bundle.js"
  },
  // This section desribes the transformations we will perform
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: /app/,
        loader: "babel",
        query: {
          presets: ["react", "es2015"]
        }
      }
    ]
  },
  devtool: "eval-source-map"
};
