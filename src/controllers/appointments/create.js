export function create({ request, response }) {
    const { date, hour, client } = request.body;

    const data = {
        date, hour, client
    }

    return response.end(JSON.stringify(data));
}