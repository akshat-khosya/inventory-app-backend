import env from 'dotenv';

class Config {
    _config: Record<string, any>;
    constructor() {
        env.config();
        this._config = {
            port: process.env.PORT,
            DB_NAME:process.env.DB_NAME,
            DB_USER:process.env.DB_USER,
            DB_PASSWORD:process.env.DB_PASSWORD,
            DB_HOST:process.env.DB_HOST,
            DB_PORT:process.env.DB_PORT,
            ACCOUNTSID:process.env.ACCOUNTSID,
            AUTHTOKEN:process.env.AUTHTOKEN,
            privateKey:process.env.PRIVATE_KEY,
        };

        
    }

    get(key: string): any {
        const val: any = this._config[key] ?? null;

        if (!val) {
            throw new Error(`Config for key [${key}] not found`);
        }

        return val;
    }
    set(key: string, val: any): void {
        this._config[key] = val;
    }
}


const config = new Config();

export default config;