const px2rem = require('postcss-plugin-px2rem')
const path = require('path')
const yaml = require('js-yaml')
const fs = require('fs')
const webpack = require('webpack')
const env = process.env.NODE_ENV || 'staging'
const configDir = path.resolve(__dirname, './config')

const commonEnvDir = path.resolve(configDir, 'env.yaml')
const envDir = path.resolve(configDir, `env.${env}.yaml`)

const commonEnvConfig = commonEnvDir ? yaml.safeLoad(fs.readFileSync(commonEnvDir, 'utf8')) : {}
const envConfig = envDir ? yaml.safeLoad(fs.readFileSync(envDir, 'utf8')) : {}
const globalConfig = Object.assign({}, commonEnvConfig, envConfig)

// console.log('configDir: ', configDir)
// console.log('commonEnvDir: ', commonEnvDir)
// console.log('globalConfig: ', globalConfig)
console.log('process.env.NODE_ENV: ', env)

const pkgDir = path.resolve(__dirname, './package.json')
const pkgInfo = pkgDir ? require(pkgDir) : null

let publicPath = `${globalConfig.baseUrl || ''}${/\/+$/.test(globalConfig.baseUrl) ? '' : '/'}${pkgInfo && pkgInfo.name ? pkgInfo.name : ''}`
console.log('publicPath: ', publicPath)

module.exports = {
  publicPath,
  devServer: {},
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: '222',
      iconUrl: '//cdn.hhdd.com/frontend/as/i/549d99df-78dd-50ff-8277-77a84162aaa3.png',
    }
  },
  css: {
    // https://www.npmjs.com/package/postcss-plugin-px2rem
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({
            rootValue: 75, 
            exclude: 'src/components/pc',
            //（布尔值）允许在媒体查询中转换px。
            mediaQuery: false,
          }),
          px2rem({
            rootValue: 192, 
            exclude: 'src/components/mobile',
            mediaQuery: false,
          }),
        ]
      }
    }
  },
  configureWebpack: {
    devtool: env !== 'production' ? 'source-map' : '',
    plugins: [
      // 直接使用变量名 GLOBALE_CONFIG
      new webpack.DefinePlugin({
        GLOBALE_CONFIG: JSON.stringify(globalConfig),
      }),
    ]
  }
}