export function index({ request, response }) {
    const { date } = request.params;

    return response.end(JSON.stringify(date));
}