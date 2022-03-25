import * as bcrypt from 'bcrypt'

/**
 * 生成盐
 * @returns
 */
export async function makeSalt(): Promise<string> {
  const salt = await bcrypt.genSalt()
  return salt
}

/**
 * 使用盐加密文本
 * @param text:string
 * @param saltOrRounds string|number default:10
 * @returns
 */
export async function makeHash(text: string, saltOrRounds: string | number = 10): Promise<string> {
  const hash = await bcrypt.hash(text, saltOrRounds)
  return hash
}

/**
 *
 * @param text:string
 * @param hash:string
 * @returns isMatch:boolean
 */
export async function compare(text: string, hash: string) {
  const isMatch: boolean = await bcrypt.compare(text, hash)
  return isMatch
}
