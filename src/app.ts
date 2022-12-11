import {sequelize} from "./lib/db";
import config from "./lib/config/default";
import log from "./lib/logger";
import createServer from "./utils/server";
import routes from "./routes";

const port = config.get("port") as number;
const app = createServer();
app.listen(port, () => {
    log.info(`Server is listening at http://localhost:${port}`);
    sequelize.connect();
    routes(app);
})
