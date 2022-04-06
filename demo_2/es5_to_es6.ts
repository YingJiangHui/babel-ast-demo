import { parse } from "@babel/parser"
import * as babel from "@babel/core"
import * as fs from 'fs'

const code = fs.readFileSync('./demo_2/test.js').toString()

const ast = parse(code, { sourceType: 'module' })
// 使用@babel/perset-env中的规则来快速转换es5代码
const result = babel.transformFromAstSync(ast, code, {
  presets: ['@babel/preset-env']
})
if(result?.code)
    fs.writeFileSync('./demo_2/test.es5.js', result.code)

