export const isNullOrEmpty = (value) => {
    return value === undefined || value === null || value === "";
}

export const isEmptyArray = (array) => {
    return array == null || array == undefined || array.length == 0;
}