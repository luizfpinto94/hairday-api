import { index } from "../controllers/appointments/index.js";
import { create } from "../controllers/appointments/create.js";


export const appointments = [
    {
        method: "GET",
        path: "/appointments/date/:date",
        controller: index
    },
    {
        method: "POST",
        path: "/appointments",
        controller: create
    }
]