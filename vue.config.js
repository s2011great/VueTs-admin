const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: [
    'vuex-module-decorators'
  ],
  chainWebpack: config => {
    // 原有svg图像处理loader添加exclude
    config.module
      .rule('svg')
        .exclude
          .add(resolve('src/icons'))
          .end()
    
    // 添加新的loader处理SvgIcon
    config.module
      .rule('svgIcon')
        .test(/\.svg$/)
        .include
          .add(resolve('src/icons'))
          .end()
        .use('svg-sprite-loader')
          .loader('svg-sprite-loader')
          .options({
            symbolId: 'icon-[name]'
          })
  },
  devServer: {
    open: 'chrome',
  },
}