const axios = require("axios");
/**
 * Відправляємо запит 
 * @returns void
 */
export async function testAxios() {
    const url = "https://jsonplaceholder.typicode.com/posts/1";

    try {
        const response = await axios.get(url, {
          maxContentLength: 2000, timeout: 1000
        });
        const data = response.data;
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
        error.request.res.destroy(); // нівелює вразливість DOS атак від переповнення maxContentLength (виправлення # 1098)
         
    }
}