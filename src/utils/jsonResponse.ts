export function generateResponse<T = unknown>(statusCode: number, headers: any, message: string, data: T) {
    return {
        statusCode,
        headers,
        body: JSON.stringify({
            message,
            data,
        }),
    };
}
