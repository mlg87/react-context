const CracoAntDesignPlugin = require("craco-antd")
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")
const WebpackBar = require("webpackbar")

const plugins = [new WebpackBar({ profile: true })]
if (process.env.ANALYZE_BUNDLE) {
  plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
  webpack: {
    plugins: plugins
  },
  plugins: [{ plugin: CracoAntDesignPlugin }]
}