import { config } from "dotenv";
config();

import app from "./app";
import connect from "./database";

connect();

function main() {
  app.listen(app.get("port"), () =>
    console.log(`Listening on port ${app.get("port")}`)
  );
}

main();
