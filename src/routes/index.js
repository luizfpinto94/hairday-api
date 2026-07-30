import { parseRoutePath } from "../utils/parseRoutePath.js";
import { appointments } from "./appointments.js";

export const routes = [...appointments].map((route) => ({
    ...route,
    path: parseRoutePath(route.path)
}));