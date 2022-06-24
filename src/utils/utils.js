export function getFromLocal(key, defaultValue = []) {
  try {
    return JSON.parse(localStorage.getItem(key)) || defaultValue;
  } catch {
    return defaultValue;
  }
}

export function getFromLocalUnparsed(key, defaultValue = []) {
  try {
    return localStorage.getItem("categ") || defaultValue;
  } catch {
    return defaultValue;
  }
}

export function setToLocal(key, dataArray, defaultValue = []) {
  try {
    return localStorage.setItem(key, JSON.stringify(dataArray)) || defaultValue;
  } catch {
    return defaultValue;
  }
}
