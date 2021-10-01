import "reflect-metadata";
import { createConnection, useContainer } from "typeorm";
import { Container } from "typeorm-typedi-extensions";
import { createExpressServer } from "routing-controllers";
import dataSourceConfiguration from './db/config/DatasourceConfiguration';
import { Controllers } from "./controllers";


useContainer(Container);

createConnection(dataSourceConfiguration).then(() => {
    const app = createExpressServer({
        controllers: [...Controllers],
    });

    const port = process.env.PORT || 8080;
    
    app.listen(port, () => {
        console.log("The server started.");
    })
});
