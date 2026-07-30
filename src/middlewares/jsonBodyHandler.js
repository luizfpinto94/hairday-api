export async function jsonBodyHandler(request, response) {
    const buffers = [];

    try {
        for await (const chunk of request) {
            buffers.push(chunk);
        }

        request.body = JSON.parse(Buffer.concat(buffers).toString());
    } catch (error) {
        request.body = null;
    }

    return response.setHeader("Content-Type", "application/json");
}