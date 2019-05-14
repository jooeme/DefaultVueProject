module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
  devServer: {
    // 环境配置
    open: true //配置自动启动浏览器
  }
};
