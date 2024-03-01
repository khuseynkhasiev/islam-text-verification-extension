// api.js
console.log('подключен api.js');
async function sendTextToServer(data) {
    try {
        const response = await fetch('https://example.com/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error(`Ошибка отправки запроса: ${response.status}`);
        }

        const responseData = await response.json();
        return responseData;
    } catch (error) {
        console.error('Ошибка отправки запроса:', error);
    }
}

// export { sendTextToServer };
