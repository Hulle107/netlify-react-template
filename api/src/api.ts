import { APIGatewayEvent, Context } from 'aws-lambda';
import lambda from 'lambda-api';

const api = lambda({
    base: '.netlify/functions/api'
});

api.get('/hello-world', async (request, response) => {
    return { message: 'Hello World!' };
});

exports.handler = async (event: APIGatewayEvent, context: Context) => {
    context.callbackWaitsForEmptyEventLoop = false;
    return await api.run(event, context);
};