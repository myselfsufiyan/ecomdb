import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
dotenv.config()

export default new Sequelize("db_dev", "postgres", "postgress", {
  host: "localhost",
  port: 5432,
  dialect: "postgres"
});