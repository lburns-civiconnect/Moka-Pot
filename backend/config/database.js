const path = require("path");

// sqlite or postgres depending on environmnet variables
module.exports = ({ env }) => ({
  connection: {
    client: env("DATABASE_CLIENT", "sqlite"),
    connection: {
      filename: path.join(
        __dirname,
        "..",
        env("DATABASE_FILENAME", ".tmp/data.db")
      ),
      host: env("DATABASE_HOST", null),
      port: env.int("DATABASE_PORT", null),
      database: env("DATABASE_NAME", null),
      user: env("DATABASE_USERNAME", null),
      password: env("DATABASE_PASSWORD", null),
      ssl: { rejectUnauthorized: false },
    },
    useNullAsDefault: true,
  },
});
