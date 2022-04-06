import generator from '@babel/generator'
import traverse from '@babel/traverse'
import * as parser from '@babel/parser'


const code = "let a = 'A';let b = 'b'"
const ast = parser.parse(code,{sourceType:'module'})

console.log(ast)

traverse(ast,{
    enter(path){
        if(path.node.type==='VariableDeclaration'){
            if(path.node.kind==='let'){
                path.node.kind = 'var'
            }
        }
    }
})

const result = generator(ast,{},code)
console.log(result)