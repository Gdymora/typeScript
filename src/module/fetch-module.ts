const fetch = require('node-fetch');
/**
 * Відправляємо запит 
 * @returns void
 */
export async function testFetch() {
    const todo = {
        userId: 123,
        title: "loren impsum doloris",
        completed: false
    }
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: { 'Content-Type': 'application/json' }       
    });
    const data = response.json();
    return data;
}