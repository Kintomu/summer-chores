function mowYard(name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log(name + " mowed the yard.");
            resolve();
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var isAwake = Math.random() > 0.25;

            if (isAwake) {
                console.log(name + " finished using the weed eater.");
                resolve();
            } else {
                reject(name + " fell asleep after mowing the yard.");
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var isAwake = Math.random() > 0.30;

            if (isAwake) {
                console.log(name + " finished trimming the hedges.");
                resolve();
            } else {
                reject(name + " fell asleep after weed eating the yard.");
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var isAwake = Math.random() > 0.35;

            if (isAwake) {
                console.log(name + " finished collecting wood.");
                resolve();
            } else {
                reject(name + " fell asleep after trimming the hedges.");
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            var isAwake = Math.random() > 0.40;

            if (isAwake) {
                console.log(name + " finished watering the garden.");
                resolve();
            } else {
                reject(name + " fell asleep after collecting wood.");
            }
        }, 500);
    });
}

function doSummerChores(name) {
    mowYard(name)
        .then(function () {
            return weedEat(name);
        })
        .then(function () {
            return trimHedges(name);
        })
        .then(function () {
            return collectWood(name);
        })
        .then(function () {
            return waterGarden(name);
        })
        .then(function () {
            console.log(name + " finished all their chores!");
        })
        .catch(function (message) {
            console.log(message);
        });
}

doSummerChores("Taylor");
