代码转换流程：
```
source_code 
-parser-> source_AST 
-traverse-> target_AST 
-generate-> target_code 
```

运行代码：
```
// --inspect-brk 启动浏览器调试
node -r ts-node/register --inspect-brk <file> 
```