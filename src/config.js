// Configuration
const config = {
    apiUrl: 'http://localhost:3000',
    timeout: 5000
}const config = {
    apiUrl: 'https://api.webflow.com',  // изменили на https
    timeout: 5000,
    maxRetries: 3  // добавили
};

module.exports = config;
