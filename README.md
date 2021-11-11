# babydiary
子供の成長記録を残していけるそんなAPI

## リポジトリの説明
こちらは日々の子供の成長を永続化して残しておきたい親に向けたものです。  
外部サービスではいつサポート打ち切りになってしまうかわかりませんが、自分で用意したストレージなら安心！！

さぁあなたも自分の子供の成長を自宅サーバに保存しましょう！！

## 使い方

### 事前準備

本リポジトリはNPMへの登録は行われていないので、直接cloneしてもらうかZip形式でDLしてください。  
※なおDBはPostgresを利用しますので、初期セットアップは別途済ませてください。


```
$ cd ＜任意のディレクトリ＞
$ git clone https://github.com/t-kanzaki-ccn/babydiary.git
```

### 環境設定

初期セットアップとして、利用するDBの情報を ```src/config.js``` に記載してください。

```
    db: {
      client: "pg",
      connection: process.env.DB_URL || {
        host: process.env.DB_HOST || "127.0.0.1", //DBのIPアドレスを指定
        port: process.env.DB_PORT || 5432, // DBの利用ポートを指定
        database: process.env.DB_NAME || "babydiary", // 利用するDB名を指定
        user: process.env.DB_USER || "postgres", // DBのユーザ名を指定
        password: process.env.DB_PASSWORD || "postgres", // DBのパスワードを指定
      },
    }
```

### 関連モジュールのインストール

本リポジトリではパッケージ管理をnpmを利用して行っています。  
もし未インストールの場合は各自インストールをしてください。

```
$ npm install --production
```

### 起動

上記準備が終わったら、下記コマンドで実行することでAPIの利用が可能になります。  
定時再起動等はcronなどを利用して対応してください。機能としては提供しません。

```
$ npm start
```

## 提供API一覧

サーバ上で稼働させる事ができたら、下記APIが利用可能になります。  

### POST

#### diary

##### 説明

日付を指定して１日にあった出来事を記録します。  
同一の日付を指定した場合は、枝番となって登録されます。  

##### ENDPOINT

endpoint: /api/v1/:id/diary/:date

##### URLパラメータ

id : 子供ごとに一意に定められたID
date : 登録したい日付 形式は yyyyMMdd 形式のみを受け付ける。

##### クエリパラメータ

提供なし

##### リクエストボディ

JSON形式
下記フォーマットで送信すること。
※バリデーションチェックは未実装のため、リクエスト発行側で担保する事。

```
{
    titele: '遊園地',
    comment: '観覧車で大喜び！楽しかった！！',
    author: 'ママ'
}
```

##### HTTPレスポンスコード

成功時　201
失敗時　400

##### レスポンスボディ

JSON形式
成功時には下記形式で返却する。

```
{
    id: '001",
    date: '20211111',
    branch: '01;
}
```

### GET

### PATCH

### DELETE

