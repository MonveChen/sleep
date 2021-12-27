/*
 * @Author: Monve
 * @Date: 2021-12-17 15:54:15
 * @LastEditors: Monve
 * @LastEditTime: 2021-12-27 15:53:58
 * @FilePath: /sleep/src/Sleep.ts
 */
export const sleep = (ms: number) => {
  return new Promise<void>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve()
      }, ms);
    } catch (error) {
      reject(error)
    }
  })
}
