// Convert a string from snake_case to camelCase
const snakeToCamel = (snakeStr) => {
  return snakeStr.replace(/_([a-z])/g, (_, letter) => letter.toUpperCase())
}

// Rename all the keys of an object from snake_case to camelCase
export const normalize = (obj) => {
  // If the input is an array of object to normalize
  if(Array.isArray(obj))
    return obj.map(elt => normalize(elt))

  const entries = Object.entries(obj);

  const normalizedObj = entries.reduce((normalizedObj, [key, value]) => ({
    ...normalizedObj,
    [snakeToCamel(key)]: value
  }), {});

  return normalizedObj;
}

