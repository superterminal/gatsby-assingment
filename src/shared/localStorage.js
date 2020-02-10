export default {
    getItem(itemName) {
        return JSON.parse(localStorage.getItem(itemName))
    },
    setItem(itemName, content) {
        return localStorage.setItem(itemName, JSON.stringify(content));
    }
}