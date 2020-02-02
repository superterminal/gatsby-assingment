export default function dateSort(dataToSort, content) {
    return dataToSort.sort((a, b) => {
        if (content === 'ASC') {
            return new Date(a.node.date) - new Date(b.node.date);
        } else {
            return new Date(b.node.date) - new Date(a.node.date);
        }
    });
}