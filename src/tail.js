const tail = (list) => {
    if (list.length == 0) return [];
    return list.splice(1, list.length-1);
}
module.exports = tail;