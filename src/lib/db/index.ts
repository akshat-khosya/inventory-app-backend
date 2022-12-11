import { Sequelize } from "sequelize";
import config from "../config/default";
import log from "../logger";



class Db {
    sequelize: any;
    constructor() {
        this.sequelize = new Sequelize(
            config.get('DB_NAME') as string,
            config.get('DB_USER') as string,
            config.get('DB_PASSWORD') as string,
            {
                host: config.get('DB_HOST') as string,
                port: config.get('DB_PORT') as number,
                dialect: 'mysql',
                dialectOptions: {
                    ssl: {
                        rejectUnauthorized: true,
                        minVersion: 'TLSv1.2'
                    }
                }
            }
        );
    }
    connect() {
        this.sequelize.authenticate()
            .then(() => {
                log.info('Connection has been established successfully.');
            })
            .catch((err: any) => {
                log.error('Unable to connect to the database:');
                log.error((err as Error).message);
            });
    }
}

let sequelize = new Db();
export { sequelize };