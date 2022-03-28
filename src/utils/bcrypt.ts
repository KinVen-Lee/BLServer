import * as bcrypt from 'bcryptjs'

/**
 * 生成盐
 * @returns
 */
export async function makeSalt(): Promise<string> {
  return bcrypt.genSalt()
}

/**
 * 使用盐加密文本
 * @param text:string
 * @param saltOrRounds string|number default:10
 * @returns
 */
export async function makeHash(text: string, saltOrRounds: string | number = 10): Promise<string> {
  return bcrypt.hash(text, saltOrRounds)
}

/**
 *
 * @param text:string
 * @param hash:string
 * @returns isMatch:boolean
 */
export async function compare(text: string, hash: string): Promise<boolean> {
  return bcrypt.compare(text, hash)
}
