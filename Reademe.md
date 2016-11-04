angular2示例

- 安装
npm install

- 编译压缩js
  npm run tsc
  npm run browserify
  npm run uglifyjs
    由于在我的环境上直接运行'uglifyjs bundle.js --screw-ie8 --compress -o bundle.min.js'输出到了屏幕上,所以改成了下边的写法
    "uglifyjs bundle.js --screw-ie8 --compress > bundle.min.js"

- 运行
  npm run start