export default async function fetchData(url = '', options = {}) {
    try {
        const response = await fetch(url, options);
        const json = await response.json();
        return json;
    } catch (e) {
        console.warn(e);
    }
}