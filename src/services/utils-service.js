function isObject(obj) {
    return obj !== null && Boolean(obj) && typeof obj === 'object' && !Array.isArray(obj);
}

export {
    isObject
}