# ezBot API
在這份代碼中，將逐步教學如何利用[Firebase Cloud Functions](https://firebase.google.com/docs/functions)建立RESTful API，並且串接Line Bot後作為Webhook使用。

## 建立環境
當你載入這份代碼之後，假設你已安裝好[node.js](https://nodejs.org)以及[yarn](https://yarnpkg.com)，那麼在專案目錄下執行以下代碼即可安裝好所需套件
```
> yarn 
```

檢視一下`package.json`中的`devDependencies`，我們引入了`@babel`[相關套件](https://babeljs.io/)，避免因為JavaScript版本不同造成語法無法使用。但也因為這個緣故，我們在執行以下指令時會報錯（目前尚未找到解法）。
```
> yarn serve

⚠  functions: Cannot start emulator. Error: Cannot find module '@google-cloud/functions-emulator/src/config'
(node:41317) UnhandledPromiseRejectionWarning: TypeError: Cannot read property 'exit' of undefined
    at /Users/jxee/Projects/AppMaster/TeddyBear/ezBot/node_modules/firebase-tools/lib/command.js:110:30
    at <anonymous>
    at process._tickDomainCallback (internal/process/next_tick.js:229:7)
(node:41317) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 2)
(node:41317) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```

因此，當你要在本地端測試時請使用以下指令，並確定看到以下訊息
```
> yarn build
> firebase serve --only functions

=== Serving from '/Users/jxee/Projects/AppMaster/TeddyBear/ezBot'...

i  functions: Preparing to emulate functions.
Warning: You're using Node.js v8.12.0 but Google Cloud Functions only supports v6.11.5.
✔  functions: api: http://localhost:5000/teddybear-dev/us-central1/api
```

## 第一支API
我們在專案內定義好了以下結構
```
root
|- (dist)
|- (src)
|  |- (functions)
|     |- (config)
|     |- (test)
|     |- .babelrc
|     |- index.js
|- firebase.json
|- .firebaserc
|- package.json
|- ReadMe.md
```
從`functions`曾說起，`index.js`中定義了所有進入點，再依據不同的`urlPath`往下展延。例如我們定義了一支`https://{HOST_URL}/api/test/helloworld`的API，那麼該API對應的實作就會在`/src/functions/test/index.js`中。依此類推，若未來要新增一組Shop API，那麼你需要新增`/src/functions/shop/index.js`這個檔案，並且在`index.js`中加上以下代碼，才能正確打通API>
```
import shop from './shop';

app.use('/shop/', shop);
```

## 關於測試
在[PostMan](https://www.getpostman.com/)上我新增了一組Team Workspace叫做`ezBot`，可以透過這個[連結](https://app.getpostman.com/join-team?invite_code=6cd450a1d6f33470e529b29e7f67c894&ws=1cee1900-5f58-4442-9912-676ec3469e0b)加入至你的Postman Collection，未來所有的API都會在裡面建立sample。