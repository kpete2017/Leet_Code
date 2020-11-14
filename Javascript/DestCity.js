const destCity = (paths) => {

    let map = {}

    for (let i = 0; i < paths.length; i++) {
        map[paths[i][0]] = map[paths[i][0]] ? map[paths[i][0]] - 1 : -1;
        map[paths[i][1]] = map[paths[i][1]] ? map[paths[i][1]] + 1 : 1;
    }

    for (let key in map) {
        if (map[key] === 1) {
            return key;
        }
    }
}

module.exports = destCity;