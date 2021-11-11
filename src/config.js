module.exports = {
    // database connection configs
    // You might want to update this
    db: {
      client: "pg",
      connection: process.env.DB_URL || {
        host: process.env.DB_HOST || "127.0.0.1", //利用時は書き換え要 現在はデフォルトを設定
        port: process.env.DB_PORT || 5432,
        database: process.env.DB_NAME || "babydiary",
        user: process.env.DB_USER || "postgres",
        password: process.env.DB_PASSWORD || "postgres",
      },
    }
}