import { Sequelize } from "sequelize-typescript";
import { config } from "./config/config";

export const sequelize = new Sequelize({
  username: config.username,
  password: config.password,
  database: config.database,
  host: config.host,
  port: config.POSTGRES_PORT,
  dialect: "postgres",
  storage: ":memory:",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
});

// export const sequelize = new Sequelize({
//   username: config.username,
//   password: config.password,
//   database: config.database,
//   host: config.host,
//   dialect: "postgres",
//   storage: ":memory:",
//   dialectOptions: {
//     ssl: {
//       require: true,
//       rejectUnauthorized: false
//     }
//   },
// });
