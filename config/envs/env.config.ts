import * as fs from 'fs'
import * as path from 'path'

function parseEnv() {
  const env = process.env.NODE_ENV
  const envPath = path.resolve(`config/envs/.env.${env}`)
  if (!fs.existsSync(envPath)) {
    throw new Error('缺少环境配置文件')
  }

  return envPath
}

export default parseEnv()
