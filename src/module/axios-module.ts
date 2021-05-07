const axios = require("axios");
/**
 * Відправляємо запит 
 * @returns void
 */
export async function testAxios() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    try {
        const response = await axios.get(url,{
            timeout: 1000
        });
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
}