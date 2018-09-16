# ionic4-dialogflowV1

このページは、[Chatbot with Angular 5 & DialogFlow](http://www.blog.labouardy.com/chatbot-with-angular-5-dialogflow/)をほぼ写経して、ionic4アプリ作成の練習を行っているものです。


src/environments/environment.ts は、ご自身のDialogflowの設定画面でAPI VERSIONをV1 APIに設定。API KEYS (V1)のClient access tokenを入力してください。

```javascript:environment.ts
export const environment = {
  production: false,
  token: 'XXXXX(ここにDialogflow V1のtokenを入力)XXXXX'
};
```

## インストール方法


`git clone https://github.com/adash333/ionic4-dialogflowV1.git`

modify "src/environments/environment.ts"

Run `npm install`to install all dependencies.

Run `ionic serve`to start the development environment.


作成経過は以下に記載しています。

http://twosquirrel.mints.ne.jp/?p=27818


## 開発環境

```
Windows 8.1 Pro
VisualStudioCode
git version 2.16.1.windows.4
Sourcetree Version 2.4.8.0

Node v8.12.0
npm 6.1.0
Ionic (Ionic CLI) 4.1.2
Ionic Framework @ionic/angular 4.0.0-beta.7
```
