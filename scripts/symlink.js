const path = require('path')
const glob = require('glob')
const kadaDeploy = require('@kada/static-deploy')
const pkg = require('../package.json')

const projectDir = path.join(__dirname, '../')
const distDir = path.join(projectDir, 'dist/')

/**
 * glob.sync(pattern, [options])
 * @param {String} pattern 匹配模式
 * @param {Object} options
 * return: {Array<String>} 找到与模式匹配的文件名
 */
const pages = glob.sync('**/*.@(html|htm)', { cwd: distDir })

pages.forEach(async page => {
  const target = `kada-story/${pkg.name}/v${pkg.version}/${page}`
  const symlink = `kada-story/${pkg.name}/${page}`
  const paramsInfo = {
    env: 'production',
    target,
    symlink,
    serviceName: 'kada-h5'
  }
  const { data } = await kadaDeploy.symlink(paramsInfo)
  console.log(`准上线路径：：${target}`)
  console.log('↓')
  console.log(`线上路径：：${symlink}`)
  console.log('↓')
  console.log(`线上地址：：${data}`)
})
