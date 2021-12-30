const CopyPlugin = require('copy-webpack-plugin');
const path = require('path/posix');
const nodeExternals = require('webpack-node-externals');

module.exports = function(options, webpack) {
  return {
    ...options,
    entry: ['webpack/hot/poll?100', options.entry],
    externals: [
      nodeExternals({
        allowlist: ['webpack/hot/poll?100'],
      }),
    ],
    plugins: [
      ...options.plugins,
      new webpack.WatchIgnorePlugin({
        paths: [/\.js$/, /\.d\.ts$/],
      }),
      new webpack.HotModuleReplacementPlugin(),
      new CopyPlugin({
        patterns: [{
          from: './package.json',
          to: path.join(__dirname,'dist'),
          transform(content, absoluteFrom){
            const jsonContent = JSON.parse(content);
            delete jsonContent.repository;
            delete jsonContent.dependencies;
            delete jsonContent.devDependencies;
            delete jsonContent.main;
            delete jsonContent.jest;
            jsonContent.scripts = {
              'start': 'node dist/main'
            }
            return JSON.stringify(jsonContent, null, 4);
          }
        }]
      })
      
    ],
  };
};