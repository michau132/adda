module.exports = {
  chainWebpack: config => {
    const svgRule = config.module.rule("svg");
    svgRule.uses.clear();
    svgRule.use("html-loader").loader("html-loader");
  },
  devServer: {
    proxy: {
      "^/api": {
        target: "http://51.210.149.115",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
