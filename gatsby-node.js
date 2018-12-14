
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

exports.onCreateWebpackConfig = ({ actions, stage }) => {
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin()
      ]
    })
  }
}