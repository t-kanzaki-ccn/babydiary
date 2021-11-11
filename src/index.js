// サーバセットアップ
const { setupServer } = require("./server");


// DB設定

// config.jsの中に記載してある設定情報を読み込む
const config = require("./config");

// データベースへの接続を初期化する。
const knex = require("knex")(config.db);

const server = setupServer(knex);
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("===============================");
    console.log("baby diary API server started");
    console.log("===============================");
});
