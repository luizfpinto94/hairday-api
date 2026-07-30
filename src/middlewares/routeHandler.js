import { routes } from "../routes";

export function routeHandler(request, response) {
    const route = routes.find((route) => {
        route.method === request.method && route.path.test(request.url);
    });

    if(route) {
        const paramsRoute = request.url.match(route.path);

        const { query, ...params } = paramsRoute.groups;

        request.params = params;

        return route.controller({ request, response });
    }

    return response.writeHead(404).end("Recurso solicitado não encontado");
}