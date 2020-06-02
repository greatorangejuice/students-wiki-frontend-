export default async function fetchData(url = '', options = {}) {
  try {
    const response = await fetch(url, options);
    const json = await response.json();
    return json;
  } catch (e) {
    // eslint-disable-next-line no-console
    console.warn(e);
    return false;
  }
}
