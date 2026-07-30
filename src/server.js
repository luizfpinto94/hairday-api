import http from "node:http";

import { jsonBodyHandler} from "./middlewares/jsonBodyHandler.js";

async function listener(request, response) {
    await jsonBodyHandler(request, response);
}

http.createServer(listener).listen(3333);