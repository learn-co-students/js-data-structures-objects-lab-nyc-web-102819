// Write your solution in this file!
let driver = {}

function updateDriverWithKeyAndValue(driver, key, value){
    const newObj = { ...driver };
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key){
    const driverToo = Object.assign({}, driver);
    delete driverToo[key]
    return driverToo
}

function destructivelyDeleteFromDriverByKey(driver, key){
    delete driver[key]
    return driver
}